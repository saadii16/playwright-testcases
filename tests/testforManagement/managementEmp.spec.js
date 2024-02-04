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
  await page.getByRole('link', { name: 'People' }).click();
  await page.getByRole('button', { name: 'Add Employee' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  //await page.waitForResponse(5000);
 // await page.getByRole('button', { name: 'Upload' }).setInputFiles('download.jpeg');
  await page.getByPlaceholder('Employee name').click();
  await page.getByPlaceholder('Employee name').fill('aliahmad366');
  await page.getByPlaceholder('Employee email').click();
  await page.getByPlaceholder('Employee email').fill('ali00099@gmail.com');
  await page.locator('select[name="team"]').selectOption('15');
  await page.locator('.css-ackcql').click();
  await page.getByText('Saad-Ali-teczon2', { exact: true }).click();
  await page.locator('#react-select-2-option-1').click();
  await page.locator('select[name="role"]').selectOption('15');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.getByRole('tab', { name: 'Team' }).click();
  await page.getByRole('row', { name: 'new-team example@gmail.com 6 Employees Active' }).locator('a').click();

});