import { test, expect } from '@playwright/test';


let page;

test.beforeEach(async(  {browser}) => {
    page=await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html');
    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavnol');
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click();

    //


    

});
test.afterEach( async() =>{
        //logOut
        await page.locator('#logout2').click();
})

test('Home page test',(async() =>{
        //Home Page\
        await page.waitForTimeout(3000);
        await page.waitForSelector('.hrefch'); // Wait for products to be loaded
        const productsCount = await page.$$('.hrefch');
        expect(productsCount).toHaveLength(9);
}))

test('Add product to cart', async() =>{
 

    //Add Product to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();
    page.on('dialog', async dialog=> {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
    
   
})
