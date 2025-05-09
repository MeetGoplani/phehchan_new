import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'contact@phehchan.com'; // TODO: Replace with your admin email address
const FROM_EMAIL = 'onboarding@resend.dev'; // TODO: Replace with your verified Resend domain email (e.g., noreply@yourdomain.com)

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, phone, message } = formData;

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // Email to Admin
    const adminEmailData = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p>You have a new contact form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          <li><strong>Message:</strong></li>
        </ul>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (adminEmailData.error) {
      console.error('Error sending email to admin:', adminEmailData.error);
      return Response.json({ error: 'Failed to send notification email.', details: adminEmailData.error }, { status: 500 });
    }

    // Confirmation Email to User
    const userEmailData = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
        <p>Here's a copy of your message:</p>
        <blockquote>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </blockquote>
        <p>Best regards,</p>
        <p>The Phehchan Team</p>
      `,
    });

    if (userEmailData.error) {
      console.error('Error sending confirmation email to user:', userEmailData.error);
      // Still return success to the client as the admin email was sent, but log the error
      // Or you could decide to return an error if the user confirmation is critical
    }

    return Response.json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error in send-email API:', error);
    return Response.json({ error: 'An unexpected error occurred.', details: error.message }, { status: 500 });
  }
}