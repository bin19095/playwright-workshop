import { test, expect } from "@playwright/test";
interface Testdata{
    firstName: string,
    lastName: string,
    address: string,
    number: string,
}

const testData: Testdata = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    number: '87654',
}

// test.use({
//     viewport: { width: 1280, height: 800 },
// });
test.describe('User Registration Test', () =>{
    test.beforeEach(async ({page}) =>{ 
        await page.goto('http://127.0.0.1:5500/tests/workshop_6/index.html')
    })
    test.skip('Register with valid data', async({page}) =>{
        await page.goto('http://127.0.0.1:5500/tests/workshop_6/index.html');
        await page.fill('#firstName', testData.firstName );
        await page.fill('#lastName', testData.lastName);
        await page.fill('#address', testData.address);
        await page.fill('#number', testData.number);
        await page.click('#register');
        
        const firstNameText = await page.locator('#displayFirstName').textContent();
        const lastNameText = await page.locator('#displayLastName').textContent();
        const addressText = await page.locator('#displayAddress').textContent();
        const numberText = await page.locator('#displayNumber').textContent();
        await page.waitForTimeout(3000);
        await expect(firstNameText).toEqual(testData.firstName);
        await expect(lastNameText).toEqual(testData.lastName);
        await expect(addressText).toEqual(testData.address);
        await expect(numberText).toEqual(testData.number);
        
        
        

        


    });

    test.only('Register with empty fields', async ({page}) =>{
       // await page.goto('http://127.0.0.1:5500/tests/workshop_6/index.html');
        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);
        await page.click('#register')
        const error = await page.locator('#error p').textContent()
        expect(error).toBe('Please fill in all fields.')
    })

    test('Register with All empty fields', async ({page}) =>{
        // await page.goto('http://127.0.0.1:5500/tests/workshop_6/index.html');
      
         await page.click('#register')
         const error = await page.locator('#error p').textContent()
         expect(error).toBe('Please fill in all fields.')
     })
})
