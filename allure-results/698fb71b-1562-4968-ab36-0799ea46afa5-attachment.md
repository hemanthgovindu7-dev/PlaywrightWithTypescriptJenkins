# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter3\TagsTest.spec.ts >> Tags spec test3
- Location: tests\Chapter3\TagsTest.spec.ts:19:5

# Error details

```
Error: expect(locator).toBeEnabled() failed

Locator: getByPlaceholder('SearchXXX', { exact: true }).first()
Expected: enabled
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeEnabled" getByPlaceholder('SearchXXX', { exact: true }).first() with timeout 10000ms
  - waiting for getByPlaceholder('SearchXXX', { exact: true }).first()

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
  3  | test('Tags spec test1',{tag:['@SmokeTests']}, async ({ page }) => {
  4  |   await page.goto('https://www.youtube.com/');
  5  |   //Visible, editable, enabled, empty
  6  |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  7  |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  8  |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  9  |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
  10 | });
  11 | test('Tags spec test2', {tag:['@SmokeTests','@RegressionTests']}, async ({ page }) => {
  12 |   await page.goto('https://www.youtube.com/');
  13 |   //Visible, editable, enabled, empty
  14 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  15 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
  16 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
  17 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
  18 | });
  19 | test('Tags spec test3', {tag:['@RegressionTests']},async ({ page }) => {
  20 |   await page.goto('https://www.youtube.com/');
  21 |   //Visible, editable, enabled, empty
  22 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
  23 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
> 24 |   await expect(page.getByPlaceholder('SearchXXX',{exact:true}).first()).toBeEnabled();
     |                                                                         ^ Error: expect(locator).toBeEnabled() failed
  25 |   await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();
  26 | });
```