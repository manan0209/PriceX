# PriceX Price Tracking Application

## Table of Contents

1. Introduction
2. Tech Stack
3. Features
4. Quick Start
5. Snippets
6. Links
7. More

## Introduction

The PriceX Price Tracking Application, developed using Next.js and Bright Data's webunlocker, is designed to assist users in making informed decisions about their online purchases. It notifies users when a product drops in price and alerts them when a product is out of stock, all managed through cron jobs.

Demo: [PriceX Demo](https://pricexmnn.vercel.app/)

## Tech Stack

- Next.js
- Bright Data
- Cheerio
- Nodemailer
- MongoDB
- Headless UI
- Tailwind CSS

## Features

- Header with Carousel: Visually appealing header with a carousel showcasing key features and benefits
- Product Scraping: A search bar allowing users to input Amazon product links for scraping
- Scraped Projects: Displays the details of products scraped so far, offering insights into tracked items
- Scraped Product Details: Showcase the product image, title, pricing, details, and other relevant information scraped from the original website
- Track Option: Modal for users to provide email addresses and opt-in for tracking
- Email Notifications: Send emails for product alerts, such as back-in-stock or lowest price notifications
- Automated Cron Jobs: Utilize cron jobs to automate periodic scraping, ensuring data is up-to-date

## Quick Start

Follow these steps to set up the project locally on your machine:

1. **Prerequisites:**
   - Git
   - Node.js
   - npm (Node Package Manager)

2. **Cloning the Repository:**
   ```bash
   git clone https://github.com/adrianhajdin/XPrice.git
   cd PriceX
   ```

3. **Installation:**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   Create a new file named `.env` in the root of your project and add the following content:

   ```
   # SCRAPER
   BRIGHT_DATA_USERNAME=
   BRIGHT_DATA_PASSWORD=

   # DB
   MONGODB_URI=

   # OUTLOOK
   EMAIL_USER=
   EMAIL_PASS=
   ```

   Replace the placeholder values with your actual credentials.

5. **Running the Project:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Snippets

- `cron.route.ts`: A TypeScript file for updating product details and sending email notifications based on specific criteria.
- `generateEmailBody.ts`: A TypeScript file for generating email content based on different notification types.
- `globals.css`: Global CSS styles for the project.
- `index.scraper.ts`: TypeScript file for scraping product details from Amazon.
- `next.config.js`: Next.js configuration file.
- `tailwind.config.ts`: Tailwind CSS configuration file.
- `types.ts`: TypeScript file containing type definitions used in the project.
- `utils.ts`: Utility functions used in the project.

## Links

- [Bright Data](https://brightdata.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node Mailer](https://nodemailer.com/)

## Contribution Guidelines

I welcome contributions to PriceX! If you'd like to contribute, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Ensure your code follows the existing code style and conventions.
- Write clear and concise commit messages.
- Test your changes thoroughly.
- Submit a pull request detailing the changes and improvements you've made.

## More

For more information and detailed documentation, refer to the project's codebase and the official documentation of the technologies used.
