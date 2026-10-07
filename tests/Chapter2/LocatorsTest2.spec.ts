import { test, expect } from '@playwright/test';

test('locators spec test', async ({ page }) => {
await page.goto('https://www.youtube.com/@testerstalk');  
//GetByPlaceholder
// await page.getByPlaceholder('Search').fill('testers talk');
// await page.getByPlaceholder('Search').press('Enter');
//by locator-Xpath
//await page.locator('//input[@name="search_query"]').fill('testers talk')
//by lcator-CSS
await page.locator('input[name="search_query"]').first().fill('testers talk')
});