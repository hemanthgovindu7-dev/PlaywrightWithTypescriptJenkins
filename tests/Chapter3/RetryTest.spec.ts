import { test, expect } from '@playwright/test';

test('Retry spec test2', async ({ page }) => {
  await page.goto('https://www.youtube.com/');  
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  // in the playwrightconfig.ts file, change the retry value to 1/2 instead of 0
  await expect(page.getByPlaceholder('Searchxxx',{exact:true}).first()).toBeEditable();  
});