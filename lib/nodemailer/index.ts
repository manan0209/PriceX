import { EmailContent, EmailProductInfo, NotificationType } from '@/types';
import nodemailer from 'nodemailer';

const Notification = {
  WELCOME: 'WELCOME',
  CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
  LOWEST_PRICE: 'LOWEST_PRICE',
  THRESHOLD_MET: 'THRESHOLD_MET',
}


export async function generateEmailBody(
  product: EmailProductInfo,
  type: NotificationType
): Promise<EmailContent> {
  const THRESHOLD_PERCENTAGE = 40;
  // Shorten the product title
  const shortenedTitle =
    product.title.length > 30
      ? `${product.title.substring(0, 30)}...`
      : product.title;

  let subject = "";
  let body = "";

  switch (type) {
    case Notification.WELCOME:
      subject = `Price Tracking has been started for ${shortenedTitle}`;
      body = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; font-size: 16px;">
      <h2 style="display: inline-block; color: #000000; font-size: 24px; margin-bottom: 10px;">Welcome to the world of </h2>
      <h2 style="display: inline-block; color: #FF0000; font-size: 24px; margin-bottom: 10px;"> PriceX </h2>
    
      <p>You are now tracking <strong>${product.title}</strong>.</p>
      <p>Here's an example of how you'll receive updates:</p>
    
      <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8; margin-bottom: 20px;">
        <h3 style="font-size: 20px; margin-bottom: 10px;">${product.title} is back in stock!</h3>
        <p>We're excited to let you know that ${product.title} has hit the lowest price recently.</p>
        <p>Don't miss out , <a href="${product.url}" target="_blank" style="color: #007bff; text-decoration: none;">Grab it now</a>!</p>
        <img src="https://i.imgur.com/9WzuKNm.png" alt="Product Image" style="max-width: 100%; margin-top: 10px;" />
      </div>
      <p>Stay tuned for more updates on ${product.title} and other products you're tracking.</p>
      <p style="font-size: 14px; color: #777;">This is an automated message. Please do not reply.</p>
    
      <p>Best regards,</p>
      <p>The <span style="color: #FF0000;">PriceX</span></p>
    </div>
      `;
      break;

    case Notification.CHANGE_OF_STOCK:
      subject = `${shortenedTitle} is now back in stock!`;
    body = `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; font-size: 16px;">
    <h2 style="display: inline-block; color: #000000; font-size: 24px; margin-bottom: 10px;">Exciting News!</h2>
    <h2 style="display: inline-block; color: #FF0000; font-size: 24px; margin-bottom: 10px;"> ${shortenedTitle} </h2>
    <p><strong>${product.title}</strong> is now restocked! Grab yours before they run out again!</p>
    <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8; margin-bottom: 20px;">
      <h3 style="font-size: 20px; margin-bottom: 10px;">${product.title} is back in stock!</h3>
      <p>We're excited to let you know that ${product.title} is available again. Don't miss out!</p>
      <p><a href="${product.url}" target="_blank" style="color: #007bff; text-decoration: none;">Grab it now</a>!</p>
      <img src= ${product.image} alt= ${product.title} style="max-width: 100%; margin-top: 10px;" />
    </div>
    <p>Stay tuned for more updates on ${product.title} and other products you're tracking.</p>
    <p style="font-size: 14px; color: #777;">This is an automated message. Please do not reply.</p>
    <p>Best regards,</p>
    <p>The <span style="color: #FF0000;">PriceX</span></p>
  </div>
`;
      break;

    case Notification.LOWEST_PRICE:
      subject = `Lowest Price Alert for ${shortenedTitle}`;
      body = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; font-size: 16px;">
      <h2 style="display: inline-block; color: #FF0000; font-size: 24px; margin-bottom: 10px;">PriceX </h2>
      <h2 style="display: inline-block; color: #000000; font-size: 24px; margin-bottom: 10px;">Alert: </h2>
      <h4 style="font-size: 20px; margin-bottom: 10px;">Hey, <strong>${product.title} has reached its lowest price ever!!</h4>
      <p>Don't miss out on this amazing deal. Grab the product <a href="${product.url}" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: none;">here</a> now.</p>
      
      <p>Stay tuned for more updates on ${product.title} and other products you're tracking.</p>
      <p style="font-size: 14px; color: #777;">This is an automated message. Please do not reply.</p>
    
      <p>Best regards,</p>
      <p>The <span style="color: #FF0000;">PriceX</span></p>
        </div>
      `;
      break;

    case Notification.THRESHOLD_MET:
      subject = `Discount Alert for ${shortenedTitle}`;
body = `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; font-size: 16px;">
    <h2 style="display: inline-block; color: #000000; font-size: 24px; margin-bottom: 10px;">Great News!</h2>
    <h2 style="display: inline-block; color: #FF0000; font-size: 24px; margin-bottom: 10px;"> ${shortenedTitle} </h2>
    <p><strong>${product.title}</strong> is now available at a discount more than ${THRESHOLD_PERCENTAGE}%!</p>
    <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8; margin-bottom: 20px;">
      <h3 style="font-size: 20px; margin-bottom: 10px;">Discount Alert: ${product.title}</h3>
      <p>We're thrilled to inform you that ${product.title} is now available at a discount more than ${THRESHOLD_PERCENTAGE}%.</p>
      <p><a href="${product.url}" target="_blank" style="color: #007bff; text-decoration: none;">Grab it now</a> before the offer ends!</p>
      <img src= ${product.image} alt= ${product.title} style="max-width: 100%; margin-top: 10px;" />
    </div>
    <p>Stay tuned for more updates on ${product.title} and other products you're tracking.</p>
    <p style="font-size: 14px; color: #777;">This is an automated message. Please do not reply.</p>
    <p>Best regards,</p>
    <p>The <span style="color: #FF0000;">PriceX</span></p>
        </div>

      `;
      break;

    default:
      throw new Error("Invalid notification type.");
  }

  return { subject, html: body, body };
}

export const sendEmail = async (emailContent: EmailContent, sendTo: string[]) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'cheggmanan@gmail.com',
      pass: process.env.EMAIL_PASS
    },
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailOptions = {
    from: 'pricetracx@outlook.com',
    to: sendTo,
    html: emailContent.html, // Assuming the EmailContent interface has an `html` property
    subject: emailContent.subject,
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.error('Email sending failed:', error);
        reject(error);
      } else {
        console.log('Email sent:', info.response);
        resolve(info);
      }
    });
  });
}

