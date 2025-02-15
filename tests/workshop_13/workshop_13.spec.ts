import { test, expect } from '@playwright/test';

test('testing the locators', async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByRole("textbox").and(page.getByPlaceholder("Username")).fill('standard_user');
    // await page.getByPlaceholder("Username").fill("your_username");
    // await page.getByPlaceholder("Password").fill("your_password");
    await page.getByRole("textbox").and(page.getByPlaceholder('Password')).fill('secret_sauce');
    await page.getByRole('button').click();
    const productItems = page.locator("xpath=(//*[@class='inventory_item'])")
        productItems.filter({ hasText: 'Sauce Labs Bolt T-Shirt'})
        // hasNotText // can append to check text .toHaveText('Sauce Labs Bolt T-Shirt') 
         .getByRole("button",{ name: 'Add to cart'})
         .click();
    await expect(productItems).toHaveCount(6);


})
