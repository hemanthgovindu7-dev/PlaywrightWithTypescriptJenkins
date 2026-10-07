import { test, expect } from '@playwright/test';

test(`TextContent and GetAttribute test`, async ({ page }) => {
  await page.goto('https://github.com/bakkappaN/');
  const name= await page.locator('[itemprop="name"]').textContent();
  const name1= await page.locator('[itemprop="name"]').innerText();
  console.log(`Name is : ${name?.trim()}`)
  console.log(`Name is : ${name1?.trim()}`)
  expect(name?.trim()).toBe('Testers Talk');
    const attValue= await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`Attribute value is: ${attValue}`);
});

