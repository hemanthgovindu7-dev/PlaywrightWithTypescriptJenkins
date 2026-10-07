import { test, expect } from '@playwright/test';

test('locators spec test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByText('Create new account').click();
  //select dropdown using value
  await page.getByLabel('Month').selectOption('3')
  //select dropdown using visible text
  await page.getByLabel('Month').selectOption('Oct')
});