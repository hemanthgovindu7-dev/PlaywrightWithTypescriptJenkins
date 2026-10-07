//import playwright module
import {test, expect} from '@playwright/test'
//write a test
test('My first TypeScript playwright test', async({page})=>{
    // go to url
    console.log(`Testing watch mode(for continuous run on test edit and save)`)
    await page.goto('https://www.github.com')
    await expect(page.getByRole('heading', { name: 'The future of building' })).toBeVisible();
    await page.goto('https://github.com/');
    await expect(page.getByText('Tools and trends evolve, but')).toBeVisible();    
    await expect(page.locator('#hero')).toContainText('Sign up for GitHub');
})
