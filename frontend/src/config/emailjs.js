// EmailJS Configuration
export const EMAILJS_CONFIG = {
  // Replace these with your actual EmailJS credentials
  SERVICE_ID: "service_r30xp7q", // Replace with your actual Service ID
  TEMPLATE_ID: "template_wbp1jkp", // Replace with your actual Template ID
  PUBLIC_KEY: "xH0M7_Y7DQWvAPEfv", // Replace with your actual Public Key

  // Email settings
  TO_EMAIL: "connect@instrek.com",
  SUBJECT: "New Newsletter Subscription - Instrek Website",
  WEBSITE_NAME: "Instrek Technologies Website",
};

// Email template variables
export const getEmailTemplateParams = (userEmail) => ({
  to_email: EMAILJS_CONFIG.TO_EMAIL,
  from_email: userEmail,
  user_email: userEmail,
  message: `Hii Team ${userEmail} wants to connect you on the website `,
  subject: EMAILJS_CONFIG.SUBJECT,
  timestamp: new Date().toLocaleString(),
  website: EMAILJS_CONFIG.WEBSITE_NAME,
});
