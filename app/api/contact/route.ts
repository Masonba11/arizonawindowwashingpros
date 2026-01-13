import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

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

    // Optionally save to JSON file (for development/testing)
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

    // In production, you would typically:
    // - Send an email notification
    // - Save to a database
    // - Integrate with a CRM

    return NextResponse.json(
      { success: true, message: 'Thank you for your submission!' },
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

