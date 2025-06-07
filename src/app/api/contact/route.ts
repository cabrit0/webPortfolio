import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, message } = body
    
    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }
    
    // Sanitização básica
    const sanitizedName = name.trim().substring(0, 100)
    const sanitizedEmail = email.trim().toLowerCase()
    const sanitizedMessage = message.trim().substring(0, 2000)
    
    // Email principal para João
    await resend.emails.send({
      from: 'portfolio@resend.dev', // Domínio padrão do Resend
      to: process.env.CONTACT_EMAIL!,
      subject: `Contacto Portfolio: ${sanitizedName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
              🔔 Novo Contacto do Portfolio
            </h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="background: #f8fafc; padding: 25px; border-radius: 8px; border-left: 4px solid #06b6d4;">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px;">👤 Nome:</h3>
                <p style="color: #475569; margin: 0; font-size: 18px; font-weight: 500;">${sanitizedName}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px;">📧 Email:</h3>
                <p style="color: #475569; margin: 0; font-size: 16px;">
                  <a href="mailto:${sanitizedEmail}" style="color: #06b6d4; text-decoration: none;">${sanitizedEmail}</a>
                </p>
              </div>
              
              <div>
                <h3 style="color: #1e293b; margin: 0 0 12px 0; font-size: 16px;">💬 Mensagem:</h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e2e8f0;">
                  <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
                </div>
              </div>
            </div>
            
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                📅 Enviado em ${new Date().toLocaleString('pt-PT', { 
                  timeZone: 'Europe/Lisbon',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      `
    })
    
    // Auto-resposta para o utilizador
    await resend.emails.send({
      from: 'portfolio@resend.dev',
      to: sanitizedEmail,
      subject: 'Obrigado pelo teu contacto! 🚀',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
              ✨ Obrigado pelo contacto, ${sanitizedName}!
            </h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Recebi a tua mensagem e vou responder o mais brevemente possível. Normalmente respondo dentro de 24 horas.
            </p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin: 20px 0;">
              <h3 style="color: #1e293b; margin: 0 0 12px 0; font-size: 16px;">📝 A tua mensagem:</h3>
              <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px;">
              <p style="color: #374151; margin: 0 0 15px 0; font-size: 16px;">
                Cumprimentos,<br>
                <strong style="color: #06b6d4;">João Cabrito</strong>
              </p>
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                💻 Software Engineer<br>
                🌐 Portfolio: <a href="https://webportfolio-0prr.onrender.com" style="color: #06b6d4; text-decoration: none;">webportfolio-0prr.onrender.com</a><br>
                📧 Email: <a href="mailto:cabrit0o.dev@gmail.com" style="color: #06b6d4; text-decoration: none;">cabrit0o.dev@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      `
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado com sucesso!' 
    })
    
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tenta novamente mais tarde.' },
      { status: 500 }
    )
  }
}
