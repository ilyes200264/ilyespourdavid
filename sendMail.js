const nodemailer = require('nodemailer');
const fs = require('fs');

// --- CONFIGURE THESE VALUES ---
const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for 587
  auth: {
    user: 'contactwebsite988@gmail.com', // Your Gmail address
    pass: 'uzpz swow ueio zygd', // Your Gmail app password
  },
};

// Get arguments from command line
// Usage: node sendMail.js to subject html [htmlFilePath]
const [,, toArg, subjectArg, htmlArg, htmlFilePath] = process.argv;

let htmlContent = htmlArg || '<h2>This is a test email</h2><p>Sent from <b>sendMail.js</b> using Nodemailer and Gmail SMTP.</p>';
if (htmlFilePath) {
  try {
    htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
  } catch (err) {
    console.error('Could not read HTML file:', htmlFilePath, err);
    process.exit(1);
  }
}

const mailOptions = {
  from: 'noreply@confortplus65.com', // Sender address
  to: toArg || 'walidattou123A@gmail.com',    // Recipient address
  subject: subjectArg || 'Test Email from sendMail.js',
  text: '', // Not used, but required by Nodemailer
  html: htmlContent,
};

async function main() {
  try {
    const transporter = nodemailer.createTransport(smtpConfig);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    process.exit(1);
  }
}

main(); 