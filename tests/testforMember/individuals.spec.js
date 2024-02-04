// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('about:blank');
//   await page.goto('https://portal.ndesks.com/');
//   await page.goto('https://portal.ndesks.com/login');
//   await page.pause();
//   await page.getByPlaceholder('john@example.com').click();
//   await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('saad.ali');
//   await page.getByLabel('Password').press('Enter');
//   await page.locator('li').filter({ hasText: 'Member' }).click();
//   await page.locator('div').filter({ hasText: /^MemberListList$/ }).getByRole('link').click();
//   await page.getByRole('tab', { name: 'Individuals' }).click();
//   await page.getByRole('button', { name: 'Add User' }).click();
//   await page.locator('div').filter({ hasText: /^Profile Picture\*UploadAllowed Max size of 10Mb$/ }).locator('#custom-button').click();
  
import { test, expect } from '@playwright/test';
import path from 'path'; // Import path module to handle file paths

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://portal.ndesks.com/');
  await page.goto('https://portal.ndesks.com/login');
  await page.pause();
  await page.getByPlaceholder('john@example.com').click();
  await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByLabel('Password').press('Enter');
  await page.locator('li').filter({ hasText: 'Member' }).click();
  await page.getByRole('tab', { name: 'Individuals' }).click();
  await page.getByRole('button', { name: 'Add User' }).click();
  await page.locator('div').filter({ hasText: /^Profile Picture\*UploadAllowed Max size of 10Mb$/ }).locator('#custom-button').click();

  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory = path.join(__dirname, 'images');
  const imagePath = path.join(imagesDirectory, 'PK.png');

  // Find the file input element and set the file directly
  const fileInput = await page.locator('#real-file');
  await fileInput.setInputFiles(imagePath);

  // Continue with filling the form
  await page.getByPlaceholder('Enter Name').click();
  await page.getByPlaceholder('Enter Name').fill('Farhan121ewnnn');
  await page.getByPlaceholder('Enter Email').click();
  await page.getByPlaceholder('Enter Email').fill('saadali.teczon+62354@gmail.com');
  await page.getByPlaceholder('Enter 11-15 Digits Phone Number').click();
  await page.getByPlaceholder('Enter 11-15 Digits Phone Number').fill('03037123234');
  await page.getByPlaceholder('Enter Address').click();
  await page.getByPlaceholder('Enter Address').fill('Rawalpindi');
  await page.getByPlaceholder('Enter Amount').click();
  await page.getByPlaceholder('Enter Amount').fill('1999');
  await page.locator('input[name="cnicNo"]').click();
  await page.locator('input[name="cnicNo"]').fill('3456550939836');
  await page.locator('input[name="experienceYears"]').click();
  await page.locator('input[name="experienceYears"]').fill('12');
  await page.getByRole('button', { name: 'Add Individual' }).click();
  // await page.locator('input[name="cnicNo"]').click();
  // await page.locator('input[name="cnicNo"]').fill('3520004747652');
  // await page.getByRole('button', { name: 'Add Individual' }).click();
  await page.locator('div').filter({ hasText: /^Assign Space Package\(s\)\*Associate More Packages$/ }).getByRole('button').click();
  await page.getByRole('combobox').selectOption('110');
  await page.locator('div').filter({ hasText: /^Assign Meeting Room Package\(s\)\*Associate More Packages$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'Add Package' }).click();
});
