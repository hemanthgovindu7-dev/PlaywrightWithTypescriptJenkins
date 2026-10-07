//import playwright module
import {test, expect} from '@playwright/test'
//write a test
test('Timeouts in playwright', async({page})=>{
    //test timeout takes precedence over global timeout set in config file
    test.setTimeout(1*30*1000);
    // go to url
    await page.goto('https://www.github123.com/login',{timeout:5000})    
    await page.locator('#login_field').fill('playwright');  
    //await page.waitForTimeout(30000);        
    await expect(page.locator('#hero')).toContainText('Sign up for GitHub',{timeout:5000});  
})