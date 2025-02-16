        import { test, expect } from "@playwright/test"

        test.describe('Advanced Interactions',() => { 
            test.beforeEach(async({page}) =>{
            await page.goto('https://u2zm41.csb.app/');
            await page.getByRole('link', { name: 'Yes, proceed to preview' }).click();
          
            });
            test.describe('drag to drop in progress category', () =>{
                test.beforeEach( async ({ page}) =>{
                    const source = page.locator('//div[@id="1"]');
                    const target = page.locator('//div[@class="pending small-box"]//div[@class="drag_column"]') 

                    await expect(source).toHaveCount(1);
                    await source.hover();
                    await page.mouse.down();
                    const sourceBoundingBox = await target.boundingBox();
                    if( sourceBoundingBox){
                        await page.mouse.move( 
                            sourceBoundingBox.x + sourceBoundingBox.width / 2,
                            sourceBoundingBox.y + sourceBoundingBox.height / 2
                        );
                    }
                    await page.mouse.up();
                    await page.waitForTimeout(10000);

                   
                });
                test('3 items should be visible/ in count in progress list', async({page}) =>{
                    const elementLocator = page.locator("//div[@class='pending small-box']//div[@class='drag_row']//div[@class='card']")
                    console.log(elementLocator,"electLocator") 
                    const check = elementLocator.count();
                    
                    await expect(elementLocator).toHaveCount(3)
                });
            });
        });
            ////div[@class='pending small-box']//div[@class='drag_column']
            //.filter({ has: page.getByRole('button',{ name: "+"})})
            // //*[@id="root"]/div/div/div[1]/section/div/div //div[@class='order small-box']//div[@class='drag_column']
        
            
        
           
            // const nextSiblingLocator =  elementLocator.locator('');

            // const nextSiblingId = await nextSiblingLocator.getAttribute('id');
            // expect(nextSiblingId).toBe('2')
            
        
            
            //div[@class='pending small-box']//div[@class='drag_column']
