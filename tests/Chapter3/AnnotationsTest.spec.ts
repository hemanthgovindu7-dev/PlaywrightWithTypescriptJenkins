import { test, expect } from '@playwright/test';

test.skip('Annotations spec test1', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
});
test('Annotations spec test2', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
});