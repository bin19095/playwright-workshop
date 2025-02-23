import { test } from '@playwright/test';

test('Keyboard Actions',async({page}) =>{
    await page.goto('');
    await page.type('name="text1', 'welcome to automation');
    //Ctrl + A Select the text
    await page.keyboard.press('Meta + A')

    //Ctrl + C - copy the text
    await page.keyboard.press('Meta+C');

    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    
    await page.keyboard.press('Meta+V')

    await page.waitForTimeout(5000);
})
