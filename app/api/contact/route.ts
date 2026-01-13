import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const FORM_ACCESS_KEY = process.env.FORM_ACCESS_KEY || 'cc2a600a-378f-4b13-819f-b44b924ef328'

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
      const formData = new FormData()
      formData.append('access_key', FORM_ACCESS_KEY)
      formData.append('name', name)
      formData.append('phone', phone)
      formData.append('email', email)
      formData.append('city', city || 'Not specified')
      formData.append('service', service || 'Not specified')
      formData.append('message', message || '')
      formData.append('subject', `New Contact Form Submission from ${name}`)
      formData.append('from_name', 'Arizona Window Washing Pros Website')

      const formResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const formResult = await formResponse.json()

      if (!formResponse.ok || !formResult.success) {
        console.error('Web3Forms submission failed:', formResult)
        // Continue to save locally even if email fails
      } else {
        console.log('Form submitted successfully via Web3Forms')
      }
    } catch (formError) {
      console.error('Error submitting to Web3Forms:', formError)
      // Continue to save locally even if email fails
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
      { success: true, message: 'Thank you for your submission! We\'ll contact you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

