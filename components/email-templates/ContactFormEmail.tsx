export const ContactEmailTemplate = ({
    fullname,
    subject,
  }: {
    fullname: string;
    email: string;
    subject: string;
  }) => {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #d5cea356; padding: 20px;">
      <div style="padding: 20px 0;">
        <img src="https://ucarecdn.com/b5b1feef-b7c3-4e3b-a87b-cc2a0dd0435c/Adotemaillogo.png" alt="Adot Technologies" style="height: 50px;">
      </div>
      
      <div style="border-bottom: 1px solid #333; margin: 10px 0;"></div>
  
      <h1 style="color: #333; font-size: 24px; margin: 20px 0; text-align: center;">Thank you for Contacting Us</h1>
      
      <p style="color: #333; margin: 15px 0;">
        Dear ${fullname},
      </p>
      <p style="color: #333; margin: 15px 0;">
        We appreciate you reaching out to Adot Technologies regarding "${subject}". 
      </p>
  
      <p style="color: #333; margin: 15px 0;">
        Our team will review your message and get in touch with you shortly. 
      </p>
  
      <p style="color: #333; margin: 15px 0;">
        Thank you again for contacting us!
      </p>
      <p style="color: #333; margin: 15px 0;">
        Warm regards,<br>
        <strong>Adot Technologies Team</strong>
      </p>
  
      <div style="background-color: #4a3e3e; padding: 20px; margin-top: 30px; text-align: center;">
        <div style="margin-bottom: 20px;">
          <a href="https://www.facebook.com/adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/company/adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://t.me/adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-telegram-plane"></i></a>
          <a href="https://www.tiktok.com/@adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-tiktok"></i></a>
        </div>
  
        <p style="color: white; font-size: 12px; margin: 10px 0;">
          © 2024 Adot Technologies. All rights reserved. City Point Hub,<br>
          22 Mazoria, Addis Ababa, Ethiopia.
        </p>
  
        <div style="margin-top: 10px;">
          <a href="https://adot-technologies.com/about" style="color: white; text-decoration: none; font-size: 12px; margin: 0 10px;">ABOUT US</a>
          <span style="color: white;">|</span>
          <a href="https://adot-technologies.com/terms" style="color: white; text-decoration: none; font-size: 12px; margin: 0 10px;">PRIVACY POLICY</a>
          <span style="color: white;">|</span>
          <a href="https://adot-technologies.com/contact" style="color: white; text-decoration: none; font-size: 12px; margin: 0 10px;">SUPPORT</a>
          <span style="color: white;">|</span>
          <a href="#" style="color: white; text-decoration: none; font-size: 12px; margin: 0 10px;">UNSUBSCRIBE</a>
        </div>
      </div>
    </div>
  </body>
  </html>
    `;
  };