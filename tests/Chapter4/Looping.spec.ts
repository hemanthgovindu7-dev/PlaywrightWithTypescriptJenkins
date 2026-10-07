import { test, expect } from '@playwright/test';

test(`Iterating matching elements test`, async ({ page }) => {
  await page.goto('https://github.com/bakkappaN/');
  //to identify al the matching eleemts using $$
  const repolinks= await page.$$('.repo');
  for (const repolink of repolinks) {
    const text = await repolink.textContent();
    console.log(`repo link from for of loop : ${text}`)
  }
  console.log('=============================================')
  for (let index = 0; index < repolinks.length; index++) {
    const text = await repolinks[index].textContent();
    console.log(`repo link from for loop : ${text}`)
  }
   console.log('=============================================')
   const repolinks2= await page.locator('.repo');
   const count=await repolinks2.count();
  for (let index = 0; index < count; index++) {
    const text = await repolinks2.nth(index).textContent();
    console.log(`repo link from for loop nth method : ${text}`)
  }
});

