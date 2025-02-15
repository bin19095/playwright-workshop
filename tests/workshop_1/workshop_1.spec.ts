import {test, expect} from 'playwright/test';

test('Basic Navigation', async ( {page} ) =>{
    await page.goto('https://gitlab.com/');
    await page.waitForTimeout(5000);
    await page.reload();
})
test.skip('Interacting with web element on  Github', async ( {page} ) =>{
    await page.goto('https://gitlab.com/');
    await page.click('a[href="https://gitlab.com/-/trial_registrations/new?glm_source=about.gitlab.com/&glm_content=default-saas-trial"]:has-text("Get free trial")');
    //await page.locator('a.slp-btn.slp-btn-primary:has-text("Get free trial")').click();
    // const freeTrialButton = await page.locator('[data-nav="free trial"]:has-text("Get free trial")');
    // await freeTrialButton.waitFor();
    // await freeTrialButton.click();
    //await page.getByRole('link', { name: 'Get free trial' }).click();
    // await page.locator('[data-nav="free trial"]').filter({ hasText: 'Get free trial' }).click();
    //await page.locator('a[contains(text(), "Get free trial")]').click();
    await page.locator('[data-testid="new-user-first-name-field"]').fill('John1');
    await page.locator('[data-testid="new-user-last-name-field"]').fill('Test');
    


})

test.only('Using Various Locator Methods', async ({page}) =>{
    await page.setViewportSize({ width: 900, height: 800 });
    await page.goto("https://gitlab.com");
    
    const menu =  page.locator( 'button[aria-label="Main menu"]').first();
    await menu.waitFor({ state: 'visible', timeout: 10000 });
    console.log('Is mobile menu visible:', await menu.isVisible());
    console.log('Mobile menu bounding box:', await menu.boundingBox())
    // await expect(menu).toBeVisible();
     await menu.click();
    // console.log('ignoring browser view');
    //  const mainMenu = page.locator('button[aria-label="Main menu"]').last();
    //  console.log('Is browser menu visible:', await mainMenu.isVisible());
    //  console.log('Mobile menu bounding box:', await mainMenu.boundingBox())
    //  await mainMenu.waitFor({ state: 'visible', timeout: 5000 });
 
    //  // Click the main menu
    //  await mainMenu.click();
   
    //For SignIn
    //"Sign in"
    await page.locator('role=link[name="Sign in"]').click();
})
