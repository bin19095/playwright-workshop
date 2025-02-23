import { test, expect } from '@playwright/test';

test.only('page screenshot', async({page}) =>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'});
});

test('Full page screenshot', async({page}) =>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Element.png', fullPage:true});
});

test('Element screenshot', async({ page}) =>{
    await page.goto('https://demo.opencart.com/')

    await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path:'tests/screenshots/'+Date.now()+'Element.png'});

})
