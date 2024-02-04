import { test, expect } from '@playwright/test';
import path from 'path'; // Import path module to handle file paths


test('test', async ({ page }) => {
  await page.goto('https://portal.ndesks.com/');
  await page.goto('https://portal.ndesks.com/login');
  await page.getByPlaceholder('john@example.com').click();
  await page.getByPlaceholder('john@example.com').fill('saadali.teczon+41@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByLabel('Password').press('Enter');
  await page.pause();
  // await page.goto('https://portal.ndesks.com/');
  await page.locator('li').filter({ hasText: 'Management' }).click();
  await page.getByRole('link', { name: 'Workplace' }).click();
  // await page.getByRole('button', { name: 'Add Location' }).click();
  // await page.getByRole('button', { name: 'Upload' }).click();
  // await page.getByRole('button', { name: 'Upload' }).setInputFiles('PK.png');
  // await page.getByPlaceholder('Location Name').click();
  // await page.getByPlaceholder('Location Name').fill('Pakistan');
  // await page.getByPlaceholder('Location Address').click();
  // await page.getByPlaceholder('Location Address').fill('Earth');
  // await page.getByPlaceholder('Capacity').click();
  // await page.getByPlaceholder('Capacity').fill('12');
  //await page.getByRole('dialog').getByRole('button', { name: 'Add Location' }).click();
  await page.getByRole('button', { name: 'Add Location' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();

  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory = path.join(__dirname, 'images');
  const imagePath = path.join(imagesDirectory, 'Minar-e-pakistan.jpeg');

  // Find the file input element and set the file directly
  const fileInput = await page.locator('#real-file');
  await fileInput.setInputFiles(imagePath);
  await page.getByPlaceholder('Location Name').click();
  await page.getByPlaceholder('Location Name').fill('Lahore');
  await page.getByPlaceholder('Location Address').click();
  await page.getByPlaceholder('Location Name').click();
  await page.getByPlaceholder('Location Name').fill('Lahore1');
  await page.getByPlaceholder('Location Address').click();
  await page.getByPlaceholder('Location Address').fill('Gulburg');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('KickStart Gulberg branch');
  await page.getByPlaceholder('Capacity').dblclick();
  await page.getByPlaceholder('Capacity').fill('20');
  await page.getByRole('dialog').getByRole('button', { name: 'Add Location' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add Location' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();

  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory1 = path.join(__dirname, 'images');
  const imagePath1 = path.join(imagesDirectory1, 'Minar-e-pakistan.jpeg');

  // Find the file input element and set the file directly
  const fileInput1 = await page.locator('#real-file');
  await fileInput1.setInputFiles(imagePath1);
  await page.getByPlaceholder('Location Name').click(); 
  await page.getByPlaceholder('Location Name').fill('Lahore2');
  await page.getByPlaceholder('Location Address').click();
  await page.getByPlaceholder('Location Address').fill('Muslim Town');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Kick Start Muslim Town branch');
  await page.getByPlaceholder('Capacity').click();
  await page.getByPlaceholder('Capacity').fill('23');
  await page.getByRole('dialog').getByRole('button', { name: 'Add Location' }).click();
    await page.waitForTimeout(4000);

  await page.getByRole('button', { name: 'Add Location' }).click();

  await page.getByRole('button', { name: 'Upload' }).click();

  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory2 = path.join(__dirname, 'images');
  const imagePath2 = path.join(imagesDirectory2, 'Minar-e-pakistan.jpeg');

  // Find the file input element and set the file directly
  const fileInput2 = await page.locator('#real-file');
  await fileInput2.setInputFiles(imagePath2);
  await page.getByPlaceholder('Location Name').click();
  await page.getByPlaceholder('Location Name').fill('Lahore3');
  await page.getByPlaceholder('Location Address').click();
  await page.getByPlaceholder('Location Address').fill('DHA');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Kick Start DHA branch');
  await page.getByPlaceholder('Capacity').click();
  await page.getByPlaceholder('Capacity').fill('10');
  await page.getByRole('dialog').getByRole('button', { name: 'Add Location' }).click();
    await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add Location' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();

  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory3 = path.join(__dirname, 'images');
  const imagePath3 = path.join(imagesDirectory3, 'Minar-e-pakistan.jpeg');

  // Find the file input element and set the file directly
  const fileInput3 = await page.locator('#real-file');
  await fileInput3.setInputFiles(imagePath3);
  await page.getByPlaceholder('Location Name').click();
  await page.getByPlaceholder('Location Name').fill('Ichra');
  await page.getByPlaceholder('Location Address').click();
  await page.getByPlaceholder('Location Address').fill('');
  await page.getByPlaceholder('Location Name').click();
  await page.getByPlaceholder('Location Name').fill('Lahore 4');
  await page.getByPlaceholder('Location Address').click();
  await page.getByPlaceholder('Location Address').fill('Ichra');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Kick Start Ichra branch');
  await page.getByPlaceholder('Capacity').click();
  await page.getByPlaceholder('Capacity').fill('8');
  await page.getByRole('dialog').getByRole('button', { name: 'Add Location' }).click();
    await page.waitForTimeout(4000);

  await page.getByRole('button', { name: 'Add Location' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();

  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory4 = path.join(__dirname, 'images');
  const imagePath4 = path.join(imagesDirectory4, 'Islamabad.jpeg');

  // Find the file input element and set the file directly
  const fileInput4 = await page.locator('#real-file');
  await fileInput4.setInputFiles(imagePath4);
  await page.getByPlaceholder('Location Name').click();
  await page.getByPlaceholder('Location Name').fill('Islamabad1');
  await page.getByPlaceholder('Location Address').click();
  await page.getByPlaceholder('Location Address').fill('F1');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Kick start Islamabad Branch F1');
  await page.getByPlaceholder('Capacity').click();
  await page.getByPlaceholder('Capacity').fill('30');
  await page.getByRole('dialog').getByRole('button', { name: 'Add Location' }).click();
    await page.waitForTimeout(4000);

  await page.getByRole('button', { name: 'Add Location' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();

  //Get the path to the 'images' directory relative to the script's location
  const imagesDirectory5 = path.join(__dirname, 'images');
  const imagePath5 = path.join(imagesDirectory5, 'Islamabad.jpeg');

  // Find the file input element and set the file directly
  const fileInput5 = await page.locator('#real-file');
  await fileInput5.setInputFiles(imagePath5);
  await page.getByPlaceholder('Location Name').click();
  await page.getByPlaceholder('Location Name').fill('Islamabad2');
  await page.getByPlaceholder('Location Address').click();
  await page.getByPlaceholder('Location Address').fill('F16');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('kick Start Islamabad F16 branch');
  await page.getByPlaceholder('Capacity').click();
  await page.getByPlaceholder('Capacity').fill('9');
  await page.getByRole('dialog').getByRole('button', { name: 'Add Location' }).click();
  await page.getByRole('link', { name: 'People' }).click();
  await page.getByRole('button', { name: 'Add Employee' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();

  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory7 = path.join(__dirname, 'images');
  const imagePath7 = path.join(imagesDirectory7, 'mrbean.jpeg');

  // Find the file input element and set the file directly
  const fileInput7 = await page.locator('#real-file');
  await fileInput7.setInputFiles(imagePath7);
  await page.getByPlaceholder('Employee name').click();
  await page.getByPlaceholder('Employee name').fill('Pakistan');
  await page.getByPlaceholder('Employee email').click();
  await page.getByPlaceholder('Employee email').fill('saadali.teczon+102@gmail.com');
  await page.getByText('Select TeamSelect a team...team Pakistan').click();
  await page.getByLabel('Close').click();
  await page.getByRole('tab', { name: 'Team' }).click();
  await page.getByRole('button', { name: 'Add Team' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();

  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory6 = path.join(__dirname, 'images');
  const imagePath6 = path.join(imagesDirectory6, 'mrbean.jpeg');

  // Find the file input element and set the file directly
  const fileInput6 = await page.locator('#real-file');
  await fileInput6.setInputFiles(imagePath6);
  await page.getByPlaceholder('Team name').click();
  await page.getByPlaceholder('Team name').fill('Team Pakistan1212');
  await page.getByPlaceholder('Team email').click();
  await page.getByPlaceholder('Team email').fill('saadali.teczon+101@gmail.com');
  await page.getByPlaceholder('More Info . . .').click();
  await page.getByPlaceholder('More Info . . .').fill('pakistans Team');
  await page.locator('.css-ackcql').click();
  await page.getByText('Islamabad2', { exact: true }).click();
  await page.getByText('Islamabad1', { exact: true }).click();
  await page.getByText('Lahore 4', { exact: true }).click();
  await page.getByText('Lahore3', { exact: true }).click();
  await page.getByText('Lahore2', { exact: true }).click();
  await page.getByText('Lahore1', { exact: true }).click();
  // await page.getByText('Pakistan', { exact: true }).click();
  await page.locator('div').filter({ hasText: 'Profile Picture*UploadAllowed Max size of 10MbName*Email(optional)More InfoLocat' }).nth(3).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Add Team' }).click();
  await page.getByRole('tab', { name: 'Employees' }).click();
  // await page.close();
  await page.getByRole('link', { name: 'Floor Plans' }).click();
  await page.getByRole('button', { name: 'Add Meeting Room' }).click();
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('Lahore1');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('2000');
  await page.getByPlaceholder('Enter Capacity').click();
  await page.getByPlaceholder('Enter Capacity').fill('4');
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory8 = path.join(__dirname, 'images');
  const imagePath8 = path.join(imagesDirectory8, 'floor1.jpeg');

  // Find the file input element and set the file directly
  const fileInput8 = await page.locator('#real-file');
  await fileInput8.setInputFiles(imagePath8);  
  await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Add Meeting Room' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory12 = path.join(__dirname, 'images');
  const imagePath12 = path.join(imagesDirectory12, 'floor2.jpeg');

  // Find the file input element and set the file directly
  const fileInput12 = await page.locator('#real-file');
  await fileInput12.setInputFiles(imagePath12);  
///home/dexter/Downloads/floor6.jpeg /home/dexter/Downloads/floor5.jpeg /home/dexter/Downloads/floor4.jpeg /home/dexter/Downloads/floor3.jpeg /home/dexter/Downloads/floor2.jpeg /home/dexter/Downloads/floor1.jpeg  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('Lahore2');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('1500');
  await page.getByPlaceholder('Enter Capacity').click();
  await page.getByPlaceholder('Enter Capacity').fill('3');
  await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.waitForTimeout(3000)
  await page.getByRole('button', { name: 'Add Meeting Room' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory9 = path.join(__dirname, 'images');
  const imagePath9 = path.join(imagesDirectory9, 'floor3.jpeg');

  // Find the file input element and set the file directly
  const fileInput9 = await page.locator('#real-file');
  await fileInput9.setInputFiles(imagePath9);
   await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('lahore3');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('3003');
  await page.getByPlaceholder('Enter Capacity').click();
  await page.getByPlaceholder('Enter Capacity').fill('4000');
  await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.waitForTimeout(3000)

  await page.getByRole('button', { name: 'Add Private Office' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
// Get the path to the 'images' directory relative to the script's location
  const imagesDirectory13 = path.join(__dirname, 'images');
  const imagePath13 = path.join(imagesDirectory13, 'floor3.jpeg');

  // Find the file input element and set the file directly
  const fileInput13 = await page.locator('#real-file');
  await fileInput13.setInputFiles(imagePath13);  
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').click();
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('private1');
  await page.getByPlaceholder('Enter Capacity').click();
  await page.getByPlaceholder('Enter Capacity').fill('10');
  await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Private Office' }).click();
  await page.getByRole('link', { name: 'Packages' }).click();
    await page.waitForTimeout(3000)

  await page.getByRole('button', { name: 'Add Space Package' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory10 = path.join(__dirname, 'images');
  const imagePath10 = path.join(imagesDirectory10, 'floor4.jpeg');

  // Find the file input element and set the file directly
  const fileInput10 = await page.locator('#real-file');
  await fileInput10.setInputFiles(imagePath10);
  await page.getByPlaceholder('Enter Package Name').click();
  await page.getByPlaceholder('Enter Package Name').fill('demopkg1');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('2000');
  await page.getByPlaceholder('Enter Persons').click();
  await page.getByPlaceholder('Enter Persons').fill('6');
  await page.locator('select').selectOption('Pakistan Space');
  await page.locator('#space-package-0 svg').click();
  await page.getByText('Lahore1', { exact: true }).click();
  await page.getByText('Lahore2', { exact: true }).click();
  await page.getByText('lahore3', { exact: true }).click();
  await page.locator('#space-package-0 svg').nth(4).click();
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('1500');
  await page.locator('#durations svg').click();
  await page.getByText('Monthly', { exact: true }).click();
  await page.locator('.css-1vbtk0w-control > .css-1d8n9bt').first().click();
  await page.getByText('Open Workspace', { exact: true }).click();
  await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.getByText('All', { exact: true }).click();
  await page.getByRole('button', { name: 'Add Package' }).click();
  await page.getByRole('button', { name: 'Add Space Package' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory11 = path.join(__dirname, 'images');
  const imagePath11 = path.join(imagesDirectory11, 'floor5.jpeg');

  // Find the file input element and set the file directly
  const fileInput11 = await page.locator('#real-file');
  await fileInput11.setInputFiles(imagePath11);
  await page.getByPlaceholder('Enter Package Name').click();
  await page.getByPlaceholder('Enter Package Name').fill('demopkg2');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('2000');
  await page.getByPlaceholder('Enter Persons').click();
  await page.getByPlaceholder('Enter Persons').click();
  await page.getByPlaceholder('Enter Persons').fill('10');
  await page.locator('select').selectOption('Pakistan Space');
  await page.locator('#space-package-0 svg').click();
  await page.getByText('lahore3', { exact: true }).click();
  await page.getByText('Lahore2', { exact: true }).click();
  await page.locator('#space-package-0 svg').nth(3).click();
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('4000');
  await page.locator('#durations svg').click();
  // await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
  // await page.getByText('Monthly').click();
  // await page.locator('.css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').first().click();
  await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
  // await page.locator('#react-select-4-option-2').click();
  await page.getByLabel('.css-1d8n9bt > .css-ackcql').selectOption({label: 'Monthly'}).click();
  await page.locator('.css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').first().click();
  await page.locator('#react-select-3-option-0').click();
  await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.getByText('All', { exact: true }).click()
  await page.getByRole('button', { name: 'Add Package' }).click();
  await page.getByRole('button', { name: 'Add Meeting Package' }).click();
  await page.getByPlaceholder('Enter Meeting Package Name').click();
  await page.getByPlaceholder('Enter Meeting Package Name').fill('qwerty');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('1000');
  await page.locator('#expiryDuration div').filter({ hasText: 'Select...' }).nth(1).click();
  // await page.locator('#react-select-10-option-2').click();
  // await page.locator('select').selectOption('Pakistan Space');
  // await page.locator('#space-package-0 svg').click();
  // await page.getByText('Lahore2', { exact: true }).click();
  // await page.getByText('Lahore1', { exact: true }).click();
  // await page.getByText('lahore3', { exact: true }).click();
  // await page.locator('#space-package-0 svg').nth(4).click();
  // await page.getByPlaceholder('1').click();
  // await page.getByPlaceholder('1').fill('2000');
  await page.locator('.css-ackcql').first().click();
  await page.locator('#react-select-14-option-2').click();
  await page.locator('select').selectOption('Pakistan Space');
  await page.locator('#space-package-0 > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.locator('.css-10hz4fn-control > .css-1d8n9bt > .css-ackcql').click();
  await page.locator('.css-10hz4fn-control > .css-1d8n9bt > .css-ackcql').click();
  await page.getByText('Lahore1', { exact: true }).click();
  await page.getByText('Lahore2', { exact: true }).click();
  await page.getByText('lahore3', { exact: true }).click();
  await page.locator('.repeater-wrapper > div > div').click();
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('2000');
  await page.getByRole('button', { name: 'Add Package' }).click();
  await page.getByRole('link', { name: 'Bookings' }).click();
  await page.getByRole('tab', { name: 'Table' }).click();
  await page.getByRole('tab', { name: 'Calender' }).click();
  await page.getByRole('link', { name: 'Members' }).click();
  await page.getByRole('link', { name: 'Quotation' }).click();
  // from here we switching to new user of portal
  await page.locator('#dropdown-notification').click();
  await page.getByRole('button', { name: 'Logout' }).click();
  // await page.goto('https://portal.ndesks.com/');
  await page.goto('https://portal.ndesks.com/login');
  await page.getByPlaceholder('john@example.com').click();
  await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('saad.ali');
  await page.getByRole('button', { name: 'Sign in' }).click();
  // await page.pause();
  // await page.goto('https://portal.ndesks.com/');
  // await page.getByRole('button', { name: 'Saad Ali Test Space' }).click();
  await page.getByRole('button', { name: 'Islamabad2' }).click();
  await page.getByRole('link', { name: 'Floor Plans' }).click();
  await page.getByRole('button', { name: 'Add Meeting Room' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory14 = path.join(__dirname, 'images');
  const imagePath14 = path.join(imagesDirectory14, 'floor1.jpeg');

  // Find the file input element and set the file directly
  const fileInput14 = await page.locator('#real-file');
  await fileInput14.setInputFiles(imagePath14);  
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('F1 Day()');
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('F1 Day(Isl)');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('12000');
  await page.getByPlaceholder('Enter Capacity').click();
  await page.getByPlaceholder('Enter Capacity').fill('16');
  await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add Meeting Room' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory15 = path.join(__dirname, 'images');
  const imagePath15 = path.join(imagesDirectory15, 'floor3.jpeg');

  // Find the file input element and set the file directly
  const fileInput15 = await page.locator('#real-file');
  await fileInput15.setInputFiles(imagePath15);  
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
  await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('F1 Night');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('3000');
  await page.getByText('Capacity*Add Valid Capacity!').click();
  await page.getByPlaceholder('Enter Capacity').fill('12');
  await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add Private Office' }).click();
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').click();
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('F1 private meeting room(Day)');
  await page.getByPlaceholder('Enter Capacity').click();
  await page.getByPlaceholder('Enter Capacity').fill('12');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').click();
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('F1 private meetingroom(Day)');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowRight');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowRight');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowRight');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('F1 privatemeetingroom(Day)');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').press('ArrowLeft');
  await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('F1privatemeetingroom(Day)');
  await page.waitForTimeout(2000);
  await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Private Office' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory16 = path.join(__dirname, 'images');
  const imagePath16 = path.join(imagesDirectory16, 'floor5.jpeg');

  // Find the file input element and set the file directlys
  const fileInput16 = await page.locator('#real-file');
  await fileInput16.setInputFiles(imagePath16);  
  await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Private Office' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Packages' }).click();
  await page.getByRole('button', { name: 'Add Space Package' }).click();
  await page.getByPlaceholder('Enter Package Name').click();
  await page.getByPlaceholder('Enter Package Name').fill('isl-pkg-1');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('3000');
  await page.getByPlaceholder('Enter Persons').click();
  await page.getByPlaceholder('Enter Persons').fill('12');
  await page.locator('select').selectOption('Islamabad2');
  await page.locator('.css-ackcql').first().click();
  await page.getByText('F1 Day(Isl)', { exact: true }).click();
  await page.getByText('F1 Night', { exact: true }).click();
  await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
  await page.getByText('Monthly', { exact: true }).click();
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('7');
  await page.locator('div:nth-child(7) > .css-b62m3t-container > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.getByText('Open Workspace', { exact: true }).click();
  await page.getByText('Please Set Facilities in Settings').click();
  await page.getByLabel('Collaboration Tools').check();
  await page.getByLabel('On-Site Support Staff').check();
  await page.getByLabel('Whiteboards and Flipcharts').check();
  await page.getByLabel('Bike Storage').check();
  await page.locator('div').filter({ hasText: /^Gaming\/Recreational Areas$/ }).nth(1).click();
  await page.getByText('Wellness Rooms').click();
  await page.getByText('Quiet Zones').click();
  await page.getByText('Event Spaces').click();
  await page.getByText('Printing and Scanning Facilities').click();
  await page.getByText('Lounge Areas').click();
  await page.getByText('Workstations').click();
  await page.getByText('Event Calendar and Member Network').click();
  await page.getByText('Accessibility Features').click();
  await page.getByText('Library or Resource Center').click();
  await page.getByText('Artistic/Design Spaces').click();
  await page.getByText('Video Recording Studio').click();
  await page.getByText('Professional Development Workshops').click();
  await page.getByText('Mentorship Programs').click();
  await page.getByText('Language Exchange Programs').click();
  await page.getByText('Podcast Recording Booths').click();
  await page.locator('form').filter({ hasText: 'AmenitiesWorkstationsMeeting RoomsPhone BoothsLounge AreasHigh-Speed InternetPri' }).getByRole('button').click();
  await page.getByLabel('Monday').check();
  await page.getByLabel('Tuesday').check();
  await page.getByLabel('Wednesday').check();
  await page.getByLabel('Thursday').check();
  await page.getByLabel('Friday').check();
  await page.getByLabel('Saturday').check();
  await page.getByLabel('Sunday').check();
  await page.locator('#startTime0').selectOption('18');
  await page.locator('select[name="endTime0"]').selectOption('48');
  await page.locator('#startTime1').selectOption('17');
  await page.locator('select[name="endTime1"]').selectOption('46');
  await page.getByLabel('Sunday').uncheck();
  await page.getByLabel('Saturday').uncheck();
  await page.locator('#startTime3').selectOption('18');
  await page.locator('select[name="endTime3"]').selectOption('46');
  await page.getByPlaceholder('Please add max slots for a booking').click();
  await page.getByPlaceholder('Please add max slots for a booking').fill('5');
  await page.locator('.form-group > .row > .col-md-12 > .btn').first().click();
  await page.locator('#startTime0').selectOption('16');
  await page.locator('select[name="endTime0"]').selectOption('46');
  await page.locator('#startTime1').selectOption('18');
  await page.locator('select[name="endTime1"]').selectOption('47');
  await page.locator('#startTime2').selectOption('18');
  await page.locator('select[name="endTime2"]').selectOption('42');
  await page.locator('#startTime3').selectOption('18');
  await page.locator('select[name="endTime3"]').selectOption('48');
  await page.locator('#startTime4').selectOption('18');
  await page.locator('select[name="endTime4"]').selectOption('34');
  await page.locator('form').filter({ hasText: 'Operating HoursMondayOpens24 Hours12:00 AM12:30 AM1:00 AM1:30 AM2:00 AM2:30 AM3:' }).getByRole('button').click();
  await page.locator('#billingMethod').selectOption('2');
  await page.locator('.col-md-12 > .btn').first().click();
  await page.getByRole('link', { name: 'Packages' }).click();
  await page.getByRole('button', { name: 'Add Space Package' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory17 = path.join(__dirname, 'images');
  const imagePath17 = path.join(imagesDirectory17, 'download.jpeg');

  // Find the file input element and set the file directly
  const fileInput17 = await page.locator('#real-file');
  await fileInput17.setInputFiles(imagePath17);  
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Enter Package Name').click();
  await page.getByPlaceholder('Enter Package Name').fill('isl-pkgf1');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('1200');
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Enter Persons').click();
  await page.getByPlaceholder('Enter Persons').fill('4');
  await page.locator('select').selectOption('Islamabad2');
  await page.locator('.css-ackcql').first().click();
  await page.getByText('F1 Day(Isl)', { exact: true }).click();
  await page.getByText('F1 Night', { exact: true }).click();
  await page.locator('#durations div').filter({ hasText: 'Select...' }).nth(1).click();
  await page.getByText('Monthly', { exact: true }).click();
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('200');
  await page.locator('div:nth-child(7) > .css-b62m3t-container > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.getByText('Open Workspace', { exact: true }).click();
  await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.getByText('All', { exact: true }).click();
  await page.getByRole('button', { name: 'Add Package' }).click();

  // **********test phase3 three remove it before final testing **********************/
   
  //  await page.getByRole('link', { name: 'Packages' }).click();

  await page.getByRole('button', { name: 'Add Space Package' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory18 = path.join(__dirname, 'images');
  const imagePath18 = path.join(imagesDirectory18, 'floor5.jpeg');

  // Find the file input element and set the file directly
  const fileInput18 = await page.locator('#real-file');
  await fileInput18.setInputFiles(imagePath18);  
  await page.getByPlaceholder('Enter Package Name').click();
  await page.getByPlaceholder('Enter Package Name').fill('isl-pkgf1-2');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('2000');
  await page.getByPlaceholder('Enter Persons').click();
  await page.getByPlaceholder('Enter Persons').fill('6');
  await page.locator('select').selectOption('Islamabad2');
  await page.locator('.css-ackcql').first().click();
  await page.getByText('F1 Day(Isl)', { exact: true }).click();
  await page.getByText('F1 Night', { exact: true }).click();
  await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
  //await page.locator('#react-select-4-option-1').click();
  const button = await page.$x("button[contains(text() , 'Daily')]");
  
  // async function clickWithTimeout(page, selector, timeout) {
  //   return Promise.race([
  //     page.click(selector),
  //     new Promise((_, reject) =>
  //       setTimeout(() => reject(new Error('Click action timed out')), timeout)
  //     ),
  //   ]);
  // }
  
  // try {
  //   await clickWithTimeout(page, '#react-select-2-option-1', 5000); // 3000ms = 3 seconds
  //   await clickWithTimeout(page, '#react-select-3-option-1', 5000); // 3000ms = 3 seconds
  //   await clickWithTimeout(page, '#react-select-4-option-1', 5000); // 3000ms = 3 seconds
  //   await page.click('#react-select-5-option-1');


  // } catch (error) {
  //   console.error("Error occurred while clicking #react-select-2-option-1:", error);
  //   // try {
  //   //   await page.click('#react-select-3-option-1');
  //   // } catch (error) {
  //   //   console.error("Error occurred while clicking #react-select-3-option-1:", error);
  //   //   console.error("Both elements not found or cannot be clicked.");
  //   // }
  // }
  
   
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('500');
  await page.locator('div:nth-child(7) > .css-b62m3t-container > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
//  await page.locator('.css-10hz4fn-control > .css-1d8n9bt > .css-ackcql').click();
  // await page.locator('#react-select-3-option-0').click();
  async function clickWithTimeout(page, selector, timeout) {
    return Promise.race([
      page.click(selector),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Click action timed out')), timeout)
      ),
    ]);
  }
  
  try {
    await clickWithTimeout(page, '#react-select-4-option-0', 5000); // 3000ms = 3 seconds
    await clickWithTimeout(page, '#react-select-3-option-0', 5000); // 3000ms = 3 seconds


  } catch (error) {
    console.error("Error occurred while clicking #react-select-4-option-0:", error);
    await page.click('#react-select-15-option-1');

    // try {
    //   await page.click('#react-select-15-option-1');
    // } catch (error) {
    //   console.error("Error occurred while clicking #react-select-5-option-0:", error);
    //   console.error("Both elements not found or cannot be clicked.");
    // }
  }
  await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.getByText('All', { exact: true }).click();
  // await page.getByText('Private Offices', { exact: true }).click();
  // await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  // await page.getByText('On-Site Support Staff', { exact: true }).click();
  // await page.locator('.css-10hz4fn-control > .css-1wy0on6 > div:nth-child(3)').click();
  // await page.getByText('All', { exact: true }).click();
  await page.getByRole('button', { name: 'Add Package' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add Space Package' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory19 = path.join(__dirname, 'images');
  const imagePath19 = path.join(imagesDirectory19, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput19 = await page.locator('#real-file');
  await fileInput19.setInputFiles(imagePath19);  
  await page.getByPlaceholder('Enter Package Name').click();
  await page.getByPlaceholder('Enter Package Name').fill('isl-pkgf1-3');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('3000');
  await page.getByPlaceholder('Enter Persons').click();
  await page.getByPlaceholder('Enter Persons').fill('11');
  await page.locator('select').selectOption('Islamabad2');
  await page.locator('.css-ackcql').first().click();
  await page.getByText('F1 Day(Isl)', { exact: true }).click();
  await page.getByText('F1 Night', { exact: true }).click();
  await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
  await page.locator('#react-select-7-option-2').click();
  await page.locator('.css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').first().click();
  await page.locator('#react-select-8-option-0').click();
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('900');
  await page.locator('div:nth-child(7) > .css-b62m3t-container > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.getByText('Training Rooms', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
  await page.getByText('All', { exact: true }).click();
  await page.getByRole('button', { name: 'Add Package' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Meeting Package' }).click();
  await page.getByLabel('Close').click();
  await page.getByRole('button', { name: 'Add Meeting Package' }).click();
  await page.getByPlaceholder('Enter Meeting Package Name').click();
  await page.getByPlaceholder('Enter Meeting Package Name').click();
  await page.getByPlaceholder('Enter Meeting Package Name').fill('isl-pkgoqie');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByLabel('Close').click();
  await page.getByRole('button', { name: 'Add Meeting Package' }).click();
  await page.getByPlaceholder('Enter Meeting Package Name').click();
  await page.getByPlaceholder('Enter Meeting Package Name').fill('qwerty');
  await page.getByPlaceholder('Enter Price').click();
  await page.getByPlaceholder('Enter Price').fill('1000');
  await page.locator('.css-ackcql').first().click();
  await page.locator('#react-select-14-option-2').click();
  await page.locator('select').selectOption('Islamabad2');
  await page.locator('#space-package-0 > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
  await page.getByText('F1 Day(Isl)', { exact: true }).click();
  await page.getByText('F1 Night', { exact: true }).click();
  await page.getByText('Name*Enter Name(Max 50 Characters)Price*Enter PriceExpiry Duration*MonthlyMeetin').click();
  await page.getByPlaceholder('1').click();
  await page.getByPlaceholder('1').fill('400');
  await page.getByRole('button', { name: 'Add Package' }).click();
  //***************remove test phase4 also  */
  await page.getByRole('button',{name: 'Pakistan Space'})
  await page.getByRole('button', { name: 'Islamabad2' }).click();
  await page.getByRole('button', { name: 'Islamabad1' }).click();
  await page.locator('#dropdown-notification').click();
  await page.getByRole('link', { name: 'Account Setting' }).click();
  await page.locator('#billingMethod').selectOption('2');
  await page.locator('.col-md-12 > .btn').first().click();
  await page.getByLabel('General').locator('svg').click();
  await page.getByText('Select CurrencyCurrencyoption USD selected, 1 of 134. 134 results available. Use').click();
  await page.getByLabel('Monday').check();
  await page.locator('div').filter({ hasText: /^Tuesday$/ }).first().click();
  await page.getByLabel('Wednesday').check();
  await page.getByLabel('Thursday').check();
  await page.getByLabel('Friday').check();
  await page.locator('#startTime1').selectOption('15');
  await page.locator('select[name="endTime1"]').selectOption('48');
  await page.locator('#startTime2').selectOption('17');
  await page.locator('select[name="endTime2"]').selectOption('48');
  await page.locator('#startTime3').selectOption('18');
  await page.locator('select[name="endTime3"]').selectOption('43');
  await page.locator('#startTime4').selectOption('17');
  await page.locator('select[name="endTime4"]').selectOption('30');
  await page.locator('form').filter({ hasText: 'Operating HoursMondayOpens24 Hours12:00 AM12:30 AM1:00 AM1:30 AM2:00 AM2:30 AM3:' }).getByRole('button').click();
  await page.getByPlaceholder('Please add max slots for a booking').click();
  await page.getByPlaceholder('Please add max slots for a booking').fill('5');
  await page.locator('.form-group > .row > .col-md-12 > .btn').first().click();
  await page.getByText('Gaming/Recreational Areas').click();
  await page.getByLabel('Wellness Rooms').click();
  await page.getByText('Locker Storage').click();
  await page.getByText('Event Spaces').click();
  await page.getByText('Printing and Scanning Facilities').click();
  await page.getByText('Phone Booths').click();
  await page.getByText('Accessibility Features').click();
  await page.getByText('Ergonomic Furniture').click();
  await page.getByText('Mail and Package Handling').click();
  await page.locator('div').filter({ hasText: /^Parking Facilities$/ }).first().click();
  await page.getByText('CCTV and Security Systems').click();
  await page.getByText('On-Site Cafeteria or Food Services').click();
  await page.getByText('Parking Facilities').click();
  await page.getByText('Mentorship Programs').click();
  await page.getByText('Language Exchange Programs').click();
  await page.getByText('Podcast Recording Booths').click();
  await page.getByText('Meditation Room').click();
  await page.getByText('Library or Resource Center').click();
  await page.getByText('Podcasting Studio').click();
  await page.getByText('Gym or Fitness Center').click();
  await page.getByText('Soundproof Music Room').click();
  await page.getByText('Video Recording Studio').click();
  await page.getByLabel('Video Recording Studio').click();
  await page.getByText('Professional Development Workshops').click();
  await page.getByText('Outdoor Workspaces').click();
  await page.getByText('Wellness Programs Soundproof Rooms').click();
  await page.getByText('On-Site Support Staff').click();
  await page.getByText('Whiteboards and Flipcharts').click();
  await page.getByText('High-Speed Internet').click();
  await page.getByText('Meeting Rooms').click();
  await page.locator('form').filter({ hasText: 'AmenitiesWorkstationsMeeting RoomsPhone BoothsLounge AreasHigh-Speed InternetPri' }).getByRole('button').click();
//test phase 5->
    // await page.goto('https://portal.ndesks.com/');
    // await page.goto('https://portal.ndesks.com/login');
    // await page.getByPlaceholder('john@example.com').click();
    // await page.getByPlaceholder('john@example.com').fill('saadali.teczon+1@gmail.com');
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('saad.ali');
    // await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Islamabad1' }).click();
    await page.getByRole('button', { name: 'Lahore 4' }).click();
    await page.locator('#dropdown-notification').click();
    await page.getByRole('link', { name: 'Account Setting' }).click();
    await page.locator('#billingMethod').selectOption('2');
    await page.locator('.col-md-12 > .btn').first().click();
    await page.getByLabel('Monday').check();
    await page.getByLabel('Tuesday').check();
    await page.getByLabel('Wednesday').check();
    await page.getByLabel('Thursday').check();
    await page.getByLabel('Friday').check();
    await page.locator('#startTime0').selectOption('15');
    await page.locator('select[name="endTime0"]').selectOption('47');
    await page.locator('#startTime1').selectOption('16');
    await page.locator('select[name="endTime1"]').selectOption('48');
    await page.locator('#startTime2').selectOption('18');
    await page.locator('select[name="endTime2"]').selectOption('46');
    await page.locator('#startTime4').selectOption('19');
    await page.locator('select[name="endTime4"]').selectOption('48');
    await page.locator('form').filter({ hasText: 'Operating HoursMondayOpens24 Hours12:00 AM12:30 AM1:00 AM1:30 AM2:00 AM2:30 AM3:' }).getByRole('button').click();
    await page.getByPlaceholder('Please add max slots for a booking').click();
    await page.getByPlaceholder('Please add max slots for a booking').fill('5');
    await page.locator('.form-group > .row > .col-md-12 > .btn').first().click();
    await page.getByText('Workstations').click();
    await page.getByText('Lounge Areas').click();
    await page.getByText('High-Speed Internet').click();
    await page.getByText('Meeting Rooms').click();
    await page.getByText('Locker Storage').click();
    await page.getByText('Event Spaces').click();
    await page.getByText('CCTV and Security Systems').click();
    await page.getByText('On-Site Cafeteria or Food Services').click();
    await page.getByText('Mail and Package Handling').click();
    await page.getByText('Ergonomic Furniture').click();
    await page.getByText('Video Recording Studio').click();
    await page.getByText('Wellness Programs Soundproof Rooms').click();
    await page.getByText('On-Site Support Staff').click();
    await page.getByText('Whiteboards and Flipcharts').click();
    await page.getByText('Networking Events').click();
    await page.getByText('Podcast Recording Booths').click();
    await page.getByText('Childcare Services').click();
    await page.getByText('Tech Support').click();
    await page.getByText('Pet-Friendly Areas').click();
    await page.getByText('Professional Development Workshops').click();
    await page.locator('form').filter({ hasText: 'AmenitiesWorkstationsMeeting RoomsPhone BoothsLounge AreasHigh-Speed InternetPri' }).getByRole('button').click();
await page.getByRole('button', { name: 'Islamabad2' }).click();
await page.getByRole('button', { name: 'Lahore 4' }).click();
    await page.getByRole('link', { name: 'Members' }).click();
    await page.getByRole('link', { name: 'Packages' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Add Space Package' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory20 = path.join(__dirname, 'images');
  const imagePath20 = path.join(imagesDirectory20, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput20 = await page.locator('#real-file');
  await fileInput20.setInputFiles(imagePath20);  
     await page.getByPlaceholder('Enter Package Name').click();
    await page.getByPlaceholder('Enter Package Name').fill('L1pkg');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('3000');
    await page.getByPlaceholder('Enter Persons').click();
    await page.getByPlaceholder('Enter Persons').fill('12');
    await page.locator('select').selectOption('Pakistan Space');
    await page.locator('.css-ackcql').first().click();
    await page.locator('#space-package-0 div').filter({ hasText: 'Select...' }).nth(1).click();
    await page.getByText('Lahore1', { exact: true }).click();
    await page.locator('#react-select-2-option-8').click();
    await page.getByText('lahore3', { exact: true }).click();
    await page.locator('.repeater-wrapper > div > div').click();
    await page.getByPlaceholder('1').click();
    await page.getByPlaceholder('1').fill('500');
    await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
    await page.locator('#react-select-6-option-0').click();
    await page.locator('.css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').first().click();
    await page.getByText('Open Workspace', { exact: true }).click();
    await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
    await page.getByText('All', { exact: true }).click();
    await page.getByText('Image*UploadAllowed Max size of 10MbName*Name Must Have A Letter or Digit!(1-25 ').click();
    await page.getByRole('button', { name: 'Add Package' }).click();
    await page.getByRole('link', { name: 'Floor Plans' }).click();
    await page.getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory21 = path.join(__dirname, 'images');
  const imagePath21 = path.join(imagesDirectory21, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput21 = await page.locator('#real-file');
  await fileInput21.setInputFiles(imagePath21);  
     await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('Lhr1meetingroom');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('1000');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('12');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory22 = path.join(__dirname, 'images');
  const imagePath22 = path.join(imagesDirectory22, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput22 = await page.locator('#real-file');
  await fileInput22.setInputFiles(imagePath22); 
      await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('Lhr2meetingroom');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('2000');
    await page.getByPlaceholder('Enter Price').press('Insert');
    await page.getByPlaceholder('Enter Price').press('Insert');
    await page.getByPlaceholder('Enter Price').press('Insert');
    await page.getByPlaceholder('Enter Price').fill('1200');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('6');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Add Private Office' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory23 = path.join(__dirname, 'images');
  const imagePath23 = path.join(imagesDirectory23, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput23 = await page.locator('#real-file');
  await fileInput23.setInputFiles(imagePath23); 
      await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').click();
    await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('Lhr1privateoffice');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('10');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Private Office' }).click();
    await page.getByText('id-cardVisitors').click();
    await page.getByText('id-cardVisitors').click();
    await page.locator('li').filter({ hasText: 'id-cardVisitors' }).locator('span').click();
    await page.getByRole('link', { name: 'Visits' }).click();
    await page.getByRole('link', { name: 'Add Visit' }).click();
    await page.getByRole('link', { name: 'Add New Visitor' }).click();
    await page.locator('input[name="expected_visit_datetime"]').click();
    await page.locator('input[name="expected_visit_datetime"]').fill('2024-02-24T17:34');
    await page.getByPlaceholder('Enter Visitor\'s Name').click();
    await page.getByPlaceholder('Enter Visitor\'s Name').fill('qwerty');
    await page.getByPlaceholder('Enter Visitor\'s Company').click();
    await page.getByPlaceholder('Enter Visitor\'s Company').fill('teczon2.0');
    await page.getByPlaceholder('Enter Visitor\'s Email').click();
    await page.getByPlaceholder('Enter Visitor\'s Email').fill('example12345@gmail.com');
    await page.getByPlaceholder('Enter Visitor\'s Phone No').click();
    await page.getByPlaceholder('Enter Visitor\'s Phone No').fill('03030303030');
    await page.getByPlaceholder('Purpose of Visit').click();
    await page.getByPlaceholder('Purpose of Visit').fill('meeting');
    await page.getByPlaceholder('Enter Location').click();
    await page.getByPlaceholder('Enter Location').fill('lhr');
    await page.getByRole('button', { name: 'Add Visitor' }).click();
    await page.getByRole('link', { name: 'Visits' }).click();
    await page.getByRole('button', { name: 'Lahore 4' }).click();
    await page.getByRole('button', { name: 'Lahore3' }).click();
    await page.locator('#dropdown-notification').click();
    await page.getByRole('link', { name: 'Account Setting' }).click();
    await page.locator('#billingMethod').selectOption('2');
    await page.locator('.col-md-12 > .btn').first().click();
    await page.getByLabel('Monday').check();
    await page.getByLabel('Tuesday').check();
    await page.getByLabel('Wednesday').check();
    await page.getByLabel('Thursday').check();
    await page.getByLabel('Friday').check();
    await page.getByPlaceholder('Please add max slots for a booking').click();
    await page.getByPlaceholder('Please add max slots for a booking').fill('5');
    await page.locator('form').filter({ hasText: 'Operating HoursMondayOpens24 Hours12:00 AM12:30 AM1:00 AM1:30 AM2:00 AM2:30 AM3:' }).getByRole('button').click();
    await page.getByPlaceholder('Please add max slots for a booking').click();
    await page.getByPlaceholder('Please add max slots for a booking').fill('5');
    await page.locator('.form-group > .row > .col-md-12 > .btn').first().click();
    await page.getByText('Kitchen and Refreshment Areas').click();
    await page.getByText('Printing and Scanning Facilities').click();
    await page.getByText('Mail and Package Handling').click();
    await page.getByText('On-Site Cafeteria or Food Services').click();
    await page.getByText('Whiteboards and Flipcharts').click();
    await page.getByText('On-Site Support Staff').click();
    await page.getByText('Collaboration Tools').click();
    await page.getByText('Event Calendar and Member Network').click();
    await page.getByText('Outdoor Spaces').click();
    await page.getByText('Accessibility Features').click();
    await page.getByText('Mentorship Programs').click();
    await page.getByText('Language Exchange Programs').click();
    await page.getByText('Shower Facilities').click();
    await page.getByText('Soundproof Music Room').click();
    await page.getByText('Video Recording Studio').click();
    await page.getByText('Professional Development Workshops').click();
    await page.locator('form').filter({ hasText: 'AmenitiesWorkstationsMeeting RoomsPhone BoothsLounge AreasHigh-Speed InternetPri' }).getByRole('button').click();
    await page.getByRole('link', { name: 'Packages' }).click();
    await page.getByRole('button', { name: 'Add Space Package' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory24 = path.join(__dirname, 'images');
  const imagePath24= path.join(imagesDirectory24, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput24 = await page.locator('#real-file');
  await fileInput24.setInputFiles(imagePath24); 
      await page.getByPlaceholder('Enter Package Name').click();
    await page.getByPlaceholder('Enter Package Name').fill('lahore2pkg1');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('1200');
    await page.getByPlaceholder('Enter Persons').click();
    await page.getByPlaceholder('Enter Persons').fill('12');
    await page.locator('select').selectOption('Pakistan Space');
    await page.locator('.css-ackcql').first().click();
    await page.locator('#react-select-18-option-0').click();
    await page.locator('#react-select-18-option-1').click();
    await page.getByText('lahore3', { exact: true }).click();
    await page.locator('.repeater-wrapper > div > div').click();
    await page.getByPlaceholder('1').click();
    await page.getByPlaceholder('1').fill('300');
    await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
    await page.locator('#react-select-19-option-0').click();
    await page.locator('.css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').first().click();
    await page.getByText('Open Workspace', { exact: true }).click();
    await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
    await page.getByText('All', { exact: true }).click();
    await page.getByRole('button', { name: 'Add Package' }).click();
    await page.getByRole('button', { name: 'Add Meeting Package' }).click();
    await page.getByPlaceholder('Enter Meeting Package Name').click();
    await page.getByPlaceholder('Enter Meeting Package Name').fill('dfffdsf');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('123');
    await page.locator('.css-ackcql').first().click();
    await page.locator('#react-select-22-option-0').click();
    await page.locator('select').selectOption('Pakistan Space');
    await page.locator('#space-package-0 > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
    await page.locator('#react-select-23-option-1').click();
    await page.getByText('Name*Enter Name(Max 50 Characters)Price*Enter PriceExpiry Duration*DailyMeeting ').click();
    await page.getByPlaceholder('1').click();
    await page.getByPlaceholder('1').fill('200');
    await page.getByRole('button', { name: 'Add Package' }).click();
    await page.getByRole('link', { name: 'Floor Plans' }).click();
    await page.getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory25 = path.join(__dirname, 'images');
  const imagePath25 = path.join(imagesDirectory25, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput25 = await page.locator('#real-file');
  await fileInput25.setInputFiles(imagePath25);   
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('1200');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('lhr2meetingroom1');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('1200');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('12');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('lhr2meetingroom2');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('1000');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('12');
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory26 = path.join(__dirname, 'images');
  const imagePath26 = path.join(imagesDirectory26, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput26 = await page.locator('#real-file');
  await fileInput26.setInputFiles(imagePath26);  
     await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Add Private Office' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByRole('button', { name: 'Upload' }).setInputFiles('floor3.jpeg');
    await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').click();
    await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('lhr2privateoffice1');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('7');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Private Office' }).click();
    await page.getByRole('link', { name: 'Members' }).click();
    await page.getByRole('tab', { name: 'Individuals' }).click();
    await page.getByRole('button', { name: 'Lahore3' }).click();
    await page.getByRole('button', { name: 'Lahore2' }).click();
    await page.locator('#dropdown-notification').click();
    await page.getByRole('link', { name: 'Account Setting' }).click();
    await page.locator('#billingMethod').selectOption('2');
    await page.locator('.col-md-12 > .btn').first().click();
    await page.getByLabel('Monday').check();
    await page.getByLabel('Tuesday').check();
    await page.getByText('Wednesdayclosed').click();
    await page.getByLabel('Wednesday').check();
    await page.getByLabel('Friday').check();
    await page.locator('#startTime0').selectOption('19');
    await page.locator('select[name="endTime0"]').selectOption('48');
    await page.locator('#startTime1').selectOption('48');
    await page.locator('#startTime1').selectOption('18');
    await page.locator('select[name="endTime1"]').selectOption('48');
    await page.locator('#startTime2').selectOption('21');
    await page.locator('select[name="endTime2"]').selectOption('47');
    await page.locator('form').filter({ hasText: 'Operating HoursMondayOpens24 Hours12:00 AM12:30 AM1:00 AM1:30 AM2:00 AM2:30 AM3:' }).getByRole('button').click();
    await page.getByPlaceholder('Please add max slots for a booking').click();
    await page.getByPlaceholder('Please add max slots for a booking').fill('5');
    await page.locator('.form-group > .row > .col-md-12 > .btn').first().click();
    await page.getByText('Workstations').click();
    await page.getByText('Lounge Areas').click();
    await page.locator('div').filter({ hasText: /^High-Speed Internet$/ }).first().click();
    await page.getByText('Meeting Rooms').click();
    await page.getByText('High-Speed Internet').click();
    await page.getByText('Kitchen and Refreshment Areas').click();
    await page.getByText('Quiet Zones').click();
    await page.getByText('Event Spaces').click();
    await page.getByText('Printing and Scanning Facilities').click();
    await page.getByText('Phone Booths').click();
    await page.getByText('Networking Events').click();
    await page.getByText('Mentorship Programs').click();
    await page.getByText('Outdoor Workspaces').click();
    await page.getByText('Professional Development Workshops').click();
    await page.getByText('Language Exchange Programs').click();
    await page.getByText('Podcast Recording Booths').click();
    await page.getByText('Childcare Services').click();
    await page.getByText('Meditation Room').click();
    await page.getByText('Library or Resource Center').click();
    await page.getByText('Artistic/Design Spaces').click();
    await page.getByLabel('Video Recording Studio').check();
    await page.getByText('Soundproof Music Room').click();
    await page.getByText('Gym or Fitness Center').click();
    await page.locator('form').filter({ hasText: 'AmenitiesWorkstationsMeeting RoomsPhone BoothsLounge AreasHigh-Speed InternetPri' }).getByRole('button').click();
    await page.getByRole('link', { name: 'Packages' }).click();
    await page.getByRole('button', { name: 'Add Space Package' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory27 = path.join(__dirname, 'images');
  const imagePath27 = path.join(imagesDirectory27, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput27 = await page.locator('#real-file');
  await fileInput27.setInputFiles(imagePath27); 
      await page.getByPlaceholder('Enter Package Name').click();
    await page.getByPlaceholder('Enter Package Name').fill('lhr3pkg1');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('100');
    await page.getByPlaceholder('Enter Persons').click();
    await page.getByPlaceholder('Enter Persons').fill('12');
    await page.locator('select').selectOption('Pakistan Space');
    await page.locator('.css-ackcql').first().click();
    await page.getByText('lahore3', { exact: true }).click();
    await page.getByText('Image*UploadAllowed Max size of 10MbName*Name Must Have A Letter or Digit!(1-25 ').click();
    await page.getByPlaceholder('1').click();
    await page.getByPlaceholder('1').fill('4000');
    await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
    await page.locator('#react-select-28-option-0').click();
    await page.locator('.css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').first().click();
    await page.getByText('Open Workspace', { exact: true }).click();
    await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
    await page.getByText('All', { exact: true }).click();
    await page.getByRole('button', { name: 'Add Package' }).click();
    await page.getByRole('button', { name: 'Add Space Package' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory28 = path.join(__dirname, 'images');
  const imagePath28 = path.join(imagesDirectory28, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput28 = await page.locator('#real-file');
  await fileInput28.setInputFiles(imagePath28); 
      await page.getByPlaceholder('Enter Package Name').click();
    await page.getByPlaceholder('Enter Package Name').fill('lhr3pkg2');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('1200');
    await page.getByPlaceholder('Enter Persons').click();
    await page.getByPlaceholder('Enter Persons').fill('12');
    await page.locator('select').selectOption('Pakistan Space');
    await page.locator('.css-ackcql').first().click();
    await page.locator('#react-select-31-option-0').click();
    await page.locator('#react-select-31-option-1').click();
    await page.getByText('Image*UploadAllowed Max size of 10MbName*Name Must Have A Letter or Digit!(1-25 ').click();
    await page.getByPlaceholder('1').click();
    await page.getByPlaceholder('1').fill('12');
    await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
    await page.locator('#react-select-32-option-0').click();
    await page.locator('.css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').first().click();
    await page.locator('#react-select-33-option-2').click();
    await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
    await page.getByText('High-Speed Internet', { exact: true }).click();
    await page.getByText('All', { exact: true }).click();
    await page.getByRole('button', { name: 'Add Package' }).click();
    await page.getByRole('button', { name: 'Add Meeting Package' }).click();
    await page.getByPlaceholder('Enter Meeting Package Name').click();
    await page.getByPlaceholder('Enter Meeting Package Name').fill('lhr');
    await page.getByPlaceholder('Enter Meeting Package Name').click();
    await page.getByPlaceholder('Enter Meeting Package Name').fill('lhr3privateoffice');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('2000');
    await page.locator('.css-ackcql').first().click();
    await page.locator('#react-select-35-option-0').click();
    await page.locator('select').selectOption('Pakistan Space');
    await page.locator('#space-package-0 > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
    await page.locator('#react-select-36-option-0').click();
    await page.locator('#react-select-36-option-1').click();
    await page.getByText('lahore3', { exact: true }).click();
    await page.getByText('Name*Enter Name(Max 50 Characters)Price*Enter PriceExpiry Duration*DailyMeeting ').click();
    await page.getByPlaceholder('1').click();
    await page.getByPlaceholder('1').fill('1233');
    await page.getByRole('button', { name: 'Add Package' }).click();
    await page.getByRole('link', { name: 'Floor Plans' }).click();
    await page.getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory29 = path.join(__dirname, 'images');
  const imagePath29 = path.join(imagesDirectory29, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput29 = await page.locator('#real-file');
  await fileInput29.setInputFiles(imagePath29); 
      await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('lhr3room1');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('2000');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('12');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('lhr3room2');
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory30 = path.join(__dirname, 'images');
  const imagePath30 = path.join(imagesDirectory30, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput30 = await page.locator('#real-file');
  await fileInput30.setInputFiles(imagePath30); 
      await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('500');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('4');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Add Private Office' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory31 = path.join(__dirname, 'images');
  const imagePath31 = path.join(imagesDirectory31, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput31 = await page.locator('#real-file');
  await fileInput31.setInputFiles(imagePath31);  
     await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').click();
    await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('lhr3privatoffice');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('12');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Private Office' }).click();
    await page.getByRole('button', { name: 'Lahore2' }).click();
    await page.getByRole('button', { name: 'Lahore1' }).click();
    await page.locator('#dropdown-notification').click();
    await page.getByRole('link', { name: 'Account Setting' }).click();
    await page.locator('#billingMethod').selectOption('2');
    await page.locator('.col-md-12 > .btn').first().click();
    await page.getByLabel('Monday').check();
    await page.locator('div').filter({ hasText: /^Tuesday$/ }).nth(1).click();
    await page.getByLabel('Thursday').check();
    await page.getByLabel('Friday').check();
    await page.locator('#startTime0').selectOption('19');
    await page.locator('select[name="endTime0"]').selectOption('46');
    await page.locator('#startTime1').selectOption('19');
    await page.locator('select[name="endTime1"]').selectOption('47');
    await page.locator('#startTime3').selectOption('21');
    await page.locator('select[name="endTime3"]').selectOption('46');
    await page.locator('#startTime4').selectOption('19');
    await page.locator('select[name="endTime4"]').selectOption('38');
    await page.locator('form').filter({ hasText: 'Operating HoursMondayOpens24 Hours12:00 AM12:30 AM1:00 AM1:30 AM2:00 AM2:30 AM3:' }).getByRole('button').click();
    await page.getByPlaceholder('Please add max slots for a booking').click();
    await page.getByPlaceholder('Please add max slots for a booking').click();
    await page.getByPlaceholder('Please add max slots for a booking').fill('5');
    await page.locator('.form-group > .row > .col-md-12 > .btn').first().click();
    await page.locator('div').filter({ hasText: /^Bike Storage$/ }).first().click();
    await page.getByText('Gaming/Recreational Areas').click();
    await page.getByText('Kitchen and Refreshment Areas').click();
    await page.getByText('Quiet Zones').click();
    await page.getByText('Event Spaces').click();
    await page.getByText('Printing and Scanning Facilities').click();
    await page.getByText('Mail and Package Handling').click();
    await page.getByText('Locker Storage').click();
    await page.getByText('Accessibility Features').click();
    await page.locator('div').filter({ hasText: /^Parking Facilities$/ }).first().click();
    await page.getByText('On-Site Support Staff').click();
    await page.getByText('Parking Facilities').click();
    await page.getByText('CCTV and Security Systems').click();
    await page.getByText('On-Site Cafeteria or Food Services').click();
    await page.locator('div').filter({ hasText: /^Bike Storage$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Whiteboards and Flipcharts$/ }).nth(1).click();
    await page.getByText('Wellness Programs Soundproof Rooms').click();
    await page.getByText('Nap Pods').click();
    await page.getByText('Podcasting Studio').click();
    await page.getByText('Outdoor Spaces').click();
    await page.getByText('Gym or Fitness Center').click();
    await page.getByText('Pet-Friendly Areas').click();
    await page.getByText('Language Exchange Programs').click();
    await page.getByText('Networking Events').click();
    await page.getByText('Mentorship Programs').click();
    await page.getByText('Professional Development Workshops').click();
    await page.locator('form').filter({ hasText: 'AmenitiesWorkstationsMeeting RoomsPhone BoothsLounge AreasHigh-Speed InternetPri' }).getByRole('button').click();
    await page.getByRole('link', { name: 'Floor Plans' }).click();
    await page.getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory32 = path.join(__dirname, 'images');
  const imagePath32 = path.join(imagesDirectory32, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput32 = await page.locator('#real-file');
  await fileInput32.setInputFiles(imagePath32); 
      await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('lhr4room1');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('2100');
    await page.getByPlaceholder('Enter Capacity').fill('12');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory33 = path.join(__dirname, 'images');
  const imagePath33 = path.join(imagesDirectory33, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput33 = await page.locator('#real-file');
  await fileInput33.setInputFiles(imagePath33); 
      await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').click();
    await page.getByPlaceholder('Enter Meeting Room Name (1-25 Characters)').fill('lhr4room2');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('300');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('12');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Meeting Room' }).click();
    await page.getByRole('button', { name: 'Add Private Office' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory34 = path.join(__dirname, 'images');
  const imagePath34 = path.join(imagesDirectory34, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput34 = await page.locator('#real-file');
  await fileInput34.setInputFiles(imagePath34); 
      await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').click();
    await page.getByPlaceholder('Enter Private Office Name(1-25 Characters)').fill('lhr4privateoffice');
    await page.getByPlaceholder('Enter Capacity').click();
    await page.getByPlaceholder('Enter Capacity').fill('5');
    await page.locator('#meetingPopUp').getByRole('button', { name: 'Add Private Office' }).click();
    await page.getByRole('link', { name: 'Packages' }).click();
    await page.getByRole('button', { name: 'Add Space Package' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();
  // Get the path to the 'images' directory relative to the script's location
  const imagesDirectory35 = path.join(__dirname, 'images');
  const imagePath35 = path.join(imagesDirectory35, 'groot1.jpg');

  // Find the file input element and set the file directly
  const fileInput35 = await page.locator('#real-file');
  await fileInput35.setInputFiles(imagePath35); 
      await page.getByPlaceholder('Enter Package Name').click();
    await page.getByPlaceholder('Enter Package Name').fill('lhr4pkg1');
    await page.getByPlaceholder('Enter Price').click();
    await page.getByPlaceholder('Enter Price').fill('4000');
    await page.getByPlaceholder('Enter Persons').click();
    await page.getByPlaceholder('Enter Persons').fill('8');
    await page.locator('select').selectOption('Pakistan Space');
    await page.getByPlaceholder('1').click();
    await page.locator('.css-ackcql').first().click();
    await page.locator('#react-select-43-option-0').click();
    await page.locator('#react-select-43-option-1').click();
    await page.getByText('lahore3', { exact: true }).click();
    await page.locator('#packagePopUp div').filter({ hasText: 'Select LocationAll LocationsSaad Ali Test SpacePakistan SpaceLahore1Lahore2Lahor' }).nth(3).click();
    await page.getByText('Image*UploadAllowed Max size of 10MbName*Name Must Have A Letter or Digit!(1-25 ').click();
    await page.locator('.repeater-wrapper > div > div').click();
    await page.getByPlaceholder('1').click();
    await page.getByPlaceholder('1').fill('1199');
    await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
    await page.locator('#react-select-40-option-0').click();
    await page.locator('.css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').first().click();
    await page.getByText('Open Workspace', { exact: true }).click();
    await page.locator('#package-facilities > .css-1vbtk0w-control > .css-1d8n9bt > .css-ackcql').click();
    await page.getByText('All', { exact: true }).click();
    await page.getByRole('button', { name: 'Add Package' }).click();

  
});