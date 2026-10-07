import { test, expect } from '@playwright/test';

test('Keyboard actions spec test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  //Enter action
  // await page.getByLabel('Search',{exact:true}).first().click();
  // await page.getByLabel('Search',{exact:true}).first().fill('playwright by testers talk')
  // await page.getByLabel('Search',{exact:true}).first().press('Enter');
  //  //Selecting and delting action
  // await page.getByLabel('Search',{exact:true}).first().click();
  // await page.keyboard.press('Control+A');
  // await page.keyboard.press('Delete');
  //Performing Tab and Enter action
  await page.getByLabel('Search',{exact:true}).first().click();
  await page.keyboard.press('Tab+Enter')
  //await page.keyboard.press('Enter');;
});