export const NewsletterEmailTemplate = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Subscribing</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #d5cea356; padding: 20px;">
        <!-- Header -->
        <div style="padding: 20px 0;">
            <img src="https://ucarecdn.com/b5b1feef-b7c3-4e3b-a87b-cc2a0dd0435c/Adotemaillogo.png" alt="Adot Technologies" style="height: 50px;">
        </div>
        
        <!-- Divider -->
        <div style="border-bottom: 1px solid #333; margin: 10px 0;"></div>

        <!-- Main Content -->
        <h1 style="color: #333; font-size: 24px; margin: 20px 0; text-align: center;">Thank you for Subscribing to our newsletter.</h1>
        
        <!-- Office Image -->
        <div style="margin: 20px 0;">
            <img src="https://ucarecdn.com/2fb5c996-dfbb-4c80-a1df-2fdc04ad02b7/adotoffice.png" alt="Office Space" style="width: 100%; max-width: 400px; height: auto; border-radius: 4px; display: block; margin: 0 auto;">
        </div>

        <!-- Subscription Text -->
        <p style="margin-bottom: 1rem;">Greetings,</p>
        <p style="color: #333; margin: 15px 0; line-height: 1.5;">
            Thank you for subscribing to the <strong>Adot Technologies</strong> newsletter! We're excited to have you join our community.
        </p>

        <!-- What to Expect Section -->
        <p style="color: #333; margin: 15px 0;">Here's what you can expect from us:</p>
        <ul style="color: #333; margin: 15px 0; padding-left: 20px;">
            <li style="margin: 10px 0;">Exclusive updates on our latest technologies and projects</li>
            <li style="margin: 10px 0;">Tech insights and tips to stay ahead of the curve</li>
            <li style="margin: 10px 0;">Special offers, announcements, and much more...</li>
        </ul>

        <p style="color: #333; margin: 15px 0;">Stay tuned and explore the future with us!</p>

        <!-- CTA Button -->
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://adot-technologies.com/" style="background-color: #333; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; display: inline-block; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#555'" onmouseout="this.style.backgroundColor='#333'">Visit our Site</a>
        </div>

        <!-- Sign Off -->
        <p style="color: #333; margin: 15px 0;">Thank you again!</p>
        <p style="color: #333; margin: 15px 0;">
            Warm regards,<br>
            <strong>Adot Technologies Team</strong>
        </p>

        <!-- Footer -->
        <div style="background-color: #4a3e3e; padding: 20px; margin-top: 30px; text-align: center;">
            <!-- Social Icons -->
            <div style="margin-bottom: 20px;">
                <a href="https://www.facebook.com/adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://t.me/adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-telegram-plane"></i></a>
                <a href="https://www.tiktok.com/@adot-tech" style="margin: 0 10px; color: white; text-decoration: none; font-size: 20px;"><i class="fab fa-tiktok"></i></a>
            </div>

            <!-- Copyright -->
            <p style="color: white; font-size: 12px; margin: 10px 0;">
                © 2024 Adot Technologies. All rights reserved. City Point Hub,<br>
                22 Mazoria, Addis Ababa, Ethiopia.
            </p>

            <!-- Footer Links -->
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
  