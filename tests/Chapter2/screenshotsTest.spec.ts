import { test, expect } from '@playwright/test';

test('screenshots spec test', async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk');
  //Element screenshot
  //await page.locator('#page-header-container').screenshot({path:'./screenshots/ElementScreenshot.png'})
    await page.locator('//div[@id="page-header-container"]').screenshot({path:'./screenshots/ElementScreenshot.png'})

  //Page screenshot
  await page.screenshot({path:'./screenshots/PageScreenshot.png'})

  //Fullpage screenshot
  await page.screenshot({path:'./screenshots/FullfPageScreenshot.png', fullPage:true})
});