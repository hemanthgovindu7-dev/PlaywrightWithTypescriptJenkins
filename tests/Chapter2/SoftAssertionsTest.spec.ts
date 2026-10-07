import { test, expect } from '@playwright/test';

test('Soft Assertions spec test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
// verify url, title, text, count
await page.getByPlaceholder('Search',{exact:true}).first().click();
await page.getByPlaceholder('Search',{exact:true}).first().fill('playwright by testers talk')
await page.getByPlaceholder('Search',{exact:true}).first().press('Enter')
await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk')
await expect.soft(page).toHaveTitle('playwright by testers talk - YouTube-xxxxx')
//after failing the above line, with hard assertions the below 2 lines wont get executed, but with soft assetions,below 2 lines will execute
await expect(page.locator('span[id="video-count"]').first()).toHaveText('31.4K subscribers')
await expect(page.locator('span[id="video-count"]')).toHaveCount(1)
});