//test for creating new member and assign them a package and login to that member and then create 
// booking & post & visitor and then delete the account 
//**** Add Gmail verification here/

import { test, expect } from '@playwright/test';
const Captcha = require("2captcha");

test('test', async ({ page }) => {
  await page.goto('https://portal.ndesks.com/');
  await page.goto('https://portal.ndesks.com/login');
  await page.getByPlaceholder('john@example.com').click();
  await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByLabel('Password').press('Enter');
  await page.pause();
  //await page.goto('https://portal.ndesks.com/');
  await page.locator('li').filter({ hasText: 'Member' }).click();
  await page.locator('div').filter({ hasText: /^MemberListList$/ }).getByRole('link').click();
  await page.getByRole('tab', { name: 'Individuals' }).click();
  await page.getByRole('button', { name: 'Add User' }).click();
  await page.locator('div').filter({ hasText: /^Profile Picture\*UploadAllowed Max size of 10Mb$/ }).locator('#custom-button').click();
  await page.getByPlaceholder('Enter Name').click();
  await page.getByPlaceholder('Enter Name').fill('Groot');
  await page.getByPlaceholder('Enter Email').click();
  await page.getByPlaceholder('Enter Email').fill('saadali.teczon+94@gmail.com');
  await page.getByPlaceholder('Enter 11-15 Digits Phone Number').click();
  await page.getByPlaceholder('Enter 11-15 Digits Phone Number').fill('03039283746');
  await page.getByPlaceholder('Enter Address').click();
  await page.getByPlaceholder('Enter Address').fill('lahore');
  await page.getByPlaceholder('Enter Amount').click();
  await page.getByPlaceholder('Enter Amount').fill('2000');
  // await page.locator('div').filter({ hasText: /^FloorPlease Select Floordemo floor planGround floor$/ }).locator('#employee').selectOption('10');
  //await page.locator('div').filter({ hasText: /^Room TypePlease Select Room TypeDedicated DeskPrivate Office$/ }).locator('#employee').selectOption('1');
  await page.locator('input[name="cnicNo"]').click();
  await page.locator('input[name="cnicNo"]').fill('3746662828736');
  // await page.getByRole('spinbutton').click();
  // await page.getByRole('spinbutton').fill('2');
  // await page.getByRole('button', { name: 'Save' }).click();
  //await page.locator('div').filter({ hasText: /^ItemHot Deskdemo-packageSaad Alidemo-floor-plan-2sffseewsrybyuoiwedj$/ }).getByRole('combobox').selectOption('110');
  await page.getByRole('button', { name: 'Add Individual', exact: true }).click();
  await page.locator('div').filter({ hasText: /^Space Packages \(Add Multiple\)\*Add More$/ }).getByRole('button').click();
  await page.getByRole('combobox').selectOption('110');
  await page.locator('div').filter({ hasText: /^Meeting Packages \(Add Multiple\)\*Add More$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'Add Package' }).click();
  await page.waitForTimeout(5000);
  await page.goto('chrome://newtab/');
  await page.goto('https://members.ndesks.com/');
  await page.goto('https://members.ndesks.com/login');
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('saadali.teczon+94@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByRole('button', { name: 'Login' }).click();
  // await page.goto('https://members.ndesks.com/');
  // await page.goto('https://portal.ndesks.com/');
  // await page.goto('https://portal.ndesks.com/login');
  // await page.getByPlaceholder('john@example.com').click();
  // await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('saad.ali');
  // await page.getByLabel('Password').press('Enter');
//dasdasdadasdasdasdas
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.goto('https://portal.ndesks.com/');
  await page.locator('li').filter({ hasText: 'Member' }).click();
  await page.locator('div').filter({ hasText: /^MemberListList$/ }).getByRole('link').click();
  await page.getByRole('tab', { name: 'Individuals' }).click();
  await page.getByRole('row', { name: 'Groot saadali.teczon+94@gmail.com' }).locator('a').click();
  await page.getByRole('row', { name: 'Groot saadali.teczon+94@gmail.com' }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForTimeout(3000);
  await page.goto('https://members.ndesks.com/');
  await page.getByPlaceholder('Share what are you thinking here...').click();
  await page.getByPlaceholder('Share what are you thinking here...').fill('I am Groot');
  await page.getByRole('button', { name: 'Post' }).click();
  await page.locator('.MuiBox-root > .MuiButtonBase-root').click();
  await page.getByPlaceholder('Write a comment...').click();
  await page.getByPlaceholder('Write a comment...').fill('I am Groooot');
  await page.getByPlaceholder('Write a comment...').press('Enter');
  await page.goto('chrome://newtab/');
  await page.goto('https://portal.ndesks.com/');
  await page.locator('li').filter({ hasText: 'Invoice' }).click();
  await page.locator('div').filter({ hasText: /^InvoiceListListAddAdd$/ }).getByRole('link').first().click();
  await page.getByRole('row', { name: 'Groot saadali.teczon+94@gmail.com' }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.goto('https://portal.ndesks.com/');
  await page.goto('https://members.ndesks.com/');
  await page.getByRole('link', { name: 'Bookings' }).click();
  await page.getByRole('button', { name: 'Create Booking' }).click();
  await page.locator('div').filter({ hasText: /^Book EnquiryUSD 1800$/ }).getByRole('button').click();
  await page.getByRole('button', { name: '10:30 PM - 11:00 PM' }).click();
  await page.getByRole('button', { name: 'Book' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('link', { name: 'Visitors' }).click();
  await page.getByRole('button', { name: 'Create Visitor' }).click();
  await page.getByLabel('Name', { exact: true }).click();
  await page.getByLabel('Name', { exact: true }).fill('Thor');
  await page.getByLabel('Company Name').click();
  await page.getByLabel('Company Name').fill('Avengerss');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('example+34@gmail.com');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('0939382378472');
  await page.getByLabel('Location').click();
  await page.getByLabel('Location').fill('Mars');
  await page.getByLabel('Expected Visit Date and Time').click();
  await page.getByRole('button', { name: 'Register' }).click();
  await page.goto('chrome://newtab/');
  await page.goto('https://portal.ndesks.com/');
  await page.locator('li').filter({ hasText: 'Member' }).click();
  await page.locator('div').filter({ hasText: /^MemberListList$/ }).getByRole('link').click();
  await page.getByRole('tab', { name: 'Individuals' }).click();
  await page.getByRole('row', { name: 'Groot saadali.teczon+94@gmail.com' }).locator('button').click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await page.waitForTimeout(3000);
  await page.goto('https://members.ndesks.com/SaadAliTestSpace/tour');
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('saadali');
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('saadali+94@gmail.com');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('12323423432');
  await page.getByLabel('Date Time').click();
  await page.getByLabel('Date Time').click();
  await page.getByLabel('Location').click();
  await page.getByRole('option', { name: 'Saad Ali Test Space' }).click();
  // for filling reCaptcha
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
    const token = await solver.recaptchaV3("Y6LfRvgEpAAAAAMZ4Lt28tPgMZ0obm7LfSA_xejls", websiteUrl, 0.5); // Adjust threshold as needed

    // Use the generated token to simulate passing reCAPTCHA v3 validation
    // You'll typically pass this token to your server-side validation endpoint.
    console.log("reCAPTCHA v3 token:", token);
  } else {
    console.log("Couldn't find the reCAPTCHA frame.");
  }
  await page.waitForTimeout(6000)


});