import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json'
type TestData={
    TestDataSet1:{
        Skill1:String,
        Skill2:String
    },
    TestDataSet2:{
        Skill1:String,
        Skill2:String
    }
}
const typedTestData= testData as TestData;
for (const dataSetName in typedTestData) {  
    const skill= typedTestData[dataSetName as keyof TestData];    
  test(`Data driven testing using JSON file:${skill.Skill1}`, async ({ page }) => {
  await page.goto(`${process.env.Google_URL}`);
 await page.getByLabel('Search',{exact:true}).first().click();
  await page.getByLabel('Search',{exact:true}).first().fill(skill.Skill1.toString())
  await page.getByLabel('Search',{exact:true}).first().press('Enter');
});
}


