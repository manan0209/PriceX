# PriceX Price Tracking Application

The PriceX Price Tracking Application, developed using Next.js and Bright Data's webunlocker, is designed to assist users in making informed decisions about their online purchases. It notifies users when a product drops in price and alerts them when a product is out of stock, all managed through cron jobs.

Demo: [PriceX Demo](https://pricexmnn.vercel.app/)

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


## Contribution Guidelines

I welcome contributions to PriceX! If you'd like to contribute, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Ensure your code follows the existing code style and conventions.
- Write clear and concise commit messages.
- Test your changes thoroughly.
- Submit a pull request detailing the changes and improvements you've made.
