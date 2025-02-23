import { expect, test} from '@playwright/test';
 // //https://gj3d5w-3001.csb.app/
test.describe('When the user visits the page', () =>{
    test.beforeEach( async ({page}) => {
        await page.goto('http://localhost:5173/')
       
    });
    test.describe('and creates a new task', () => {
        let taskName: string;
        
        test.beforeEach(async ({ page }) => { 
            taskName = 'Buy Milk';
            const input = page.getByPlaceholder('Add new item');
            await input.fill(taskName);
            await page.getByRole('button',{name: 'Add'}).click();
        });
    
    test.describe('and drags the task to the completed-list', () =>{
        test.beforeEach(async ({page}) => {
            const newTask = page.getByText(taskName);
            const completedList = page.getByTestId('completed-list');
            //Perform the drag operation
            await newTask.hover();
            await page.mouse.down();
            const completedListBoundingBox = await completedList.boundingBox();

            if( completedListBoundingBox){
            await page.mouse.move(

                completedListBoundingBox.x + completedListBoundingBox.width / 2,
                completedListBoundingBox.y + completedListBoundingBox.height / 2
                );
            }
            //await newTask.dragTo(completedList);
               await page.mouse.up();
               await page.waitForTimeout(10000);     
        });
            test('the task should be visible on the completed list', async ({page}) =>{
                const completedList = page.getByTestId('completed-list');
                const newTask = completedList.getByText(taskName);            
                
                await expect(newTask).toBeVisible({timeout: 10000});
            });
            test('the task should be visible on the to-do list', async({page}) =>{
                const completedList = page.getByTestId('to-do-list');
                const newTask = completedList.getByText(taskName);
                await expect(newTask).not.toBeVisible({timeout: 10000});
            });
        });
    });
});
