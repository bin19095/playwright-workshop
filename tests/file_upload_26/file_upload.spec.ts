import { test, expect } from '@playwright/test';

test('Single file upload test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const singleFileInput = await page.locator("#singleFileInput");
    await singleFileInput.scrollIntoViewIfNeeded();
    
    await singleFileInput.setInputFiles('tests/test_file/file_1.pdf');
    await page.waitForTimeout(5000);

})

test.only('Multiple Files test', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await page.locator('#multipleFilesInput').setInputFiles(['tests/test_file/file_1.pdf', 
        'tests/test_file/file_2.pdf']);
    await page.waitForTimeout(5000);
    await page.locator('//*[@id="multipleFilesForm"]/button').click();
    const multipleFilesStatus = await page.locator('#multipleFilesStatus').innerText();
    expect(multipleFilesStatus).toContain('file_1.pdf');
    expect(multipleFilesStatus).toContain('file_2.pdf');

    //Remvoing files
    await page.locator('#multipleFilesInput').setInputFiles([]);
    await page.waitForTimeout(5000);
    await page.locator('//*[@id="multipleFilesForm"]/button').click();

    expect(await page.locator('#multipleFilesStatus').innerText()).toContain('No files selected.');


})
