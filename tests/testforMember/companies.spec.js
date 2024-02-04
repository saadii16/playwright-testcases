// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://portal.ndesks.com/');
//   await page.goto('https://portal.ndesks.com/login');
//   await page.pause();
//   await page.getByPlaceholder('john@example.com').click();
//   await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('saad.ali');
//   await page.getByRole('button', { name: 'Sign in' }).click();
//   await page.locator('li').filter({ hasText: 'Member' }).click();
//   await page.locator('div').filter({ hasText: /^MemberListList$/ }).getByRole('link').click();
//   await page.getByRole('button', { name: 'Add Company' }).click();
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.getByPlaceholder('Company name').click();
//   await page.getByPlaceholder('Company name').fill('Teczon 2.0');
//   await page.getByPlaceholder('Company email').click();
//   await page.getByPlaceholder('Company email').fill('saadali.teczon+11@gmail.com');
//   await page.getByPlaceholder('Enter 11-15 Digits Phone Number').click();
//   await page.getByPlaceholder('Enter 11-15 Digits Phone Number').fill('03037838745');
//   await page.getByPlaceholder('Address').click();
//   await page.getByPlaceholder('Address').fill('Lahore');
//   await page.getByPlaceholder('00000-0000000-0').click();
//   await page.getByPlaceholder('00000-0000000-0').fill('3345591393023');
//   await page.locator('div').filter({ hasText: /^FloorPlease Select Floordemo floor planhgdfg$/ }).locator('#employee').selectOption('10');
//   await page.locator('div').filter({ hasText: /^Room TypePlease Select Room TypeDedicated DeskPrivate Office$/ }).locator('#employee').selectOption('1');
//   await page.getByRole('button', { name: 'Add', exact: true }).click();
//   await page.locator('div').filter({ hasText: /^ItemHot Deskdemo-packageSaad Alidemo-floor-plan-2$/ }).getByRole('combobox').selectOption('56');
//   await page.getByRole('dialog').locator('section div').filter({ hasText: 'Space Packages (Add Multiple)*ItemHot Deskdemo-packageSaad Alidemo-floor-plan-2Q' }).getByPlaceholder('1').click();
//   await page.getByRole('dialog').locator('section div').filter({ hasText: 'Space Packages (Add Multiple)*ItemHot Deskdemo-packageSaad Alidemo-floor-plan-2Q' }).getByPlaceholder('1').fill('13');
//   await page.getByLabel('Joining Date:').click();
//   await page.getByLabel('Joining Date:').fill('2023-11-18');
// });


import { test, expect } from '@playwright/test';

// Function to generate a random company name
function generateRandomCompanyName() {
  return 'Teczon ' + Math.floor(Math.random() * 10); // Generates Teczon 0 to Teczon 9
}

// Function to generate a random phone number
function generateRandomPhoneNumber() {
  return Math.floor(Math.random() * 10000000000).toString().padStart(11, '0');
}

test('test', async ({ page }) => {
  // Static email used for signing in
  const signInEmail = 'saadali.teczon+1@gmail.com';

  await page.goto('https://portal.ndesks.com/');
  await page.goto('https://portal.ndesks.com/login');
  await page.pause();

  // Sign in using static email
  await page.getByPlaceholder('john@example.com').click();
  await page.getByPlaceholder('john@example.com').fill(signInEmail);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Other test steps after signing in...
  
  // Fill form fields with dynamic data
  const dynamicCompanyName = generateRandomCompanyName();
  const dynamicCompanyEmail = `saadali.teczon+${Math.floor(Math.random() * 1000)}@gmail.com`;
  const dynamicPhoneNumber = generateRandomPhoneNumber();

  await page.locator('li').filter({ hasText: 'Member' }).click();
  await page.locator('div').filter({ hasText: /^MemberListList$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Add Company' }).click();
  await page.getByPlaceholder('Company name').click();
  await page.getByPlaceholder('Company name').fill(dynamicCompanyName);
  await page.getByPlaceholder('Company email').click();
  await page.getByPlaceholder('Company email').fill(dynamicCompanyEmail);
  await page.getByPlaceholder('Enter 11-15 Digits Phone Number').click();
  await page.getByPlaceholder('Enter 11-15 Digits Phone Number').fill(dynamicPhoneNumber);
  await page.getByPlaceholder('Address').click();
  await page.getByPlaceholder('Address').fill('Lahore');
  await page.getByPlaceholder('00000-0000000-0').click();
  await page.getByPlaceholder('00000-0000000-0').fill('3345591393023');

  // Continue filling the form with necessary steps...

  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.getByLabel('Joining Date:').click();
  await page.getByLabel('Joining Date:').fill('2023-11-18');
});
