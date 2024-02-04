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
  await page.getByRole('tab', { name: 'Team' }).click();
  await page.getByRole('button', { name: 'Add Team' }).click();
  await page.getByPlaceholder('Team name').click();
  await page.getByPlaceholder('Team name').fill('new-team');
  await page.getByPlaceholder('Team email').click();
  await page.getByPlaceholder('Team email').fill('example@gmail.com');
  await page.getByPlaceholder('More Info . . .').click();
  await page.getByPlaceholder('More Info . . .').fill('a tester');
  await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
  await page.locator('#react-select-2-option-1').click();

  // Click the additional upload button
  await page.getByRole('button', { name: 'Upload' }).click();

  // Wait for 5 seconds
  await page.waitForTimeout(5000);

  // Continue with the rest of the test
  await page.getByRole('button', { name: 'Add', exact: true }).click();});
