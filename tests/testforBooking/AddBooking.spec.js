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
  await page.locator('li').filter({ hasText: 'Booking' }).click();
  await page.locator('div').filter({ hasText: /^BookingListList$/ }).getByRole('link').click();
  await page.getByRole('button', { name: 'Add Booking' }).click();
  await page.getByLabel('Individual').check();
  await page.locator('.css-ackcql').first().click();
  await page.getByText('saad ali', { exact: true }).click();
  await page.getByLabel('Capacity').click();
  await page.getByLabel('Capacity').fill('3');
  await page.locator('#meetingId > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.locator('#meetingId svg').click();
  await page.getByLabel('Select Date:').fill('2023-11-14');
  await page.getByText('5:00 PM - 5:30 PM').click();
  await page.getByText('5:30 PM - 6:00 PM').click();
  await page.getByText('6:00 PM - 6:30 PM').click();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
});