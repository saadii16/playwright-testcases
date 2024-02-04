// // Start with calling both Playwright and 2captcha
// import { test } from '@playwright/test';
// import { chromium } from 'playwright';
// const Captcha = require("2captcha");

// test('Captcha solving test', async () => {
//   const browser = await chromium.launch({ headless: true });
//   const page = await browser.newPage();
// // Insert your API key here
// const solver = new Captcha.Solver("AIzaSyAlCsSUr2bNX21OWo9AgEGOVrg3Kg0a9Uw");
// await page.pause();
// // Call ReCaptcha Website
// const websiteUrl = "https://members.ndesks.com/testspace/tour";
// await page.goto(websiteUrl);

// // Wait for the CAPTCHA element to load
// const captchaFrame = await page.waitForSelector("iframe[src*='recaptcha/api2']");

// // Switch to the CAPTCHA iframe
// const captchaFrameContent = await captchaFrame.contentFrame();

// // Wait for the CAPTCHA checkbox to appear
// const captchaCheckbox = await captchaFrameContent.waitForSelector("#recaptcha-anchor");

// // Click the CAPTCHA checkbox
// await captchaCheckbox.click();
//  // Wait for the CAPTCHA challenge to be solved by 2Captcha
//  const captchaResponse = await solver.recaptcha("6Ld2sf4SAAAAAKSgzs0Q13IZhY02Pyo31S2jgOB5", websiteUrl);

//  // Fill in the CAPTCHA response and submit the form
//  const captchaInput = await captchaFrameContent.waitForSelector("#g-recaptcha-response");
//  await captchaInput.evaluate((input, captchaResponse) => {
//    input.value = captchaResponse;
//  }, captchaResponse);
//  await captchaFrameContent.waitForSelector("button[type='submit']").then((button) => button.click());

//  // Wait for the page to navigate to the next page
//  await page.waitForNavigation();

//  console.log("CAPTCHA solved successfully!");

//  await browser.close();
// })

import { test } from '@playwright/test';
import { chromium } from 'playwright';
const Captcha = require("2captcha");

test('reCAPTCHA v3 solving test', async () => {
  const browser = await chromium.launch({ headless: false }); // Set headless to false for visibility
  const page = await browser.newPage();

  // Insert your API key here
  const solver = new Captcha.Solver("6LfRvgEpAAAAAMZ4Lt28tPgMZ0obm7LfSA_xejls");

  // Call the website with reCAPTCHA v3
  const websiteUrl = "https://members.ndesks.com/testspace/tour"; // Replace with your website URL
  await page.goto(websiteUrl);

  // Execute your tasks on the website that trigger reCAPTCHA v3

  const frames = page.frames();
  let captchaFrame = null;

  for (const frame of frames) {
    try {
      const src = await frame.getAttribute('src');
      if (src && src.includes('recaptcha/api2')) {
        captchaFrame = frame;
        break;
      }
    } catch (error) {
      console.error("Error getting frame attribute:", error);
    }
  }

  if (captchaFrame) {
    const checkbox = await captchaFrame.waitForSelector('#recaptcha-anchor');
    await checkbox.click();

    // Wait for the reCAPTCHA token to be generated by 2Captcha
    const token = await solver.recaptchaV3("6LfRvgEpAAAAAMZ4Lt28tPgMZ0obm7LfSA_xejls", websiteUrl, 0.5); // Adjust threshold as needed

    // Use the generated token to simulate passing reCAPTCHA v3 validation
    // You'll typically pass this token to your server-side validation endpoint.
    console.log("reCAPTCHA v3 token:", token);
  } else {
    console.log("Couldn't find the reCAPTCHA frame.");
  }

  await browser.close();
});


