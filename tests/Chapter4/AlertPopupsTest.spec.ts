import { test, expect } from '@playwright/test';

test(`Alert popups test`, async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')  
   page.once('dialog',dialog=>{
    console.log(`Dialog type is: ${dialog.type()}`);  
    dialog.accept();
    console.log(`Alert message is: ${dialog.message()}`)
  })
  await page.getByText('See an example alert',{exact:true}).click(); 
});

test(`Alert popups test 2`, async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')  
   page.once('dialog',dialog=>{
    console.log(`Dialog type is: ${dialog.type()}`);
    dialog.dismiss();
    console.log(`Alert message is: ${dialog.message()}`)
  })
  await page.getByText('See a sample confirm',{exact:true}).click(); 
});

test(`Prompt popups test`, async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')  
   page.once('dialog',async(dialog)=>{
    console.log(`Dialog type is: ${dialog.type()}`);    
    console.log(`Alert message is: ${dialog.message()}`);
    await page.waitForTimeout(5000);
    await dialog.accept('playwright');
    //await page.waitForTimeout(5000);
  })
  await page.getByText('See a sample prompt',{exact:true}).click(); 
});

