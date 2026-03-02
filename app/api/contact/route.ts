import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan datos obligatorios.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      return NextResponse.json(
        {
          error:
            'Configuración SMTP incompleta. Agregá en .env.local: SMTP_HOST, SMTP_USER, SMTP_PASS (y opcional SMTP_PORT, SMTP_FROM, SMTP_TO).',
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === 'false' ? false : port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Página web" <consulta@constructoraconesa.com>`,
      to: process.env.SMTP_TO || user,
      replyTo: email,
      subject: `Nuevo mensaje de ${name}${subject ? ` - ${subject}` : ''}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || '-'}\nAsunto: ${subject || '-'}\n\nMensaje:\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Teléfono:</strong> ${phone || '-'}</p>
             <p><strong>Asunto:</strong> ${subject || '-'}</p>
             <p><strong>Mensaje:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    return NextResponse.json({ message: 'Enviado correctamente' });
  } catch (error) {
    console.error('Error enviando mail de contacto', error);
    const err = error instanceof Error ? error : new Error('Error desconocido');
    const message =
      err.message || 'No se pudo enviar el correo. Revisá SMTP_HOST, SMTP_USER, SMTP_PASS y que el servidor acepte conexiones.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

