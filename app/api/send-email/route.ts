import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // 환경 변수 검증
    const naverEmail = process.env.NAVER_EMAIL
    const naverPassword = process.env.NAVER_PASSWORD

    // 디버깅을 위한 로그 (개발 환경에서만)
    if (process.env.NODE_ENV === 'development') {
      console.log('Environment variables check:', {
        hasEmail: !!naverEmail,
        hasPassword: !!naverPassword,
        emailLength: naverEmail?.length || 0,
        passwordLength: naverPassword?.length || 0
      })
    }

    if (!naverEmail || !naverPassword) {
      console.error('Missing email credentials:', {
        hasEmail: !!naverEmail,
        hasPassword: !!naverPassword,
        emailValue: naverEmail ? 'set' : 'missing',
        passwordValue: naverPassword ? 'set' : 'missing'
      })
      return NextResponse.json(
        { 
          success: false, 
          error: '이메일 서버 설정이 완료되지 않았습니다. 환경 변수를 확인하고 개발 서버를 재시작해주세요.' 
        },
        { status: 500 }
      )
    }

    // 공백 제거 (혹시 모를 공백 제거)
    const trimmedEmail = naverEmail.trim()
    const trimmedPassword = naverPassword.trim()

    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 465,
      secure: true,
      auth: {
        user: trimmedEmail,
        pass: trimmedPassword
      }
    })

    const mailOptions = {
      from: `"포트폴리오 연락" <${trimmedEmail}>`,
      to: 'ghoon7777@naver.com',
      replyTo: email,
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
  } catch (error: any) {
    console.error('Email error:', error)
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    })
    
    // 더 구체적인 에러 메시지 제공
    let errorMessage = '이메일 전송에 실패했습니다.'
    if (error.code === 'EAUTH') {
      if (error.responseCode === 535) {
        errorMessage = '이메일 인증에 실패했습니다. 다음을 확인해주세요:\n1. 앱 비밀번호가 정확히 복사되었는지 확인\n2. 이메일 주소가 정확한지 확인\n3. 네이버 메일 설정에서 SMTP 사용이 활성화되어 있는지 확인\n4. 앱 비밀번호에 공백이나 특수문자가 포함되지 않았는지 확인'
      } else {
        errorMessage = '이메일 인증에 실패했습니다. 앱 비밀번호와 이메일 주소를 확인해주세요.'
      }
    } else if (error.code === 'ECONNECTION') {
      errorMessage = '이메일 서버에 연결할 수 없습니다. 인터넷 연결을 확인해주세요.'
    } else if (error.code === 'EENVELOPE') {
      errorMessage = '이메일 주소 형식이 올바르지 않습니다.'
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    )
  }
}
