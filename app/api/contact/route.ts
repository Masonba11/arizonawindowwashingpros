import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

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
      params.append('from_name', 'Arizona Window Washing Pros Website')

      console.log('Submitting to Web3Forms with access key:', FORM_ACCESS_KEY.substring(0, 8) + '...')

      const formResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: params.toString(),
      })

      const formResult = await formResponse.json()
      console.log('Web3Forms response status:', formResponse.status)
      console.log('Web3Forms response:', JSON.stringify(formResult))

      if (!formResponse.ok) {
        console.error('Web3Forms HTTP error:', formResponse.status, formResult)
        throw new Error(`Web3Forms API error: ${formResponse.status} - ${JSON.stringify(formResult)}`)
      }

      if (!formResult.success) {
        console.error('Web3Forms submission failed:', formResult)
        throw new Error(`Web3Forms submission failed: ${formResult.message || JSON.stringify(formResult)}`)
      } else {
        console.log('Form submitted successfully via Web3Forms:', formResult)
      }
    } catch (formError: any) {
      console.error('Error submitting to Web3Forms:', formError)
      console.error('Web3Forms error details:', {
        message: formError?.message,
        stack: formError?.stack,
        name: formError?.name,
      })
      // Don't throw - we still want to save the submission locally and return success to user
    }

    // Optionally save to JSON file (for backup/development)
    try {
      const dataDir = path.join(process.cwd(), 'data')
      if (!existsSync(dataDir)) {
        await mkdir(dataDir, { recursive: true })
      }

      const filePath = path.join(dataDir, 'contact-submissions.json')
      let submissions: any[] = []

      // Read existing submissions if file exists
      if (existsSync(filePath)) {
        const fileContent = await readFile(filePath, 'utf-8')
        submissions = JSON.parse(fileContent)
      }

      // Add new submission
      submissions.push(submission)

      // Write back to file
      await writeFile(filePath, JSON.stringify(submissions, null, 2))
    } catch (fileError) {
      // If file writing fails, just log it (non-critical)
      console.error('Failed to save submission to file:', fileError)
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your submission! We\'ll contact you soon.' 
      },
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
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

