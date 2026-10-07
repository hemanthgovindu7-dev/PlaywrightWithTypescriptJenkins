import { test, expect } from '@playwright/test';

test('locators spec test', async ({ page }) => {
  await page.goto('https://github.com/bakkappaN/');
  //GetByRole
  //await page.getByRole('link',{name:'Sign in'}).click({force:true});
  //GetByLabel
  //await page.getByLabel('Homepage',{exact:true}).first().click();
  //GetByAltText-for Images
  //await page.getByAltText("View BakkappaN's full-sized avatar").click();
  //GetByTestID- custom(we need to add custom test id attribute in config.ts file)
  // await page.getByTestId('repositories').first().click();
  //GetByText
  await page.getByText('Sign up').click();
});