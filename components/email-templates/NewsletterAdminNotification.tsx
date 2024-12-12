export const NewsletterAdminEmailTemplate = ({ email }: { email: string }) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Newsletter Subscription</title>
      </head>
      <body>
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center;">
            <img src="https://ucarecdn.com/b5b1feef-b7c3-4e3b-a87b-cc2a0dd0435c/Adotemaillogo.png" alt="Adot Technologies" style="height: 50px;">
          </div>
          <h2 style="text-align: center;">New Newsletter Subscription</h2>
          <p>A new user has subscribed to your newsletter.</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>
            Best regards,<br>
            Adot Technologies Team
          </p>
        </div>
      </body>
      </html>
    `;
  };