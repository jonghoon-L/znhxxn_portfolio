import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    const transporter = nodemailer.createTransport({
      service: 'naver',
      auth: {
        user: process.env.NAVER_EMAIL,
        pass: process.env.NAVER_PASSWORD
      }
    })

    const mailOptions = {
      from: process.env.NAVER_EMAIL,
      to: 'ghoon7777@naver.com',
      subject: `포트폴리오 연락: ${name}님으로부터`,
      html: `
        <h2>새로운 메시지가 도착했습니다</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>메시지:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: '이메일이 전송되었습니다.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { success: false, error: '이메일 전송에 실패했습니다.' },
      { status: 500 }
    )
  }
}
