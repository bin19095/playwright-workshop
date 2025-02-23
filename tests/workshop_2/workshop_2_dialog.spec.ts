import { expect, test } from '@playwright/test';

test('Automation form submission', async ({page}) => {
 //   await page.goto('https://eviltester.github.io/simpletodolist/todolists.html');
//    const newTodo = await page.getByPlaceholder('Enter new todo list name here');
//     await newTodo.fill('JohnTest');
//     await newTodo.press('Enter');
//     await newTodo.fill('JJDoe');
//     await newTodo.press('Enter');
//     await page.waitForTimeout(3000);

  await page.goto('https://eviltester.github.io/simpletodolist/todolists.html');
  const inputArea = await page.getByRole('textbox', { name: 'Enter new todo list name here' })
    await inputArea.click();
    await inputArea.fill('test1');
    await inputArea.press('Enter');
    await inputArea.click();
    await inputArea.fill('test2');
    await inputArea.press('Enter');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
      await page.getByRole('listitem').filter({ hasText: '[use] test2' }).getByRole('button').click();
    
//     const firstTodo = await page.locator('.todo-list-list').nth(0);
//     await expect(firstTodo).toContainText('John Test');
//    // await firstTodo.getByRole('checkbox').check();

//     const secondTodo = await page.getByTestId('todo-item').nth(1);
//     await expect(secondTodo).toContainText('JJ Doe');
    //await expect(secondTodo).not.toHaveClass('completed');
    //await expect(firstTodo).not.toHaveClass('completed');
})
