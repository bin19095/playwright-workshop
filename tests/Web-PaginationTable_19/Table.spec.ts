import { test, expect, Page, Locator } from '@playwright/test';

interface TableData {
    columns: Locator;
    rows: Locator;
}

interface ProductSelector {
    rows: Locator;
    page: Page;
    name: string;
}

async function getTableChildCount(page: Page): Promise<TableData> {
    const table = await page.locator('#productTable');
    return {
        columns: await table.locator('thead tr th'),
        rows: await table.locator('tbody tr')
    };
}

async function selectProduct({ rows, page, name }: ProductSelector): Promise<void> {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    });
    await matchedRow.locator('input').check();
}

test("handling table", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    const { columns, rows } = await getTableChildCount(page);

    // total number of rows & columns
    console.log('Number of columns:', await columns.count());
    expect(await columns.count()).toBe(4);

    console.log('Number of rows:', await rows.count());
    expect(await rows.count()).toBe(5);

    // select multiple products by re-usable function
    await selectProduct({ rows, page, name: 'Smartphone' });
    await selectProduct({ rows, page, name: 'Laptop' });
    await selectProduct({ rows, page, name: 'Tablet' });

    // print all product details using loop
   /* for(let i=0;i< await rows.count();i++){
        const row=rows.nth(i);
        const tds=row.locator('td');
        for(let j=0;j< await tds.count()-1; j++){
           console.log(await tds.nth(j).textContent());
        }
    }*/
   // Read data from all the pages in the table

   const pages = await page.locator('.pagination li a')
        console.log('Number of pages in the table',await pages.count()); 
        const pageCount = await pages.count();
        for(let p=0; p<pageCount; p++){
            if(p>0){
                await pages.nth(p).click();
            }
            for(let i=0;i< await rows.count();i++){
                const row=rows.nth(i);
                const tds=row.locator('td');
                for(let j=0;j< await tds.count()-1; j++){
                   console.log(await tds.nth(j).textContent());
                }
            }
            await page.waitForTimeout(3000);
        }
   await page.waitForTimeout(3000);
});
