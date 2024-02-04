import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal.ndesks.com/');
  await page.goto('https://portal.ndesks.com/login');
  await page.getByPlaceholder('john@example.com').click();
  await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('link', { name: 'Floor Plans' }).click();
  await page.getByRole('button', { name: 'Add Meeting Room' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Upload' }).setInputFiles('download.jpeg');
  await page.getByPlaceholder('Enter Meeting Room Name(1-25 Characters)').click();
  await page.getByPlaceholder('Enter Meeting Room Name(1-25 Characters)').fill('demo meeting room 4');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('1000');
  await page.getByPlaceholder('Enter Capacity').click();
  await page.getByPlaceholder('Enter Capacity').fill('34');
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByRole('button', { name: 'Add Private Office' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Upload' }).setInputFiles('Screenshot from 2023-11-06 19-13-40.png');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').click();
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('private 1');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('3000');
  await page.getByPlaceholder('Enter Capacity').click();
  await page.getByPlaceholder('Enter Capacity').fill('4');
  await page.getByRole('button', { name: 'Add New' }).click(); // ******** add new function is not responding *********
});