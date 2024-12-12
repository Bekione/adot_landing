export const ContactFormAdminEmailTemplate = ({
    fullname,
    email,
    subject,
    message,
  }: {
    fullname: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center;">
          <img src="https://ucarecdn.com/b5b1feef-b7c3-4e3b-a87b-cc2a0dd0435c/Adotemaillogo.png" alt="Adot Technologies" style="height: 50px;">
        </div>
        <h2 style="text-align: center; margin-bottom: 15px;">New Contact Form Submission</h2>
        <p>You have a new message from the contact form:</p>
        <div style="margin-bottom: 20px;">
          <p style="margin-bottom: 5px;">
            <strong>Full Name:</strong> ${fullname}
          </p>
          <p style="margin-bottom: 5px;">
            <strong>Email:</strong> ${email}
          </p>
          <p style="margin-bottom: 5px;">
            <strong>Subject:</strong> ${subject}
          </p>
        </div>
        <p>${message}</p>
        <div style="text-align: center; margin-top: 20px;">
          <p style="margin-bottom: 0;">Best regards,</p>
          <p style="margin-bottom: 0;">Adot Technologies</p>
        </div>
      </div>
    </body>
    </html>
    `;
  };