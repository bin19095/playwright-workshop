import { test, expect } from '@playwright/test';
//not good for parallel tests
var userid;
test('API Get Users', async ({page}) => {
   const response = await page.goto('https://reqres.in/api/users?page=2');
    console.log(await response?.json());
    expect(response?.status()).toBe(200);
})

test("Create user",async({request}) =>{
    
    const response=await request.post('https://reqres.in/api/users',{
        data:{
            "name":"John Doe",
            "job":"Software Engineer"
        },
        headers:{
        "Content-Type":"application/json"

        }
    });
    console.log(await response?.json())
    expect(response.status()).toBe(201)
    
    var res=await response.json();
    userid=res.id;
    console.log("UserID=>",userid);
})
test("Update user", async({request}) => {
    const response= await request.put('https://reqres.in/api/users/'+userid,
        {
            data:{"name": "John Doe","job":"engineer"},
            headers:{ "Content-Type":"application/json"
            }
        });
    console.log(await response?.json());
    expect(response.status()).toBe(200);

})

test("Delete user", async({request}) => {
    const response=await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204);
});
