import { test, expect } from '@playwright/test';

test('Tags spec test1',{tag:['@SmokeTests']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
});
test('Tags spec test2', {tag:['@SmokeTests','@RegressionTests']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
});
test('Tags spec test3', {tag:['@RegressionTests']},async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  await expect(page.getByPlaceholder('SearchXXX',{exact:true}).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
});