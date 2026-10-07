import { test, expect } from '@playwright/test';

test('locators spec test', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');
 //drag/drop element
 const iframe= page.frameLocator('[class="demo-frame"]');
 const dragElement= iframe.locator('[id="draggable"]');
 const dropElement= iframe.locator('[id="droppable"]');
 await dragElement.dragTo(dropElement)
});