import { test ,expect } from '@playwright/test';
import { LoginPage } from '../page/LoginPage';
import { HomePage } from '../page/HomePage';
import { CartPage } from '../page/CartPage';	
test('test', async ({ page }) =>{
    /*/ await page.goto('https://www.demoblaze.com/index.html');
    // await page.locator('#login2').click();
    // await page.locator('#loginusername').fill('pavanol');
    // await page.locator('#loginpassword').fill('test@123');
    / await page.locator('//button[normalize-space()="Log in"]').click();
    */

    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(3000);


    //Home
    const home=new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotoCart();

    //Cart
    const cart=new CartPage(page);
    await page.waitForTimeout(3000);
    const status=await cart.checkProductInCart('Nexus 6');
    expect(await status).toBe(true);
});
