import { test, expect } from "@playwright/test"

test('Advanced Interactions', async({page}) =>{
    await page.goto('https://u2zm41.csb.app/');
    await page.getByRole('link', { name: 'Yes, proceed to preview' }).click();
    await page.waitForTimeout(3000);
    const source = page.locator('//div[@id="1"]');
    await expect(source).toHaveCount(1);
    const target = page.locator('//div[@class="pending small-box"]//div[@class="drag_column"]') 
    ////div[@class='pending small-box']//div[@class='drag_column']
    //.filter({ has: page.getByRole('button',{ name: "+"})})
    // //*[@id="root"]/div/div/div[1]/section/div/div //div[@class='order small-box']//div[@class='drag_column']
    const sourceHandle = await source.elementHandle();
    const targetHandle = await target.elementHandle();
    if (sourceHandle && targetHandle) {
    await page.evaluate(async ({ source, target }) => {
        const dataTransfer = new DataTransfer();
        
            source.dispatchEvent(new DragEvent('dragstart', { dataTransfer }));
            target.dispatchEvent(new DragEvent('drop', { dataTransfer }));
            source.dispatchEvent(new DragEvent('dragend', { dataTransfer }));
        
    }, { source: sourceHandle, target: targetHandle })
};
    
    // const eleLocator = page.locator('//div[@id="1"]');
    // const elementExists = await eleLocator.isVisible();
    // expect(elementExists).toBe(true);
//div[class='pending small-box'] div[class='drag_row']
    //const elementLocator = page.locator('//div[@id="1"]');
    await expect(source).toHaveCount(1);
    const elementLocator = page.locator("//div[@class='pending small-box']//div[@class='drag_row']//div[@class='card']")
    console.log(elementLocator,"electLocator") 
    const check = elementLocator.count();
    console.log("checking", check)
    await expect(elementLocator).toHaveCount(2)
    // const nextSiblingLocator =  elementLocator.locator('');

    // const nextSiblingId = await nextSiblingLocator.getAttribute('id');
    // expect(nextSiblingId).toBe('2')
    
   
    
    //div[@class='pending small-box']//div[@class='drag_column']

})
