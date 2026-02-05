import { NextResponse } from 'next/server'

const FORM_ACCESS_KEY = '0f32ed52-78cd-4ae4-8e56-df6c2b533b71'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, address, type, message, city, source } = body
    
    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name and phone are required' },
        { status: 400 }
      )
    }
    
    // Log the lead submission
    console.log('=== LEAD SUBMISSION ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Data:', JSON.stringify(body, null, 2))
    
    // Send to Web3Forms
    let web3formsStatus: { success: boolean; error: string | null } = { success: false, error: null }
    try {
      const params = new URLSearchParams()
      params.append('access_key', FORM_ACCESS_KEY)
      params.append('name', name)
      params.append('phone', phone)
      params.append('email', body.email || `${phone.replace(/\D/g, '')}@noreply.com`)
      params.append('address', address || '')
      params.append('message', `Service Type: ${type}\nAddress: ${address}\nCity: ${city || 'Not specified'}\nSource: ${source || 'Landing Page'}\n\nMessage: ${message || 'No additional message'}`)
      params.append('subject', `New Lead: ${type} Window Cleaning - ${city || 'Unknown City'}`)
      params.append('from_name', 'Arizona Window Washing Pros')
      
      console.log('=== Submitting to Web3Forms ===')
      
      const formResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: params.toString(),
      })
      
      const contentType = formResponse.headers.get('content-type') || ''
      let formResult
      
      if (contentType.includes('application/json')) {
        formResult = await formResponse.json()
      } else {
        const textResponse = await formResponse.text()
        console.error('⚠️ Web3Forms returned non-JSON response:', textResponse.substring(0, 200))
        throw new Error(`Web3Forms returned ${contentType} instead of JSON`)
      }
      
      if (!formResponse.ok || !formResult.success) {
        console.error('❌ Web3Forms submission failed:', formResult)
        web3formsStatus = { success: false, error: formResult.message || 'Unknown error' }
      } else {
        console.log('✅ Form submitted successfully via Web3Forms!')
        web3formsStatus = { success: true, error: null }
      }
    } catch (formError: any) {
      console.error('❌ Error submitting to Web3Forms:', formError)
      web3formsStatus = { success: false, error: formError?.message || 'Network error' }
    }
    
    if (web3formsStatus.success) {
      return NextResponse.json(
        { success: true, message: 'Thank you! We will contact you shortly.', web3forms: web3formsStatus },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { success: false, message: 'Something went wrong. Please try calling us directly.', web3forms: web3formsStatus },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try calling us directly.' },
      { status: 500 }
    )
  }
}

