import { test, expect} from '@playwright/test';

test('Hidden Item test in DropDown2', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//select[@id='country']").click();
    await page.waitForTimeout(3000);
    const options =await page.$$('//select[@id="country"]//option');
    //const count = await options.count();
    //console.log(`Number of options: ${count}`);
     for ( let option of options){
        const listCountry= await option.textContent();
        console.log(listCountry);
        if( listCountry && listCountry?.includes('Australia')){
            await page.selectOption('#country', {label: 'Australia'});
            await page.waitForTimeout(2000);
           return;
        }
     }
     await page.waitForTimeout(3000);
})
