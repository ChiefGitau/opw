const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Tekkers - Organize. Play. Connect.',
    description: 'The easiest way to organize small-sided football and basketball games in Amsterdam. Built for grassroots organizers, private sports groups, and casual players.'
  });
});

// Contact form endpoint
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill in all required fields.' 
    });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid email address.' 
    });
  }
  
  // Create mailto link (simple solution without email server)
  const mailtoSubject = subject || 'Contact from Tekkers Website';
  const mailtoBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const mailtoLink = `mailto:info@tekkers.nl?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
  
  // For a production environment, you would integrate with an email service like:
  // - Nodemailer with SMTP
  // - SendGrid
  // - AWS SES
  // - Mailgun
  
  // For now, we'll return success and provide the mailto link
  res.json({ 
    success: true, 
    message: 'Thank you for your message! We\'ll get back to you soon.',
    mailtoLink: mailtoLink
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});