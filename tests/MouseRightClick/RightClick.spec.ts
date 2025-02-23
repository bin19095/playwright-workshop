import { test }  from '@playwright/test'   
   
test('Mouse Right Click', async({page}) =>{
    await page.goto('');
    
    const button=await page.locator('//');

    await button.click({button: 'right'	});
    //Double Click
    await button.dblclick();
    //Hover over the button
    await button.hover();
    //Right click and wait for 5 seconds
    
    
    await page.waitForTimeout(5000)
})
