import { test, expect } from '@playwright/test';

test('Mouse actions spec test', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');
 //left button click
 //await page.getByRole('link',{name:'Draggable'}).first().click({button:'left'})
 //right button click
 //await page.getByRole('link',{name:'Draggable'}).first().click({button:'right'})
 //middle button click
 //await page.getByRole('link',{name:'Draggable'}).first().click({button:'middle'})
 //hover
 //await page.getByRole('link',{name:'Demos'}).hover();
 //double click
 await page.getByRole('link',{name:'Demos'}).dblclick();
});