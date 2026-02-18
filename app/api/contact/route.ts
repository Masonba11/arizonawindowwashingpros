import { NextRequest, NextResponse } from 'next/server'

const FORM_ACCESS_KEY = '0f32ed52-78cd-4ae4-8e56-df6c2b533b71'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, city, service, message } = body

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required' },
        { status: 400 }
      )
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create submission object
    const submission = {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      city: city || 'Not specified',
      service: service || 'Not specified',
      message: message || '',
    }

    // Log to console (for development)
    console.log('Contact Form Submission:', submission)

    // Send to Web3Forms
    let web3formsStatus: { success: boolean; error: string | null } = { success: false, error: null }
    try {
      // Use URLSearchParams for better compatibility with serverless functions
      const params = new URLSearchParams()
      params.append('access_key', FORM_ACCESS_KEY)
      params.append('name', name)
      params.append('phone', phone)
      params.append('email', email)
      params.append('city', city || 'Not specified')
      params.append('service', service || 'Not specified')
      params.append('message', message || '')
      params.append('subject', `New Contact Form Submission from ${name}`)
      params.append('from_name', 'Arizona Window Cleaning Pros Website')

      console.log('=== Submitting to Web3Forms ===')
      console.log('Access key:', FORM_ACCESS_KEY.substring(0, 8) + '...')
      console.log('Data being sent:', { name, email, phone, city, service })

      const formResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: params.toString(),
      })

      // Check content type before parsing JSON
      const contentType = formResponse.headers.get('content-type') || ''
      console.log('=== Web3Forms Response ===')
      console.log('HTTP Status:', formResponse.status, formResponse.statusText)
      console.log('Content-Type:', contentType)

      let formResult
      if (contentType.includes('application/json')) {
        formResult = await formResponse.json()
      } else {
        // If not JSON, get text to see what we actually received
        const textResponse = await formResponse.text()
        console.error('⚠️ Web3Forms returned non-JSON response (HTML?):')
        console.error('First 200 chars:', textResponse.substring(0, 200))
        throw new Error(`Web3Forms returned ${contentType} instead of JSON. Status: ${formResponse.status}`)
      }

      console.log('Success:', formResult.success)
      console.log('Message:', formResult.message)
      console.log('Full response:', JSON.stringify(formResult, null, 2))

      if (!formResponse.ok) {
        console.error('❌ Web3Forms HTTP error:', formResponse.status, formResult)
        web3formsStatus = { success: false, error: `HTTP ${formResponse.status}: ${formResult.message || JSON.stringify(formResult)}` }
      } else if (!formResult.success) {
        console.error('❌ Web3Forms submission failed:', formResult)
        console.error('Error message:', formResult.message)
        web3formsStatus = { success: false, error: formResult.message || 'Unknown error' }
      } else {
        console.log('✅ Form submitted successfully via Web3Forms!')
        console.log('Submission ID:', formResult.message || 'N/A')
        web3formsStatus = { success: true, error: null }
      }
    } catch (formError: any) {
      console.error('❌ Error submitting to Web3Forms:', formError)
      console.error('Error details:', {
        message: formError?.message,
        stack: formError?.stack,
        name: formError?.name,
      })
      web3formsStatus = { success: false, error: formError?.message || 'Network error' }
      // Don't throw - we still want to save the submission locally and return success to user
    }

    // Skip local file save in serverless environments (Vercel, etc.)
    // File writes don't work in read-only filesystems
    // Submissions are sent to Web3Forms instead

    // Only return success if Web3Forms succeeded
    if (web3formsStatus.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your submission! We\'ll contact you soon.',
          web3forms: web3formsStatus
        },
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    } else {
      // Return error if Web3Forms failed
      return NextResponse.json(
        { 
          success: false,
          error: web3formsStatus.error || 'Failed to submit form. Please try calling us directly.',
          web3forms: web3formsStatus
        },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false,
        error: error?.message || 'Internal server error' 
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }
}

