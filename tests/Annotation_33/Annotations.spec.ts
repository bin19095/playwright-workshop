const { test, expect} =require('@playwright/test');

// test('test1', async({page})=>{
//     console.log('this is test1')
// })

// Skip Use
// test('test2', async({page, browserName}) =>{
//     console.log('this is test2')
//     if(browserName==='chromium'){
//         {
//             test.skip()
//         }
//     }
// })


//Fixme similar to skip but useful to skil fnc unless fixed
// test('test4', async({page})=>{
//     test.fixme()
//     console.log('this is test4')
// })

// //Fail
// test('test5', async({page}) =>{
//     test.fail() //expectation
//     console.log('this is test5')
//     expect(1).toBe(1); //action true/passed but results fail
// })

//test.slow()
test('test6', async({page}) =>{
    test.slow() // triple the timeout in config file
    test.setTimeout(2000)
    await page.goto('https://wwww.demoblaze.com/index.html')
    console.log('this is test7....')
})
