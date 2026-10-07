//import playwright module
import {test, expect} from '@playwright/test'
test.beforeAll(async()=>{
    console.log(`Running Before All tests....`)
})
test.beforeEach(async({page})=>{
    await page.goto('https://www.github.com')
    console.log(`Running Before Each tests....`)
})
test.afterEach(async()=>{
    console.log(`Running After Each tests....`)
})
test.afterAll(async()=>{
    console.log(`Running After All tests....`)
})
//write a test
test('Hooks test 1', async({page})=>{
    console.log(`Test1 execution started...`)
    // go to url
    //await page.goto('https://www.github.com')
    await expect(page.getByRole('heading', { name: 'The future of building' })).toBeVisible();
})
test('Hooks test 2', async({page})=>{
        console.log(`Test2 execution started...`)

    // go to url
    //await page.goto('https://www.github.com')
    await expect(page.getByRole('heading', { name: 'The future of building' })).toBeVisible();
})
