import { test, expect } from '@playwright/test';

test(`multiple browsers/tabs test`, async ({ page,browser }) => {
  await page.goto('https://www.github.com')
    await expect(page.getByRole('heading', { name: 'The future of building' })).toBeVisible();    
    await expect(page.locator('#hero')).toContainText('Sign up for GitHub');
    //creating new context(browser)
    const context2 = await browser.newContext();
    const page2= await context2.newPage();
    await page2. goto('https://www.github.com')
    await expect(page2.getByRole('heading', { name: 'The future of building' })).toBeVisible();   
    //create new tab in the same browser(context)
    const newTab2= await context2.newPage();
    await newTab2. goto('https://www.github.com')
    await expect(newTab2.getByRole('heading', { name: 'The future of building' })).toBeVisible();   

});

