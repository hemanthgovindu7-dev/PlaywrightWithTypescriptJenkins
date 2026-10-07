import { test, expect } from '@playwright/test';

//Verifying html, json, junit, list and dot style reports,add it in the config file report section()
test.describe('SmokeTests',()=>{
  test('JsonReport spec test1', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
});
})

test.describe('RegressionTests',()=>{
test('JsonReport spec test2', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
});
test('JsonReport spec test3', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
});
test('JsonReport spec test4', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  //Visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Searchxxx',{exact:true}).first()).toBeVisible();
  
});
})

