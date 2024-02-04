import { test, devices } from '@playwright/test';
import config from '../playwright.config.js'; // Import your Playwright configuration file

test.use({ ...config.projects.find(p => p.name === 'Pixel').use }); // Use 'Pixel' device configuration

test('testscenerio', async ({ page }) => {
    await page.goto('https://portal.ndesks.com/');
    await page.goto('https://portal.ndesks.com/login');
    await page.getByPlaceholder('john@example.com').click();
    await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('saad.ali');
    await page.getByLabel('Password').press('Enter');
    await page.pause();
    // const context = await browser.newContext();
    await page.getByRole('navigation').getByRole('img').first().click();
    await page.getByRole('link', { name: 'Packages' }).click();
    await page.getByText('x').click();
    await page.getByRole('button', { name: 'Add Space Package' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByRole('button', { name: 'Upload' }).setInputFiles('floor5.jpeg');
    await page.getByPlaceholder('Enter Package Name').click();
    await page.getByPlaceholder('Enter Package Name').fill('responsivepkg');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('1000');
    await page.getByPlaceholder('Enter Persons').click();
    await page.getByPlaceholder('Enter Persons').fill('11');
    await page.locator('select').selectOption('Saad Ali Test Space');
    await page.locator('.css-ackcql').first().click();
    await page.getByText('Meeting Room 1', { exact: true }).click();
    await page.getByPlaceholder('1').click();
    await page.getByPlaceholder('1').fill('11');
    await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
    await page.locator('#react-select-3-option-0').click();
    await page.locator('div:nth-child(7) > .css-b62m3t-container > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
    await page.locator('#react-select-4-option-0').click();
    await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
    await page.getByText('All', { exact: true }).click();
    await page.getByRole('button', { name: 'Add Package' }).click();
    await page.getByRole('button', { name: 'Add Meeting Package' }).click();
    await page.getByPlaceholder('Enter Meeting Package Name').click();
    await page.locator('.css-ackcql').first().click();
    await page.getByText('Enter Name(Max 50 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Package Name').click();
    await page.getByLabel('Close').click();
});
