// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({ headless: false }); // Launch a browser
//   const context = await browser.newContext(); // Create a new browser context
//   const page = await context.newPage(); // Create a new page in the context
//   await page.pause();

//   // Navigate to the email service provider's website (e.g., Gmail, Outlook, etc.)
//   await page.goto('https://gmail.com'); // Replace with your email service URL

//   // Perform actions to login to your email account
//   // (Enter username, password, click login button, etc.)

//   // Find and click on the email containing the account confirmation link
//   await page.click('div.email-container'); // Replace with the selector for the confirmation email

//   // Switch to the iframe if the email content is within an iframe
//   // const frame = page.frames().find(frame => frame.name() === 'email-content-frame');
//   // const frameContent = await frame.contentFrame();
//   // await frameContent.click('button.confirm-account-button');

//   // Click the 'Confirm Account' button in the email
//   await page.click('button.confirm-account-button'); // Replace with the selector for the confirmation button in the email

//   // Wait for the page navigation to the 'Set Password' page after confirming the account
//   await page.waitForNavigation();

//   // Enter and submit the new password
//   await page.fill('input#new-password', 'YourNewPassword'); // Replace with the selector for the new password input field
//   await page.fill('input#confirm-password', 'YourNewPassword'); // Replace with the selector for the confirm password input field
//   await page.click('button.set-password-button'); // Replace with the selector for the set password button

//   // Optionally, perform assertions or check for success messages to verify account confirmation and password setting

//   // Close the browser
//   await browser.close();
// })();
import { test } from '@playwright/test';
import { chromium } from '@playwright/test';

test('mailtester', async ({ page }) => {
  const browser = await chromium.launch({
    args: ['--ignore-certificate-errors'], // Add the flag during browser launch
  });
   await page.pause();
  // Use the 'page' object provided by the test fixture
  await page.goto('https://www.google.com/gmail/about/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('saadali.teczon@gmail.com');
  await page.getByLabel('Email or phone').press('Enter');
  await page.waitForTimeout(5000);

  // Close the browser once done
  await browser.close();
});
