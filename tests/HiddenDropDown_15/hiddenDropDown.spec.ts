
import { test, expect} from '@playwright/test';


test('Hidden Item test in DropDown', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//select[@id='country']").click();
    await page.waitForTimeout(3000);
    
    const containsAustralia = await page.evaluate(() => {
        const options = Array.from(document.querySelectorAll('#country option'));
        return options.some(option => option.textContent && option.textContent.includes('Australia'));
    });

    console.log(`Dropdown contains 'Australia': ${containsAustralia}`);
    
    if (containsAustralia) {
        await page.selectOption('#country', { label: 'Australia' });
    }

    await page.waitForTimeout(3000);
});
