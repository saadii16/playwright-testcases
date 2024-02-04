import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal.ndesks.com/');
  await page.goto('https://portal.ndesks.com/login');
  await page.pause();
  await page.getByPlaceholder('john@example.com').click();
  await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('li').filter({ hasText: 'Management' }).click();
  await page.getByRole('link', { name: 'Workplace' }).click();
  await page.getByRole('button', { name: 'Add Location' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByPlaceholder('Location Name').click();
  await page.getByPlaceholder('Location Name').fill('Cantt Office');
  await page.getByPlaceholder('Location Address').click();
  await page.getByPlaceholder('Location Address').fill('Saddar Cantt');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Co-working Space');
  await page.getByPlaceholder('Capacity').click();
  await page.getByPlaceholder('Capacity').fill('80');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

});