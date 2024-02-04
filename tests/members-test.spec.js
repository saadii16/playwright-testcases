import { test, expect } from '@playwright/test';

test('test-for-members.ndesks', async ({ page }) => {
  await page.goto('https://members.ndesks.com/');
  await page.goto('https://members.ndesks.com/login');
  await page.pause
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('saadali.teczon+2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('User').click();
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('saad ali');
  await page.getByLabel('Email Address').dblclick();
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').click({
    clickCount: 3
  });
  await page.getByLabel('Phone No.').click();
  await page.getByLabel('Phone No.').fill('1332435364576');
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('devops');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByRole('link', { name: 'Packages' }).click();
  await page.getByRole('link', { name: 'Bookings' }).click();
  await page.getByRole('button', { name: 'Create Booking' }).click();
  await page.locator('div').filter({ hasText: /^Book Enquiry\$40000$/ }).getByRole('button').click();
  await page.getByLabel('Start Date').fill('2023-11-11');
  await page.getByRole('button', { name: '4:00 AM - 4:30 AM' }).click();
  await page.getByRole('button', { name: '4:30 AM - 5:00 AM' }).click();
  await page.getByRole('button', { name: '5:00 AM - 5:30 AM' }).click();
  await page.getByRole('button', { name: '5:30 AM - 6:00 AM' }).click();
  await page.getByRole('button', { name: 'Book' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByLabel('close').click();
});