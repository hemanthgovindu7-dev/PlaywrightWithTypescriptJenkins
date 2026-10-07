import { test, expect } from '@playwright/test';
const searchKeywords=['playwright by testers talk','Cypress by testers talk','API Testing by testers talk']
for( const searchKeyword of searchKeywords){
test(`Parameterize spec test ${searchKeyword}`, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword);
  await page.getByRole('button', { name: 'Search', description: 'Search' }).click();  
});
}
