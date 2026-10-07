import { test, expect } from '@playwright/test';

test(`TextContent and GetAttribute test`, async ({ page }) => {
  await page.goto(`${process.env.Google_URL}`);
 await page.getByLabel('Search',{exact:true}).first().click();
  await page.getByLabel('Search',{exact:true}).first().fill('playwright by testers talk')
  await page.getByLabel('Search',{exact:true}).first().press('Enter');
});

