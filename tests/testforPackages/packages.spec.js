import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal.ndesks.com/');
  await page.goto('https://portal.ndesks.com/login');
  await page.pause();
  await page.getByPlaceholder('john@example.com').click();
  await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('link', { name: 'Packages' }).click();
  await page.getByRole('button', { name: 'Add Package' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByPlaceholder('Enter Package Name').click();
  await page.getByPlaceholder('Enter Package Name').fill('srybyu');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('40000');
  await page.getByPlaceholder('Enter Persons').click();
  await page.getByPlaceholder('Enter Persons').fill('23');
  await page.locator('#space-package-0 svg').click();
  await page.getByText('Meeting Room 1', { exact: true }).click();
  await page.getByText('Meeting room 2', { exact: true }).click();
  await page.getByText('Meeting room 3', { exact: true }).click();
  await page.getByText('Saadali', { exact: true }).click();
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('23');
  await page.locator('#durations svg').click();
  await page.locator('#react-select-3-option-2').click();
  await page.locator('.css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').first().click();
  await page.locator('#react-select-4-option-0').click();
  await page.locator('#package-facilities svg').click();
  await page.getByText('All', { exact: true }).click();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByRole('button', { name: 'Add Meeting Package' }).click();
  await page.getByPlaceholder('Enter Meeting Package Name').click();
  await page.getByPlaceholder('Enter Meeting Package Name').fill('xyz meeting');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('12334');
  await page.locator('#expiryDuration svg').click();
  await page.locator('#react-select-6-option-0').click();
  await page.locator('#space-package-0 svg').click();
  await page.getByText('Meeting Room 1', { exact: true }).click();
  await page.getByText('Meeting room 2', { exact: true }).click();
  await page.getByText('Meeting room 3', { exact: true }).click();
  await page.getByText('Saadali', { exact: true }).click();
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('43');
  await page.getByRole('button', { name: 'Add New' }).click();
});