# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter4\TestReportTest.spec.ts >> RegressionTests >> JsonReport spec test4
- Location: tests\Chapter4\TestReportTest.spec.ts:32:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByPlaceholder('Searchxxx', { exact: true }).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByPlaceholder('Searchxxx', { exact: true }).first() with timeout 10000ms
  - waiting for getByPlaceholder('Searchxxx', { exact: true }).first()

```

```yaml
- banner:
  - button "Guide"
  - link "YouTube Home":
    - /url: /
  - text: IN
  - button "Skip navigation"
  - search:
    - combobox "Search" [expanded]
    - button "Search"
  - button "Search with your voice"
  - tooltip "tooltip"
  - button "Settings"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620
- navigation:
  - link "Home":
    - /url: /
  - link "Shorts":
    - /url: /shorts/
  - link "Subscriptions":
    - /url: /feed/subscriptions
  - link "You":
    - /url: /feed/you
- main:
  - heading "Try searching to get started" [level=2]
  - text: Start watching videos to help us build a feed of videos you'll love.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | //Verifying html, json, junit, list and dot style reports,add it in the config file report section()
  4  | test.describe('SmokeTests',()=>{
  5  |   test('JsonReport spec test1', async ({ page }) => {
  6  |   await page.goto('https://www.youtube.com/');
  7  |   //Visible, editable, enabled, empty
  8  |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  9  |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  10 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  11 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
  12 | });
  13 | })
  14 | 
  15 | test.describe('RegressionTests',()=>{
  16 | test('JsonReport spec test2', async ({ page }) => {
  17 |   await page.goto('https://www.youtube.com/');
  18 |   //Visible, editable, enabled, empty
  19 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  20 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  21 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  22 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
  23 | });
  24 | test('JsonReport spec test3', async ({ page }) => {
  25 |   await page.goto('https://www.youtube.com/');
  26 |   //Visible, editable, enabled, empty
  27 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  28 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  29 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  30 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
  31 | });
  32 | test('JsonReport spec test4', async ({ page }) => {
  33 |   await page.goto('https://www.youtube.com/');
  34 |   //Visible, editable, enabled, empty
> 35 |   await expect(page.getByPlaceholder('Searchxxx',{exact:true}).first()).toBeVisible();
     |                                                                         ^ Error: expect(locator).toBeVisible() failed
  36 |   
  37 | });
  38 | })
  39 | 
  40 | 
```