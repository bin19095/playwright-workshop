import { test, expect } from '@playwright/test';

test('frames', async({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames');

    const allframes= await page.frames();
    console.log("Number of frames", allframes.length)
    
    //approach1: using name or url
      /*  const frame1=await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame1.html'});
    frame1?.fill('[name="mytext1="]',"Hello");
    await page.waitForTimeout(5000); */
    

    //approach2: using frame locator
   const inputBox= await page.frameLocator("frame[src='frame1.html']").locator("[name='mytext1']");
    await inputBox.fill("Hello");
})
