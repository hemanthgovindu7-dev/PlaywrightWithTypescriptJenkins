//import playwright module
import {test, expect} from '@playwright/test'
//write a test
test('Visual page comparision in playwright', async({page})=>{
    // go to url
    await page.goto('https://www.github.com/login')
    await expect(page).toHaveScreenshot('GithubLoginPage.png');
    await page.locator('#login_field').fill('playwright');
    await expect(page).toHaveScreenshot('GithubLoginPage.png')
})

test('Element Visual comparision in playwright', async({page})=>{
    // go to url
    await page.goto('https://www.github.com/login')
    await expect(page).toHaveScreenshot('GithubLoginPage.png');
    const element=page.locator('[class="authentication-body authentication-body--with-form new-session"]');
    await expect(element).toHaveScreenshot('GithubLoginForm.png')
    await page.locator('#login_field').fill('playwright');
    await expect(element).toHaveScreenshot('GithubLoginForm.png')
})