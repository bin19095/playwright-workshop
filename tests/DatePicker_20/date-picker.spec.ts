import {test, expect} from '@playwright/test';

test("Date Picker", async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.fill('#datepicker', '03/15/2024')
    //dat picker
    const year ="2025";
    const month="March";
    const date="20";

    // await page.locator("#datepicker").click();
    
    await page.click('#datepicker')
    while(true){
    const currentYear = await page.locator('.ui-datepicker-year').textContent()
    const currentMonth = await page.locator('.ui-datepicker-month').textContent()
    if(currentYear == year && currentMonth == month){
        
        break;
    }   
    await page.locator('[title="Next"]').click(); 
    //await page.locator('[title="Prev"]').click(); 
    }
    //date selection using loop
    // const dates=await page.$$("//a[@class='ui-state-default']")
    // for(const dt of dates){
    //     if(await dt.textContent()==date){
    //         await dt.click();
    //         break;
    //     }
    // }
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    await page.waitForTimeout(3000);

});
