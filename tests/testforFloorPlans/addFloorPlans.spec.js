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
  await page.getByRole('link', { name: 'Floor Plans' }).click();
  await page.getByRole('button', { name: 'Add Floor Plans' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByPlaceholder('Enter floor plan name').click();
  await page.getByPlaceholder('Enter floor plan name').fill('demo xyz floor plans');
  await page.getByPlaceholder('Enter capacity').click();
  await page.getByPlaceholder('Enter capacity').fill('123');
  await page.locator('.css-ackcql').click();
  await page.getByText('All', { exact: true }).click();
  await page.getByRole('button', { name: 'Add New' }).click();
});