import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  console.log('request we getting', req)
  const headers = { 'Access-Control-Allow-Origin': '*' }
  console.log(req.body)
  try {
    const body = await req.json()
    const { name, whatsapp, wishes } = body
    console.log('body', body)

    if (!name || !whatsapp || !wishes) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug logging
      logger: true, // Enable logger
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'kanikagotharsh@gmail.com', // Replace with your email address
      subject: `Message from ${name}`,
      text: `Name: ${name}\nWhatsApp: ${whatsapp}\nWishes: ${wishes}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200, headers }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    )
  }
}
