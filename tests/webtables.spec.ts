import {test,expect} from '@playwright/test'

test("Get all the data from the table",async ({page})=>{

    await page.goto("/webtable");

    const table = page.locator('//table[@id="webtable"]/tbody')
    const rows = table.locator('tr')
    for(let i=0; i< await rows.count();i++)
    {
        const cells = rows.nth(i).locator("td")

        for(let j=0;j< await cells.count();j++){

            const ColumnData = await cells.nth(j).textContent()
            console.log(ColumnData)
        }
    }

})

test("Select HR and Tech Support only", async({page})=>{

    test.slow()
    const table = page.locator('//table[@id="webtable"]/tbody')
    const rows = table.locator('tr')
    for(let i=0; i< await rows.count();i++)
    {
        const size = i +1
        const isActiveEle = page.locator("(//input[@name='active'])["+size+"]")
        const cells = rows.nth(i).locator("td")

        for(let j=0;j< await cells.count();j++){

            const ColumnData = await cells.nth(j).textContent()
            if (ColumnData == "HR" || ColumnData == "TECH SUPPORT"){
                isActiveEle.click()
            }
            console.log(ColumnData)
        }

    
    }

})




//1. Filter record with roles dropdown value 
//2. Search email and verify respective data is displayed.
//3. Search with invalid data and verify no record found msg.
//4. Get the ID and verify if the sorting is working as expected.


test("Should display the values based on the selected roles",async({page})=>{

    await page.goto("/webtable")

    const roles = ["ADMIN","TECH SUPPORT","HR"]

    ////th[text()="JOB ROLE"]//following::tr//td[3]

    for(let i = 0; i<roles.length;i++){
        await page.locator("//select").selectOption(roles[i])
        const validate_role = page.locator('//table[@id="webtable"]//tbody//tr//td[3]')
        for(let j=0; j< await validate_role.count();j++){
            const getRole = await validate_role.nth(j).textContent()
            console.log("True", roles [i],getRole)
            expect((getRole)).toBe(roles[i])
        }     
        
    }
})


test("Should fetch the correct user details entering vaild email using search functionality",async({page})=>{
    
    await page.goto("/webtable")

    const email =["BALAJI@BSPARK.COM","SARAN@BSPARK.COM","BHUVAN@BSPARK.COM"]

    const validateData = page.locator('//table[@id="webtable"]//tbody//tr//td[6]') 

    for(let i=0;i<email.length;i++){
        await page.getByPlaceholder("Search Name or Email").fill(email[i])
        console.log(email[i])
        for(let j=0; j< await validateData.count(); j++){
            const getDetails = await validateData.nth(j).textContent()
            console.log("true")
            expect((getDetails)).toBe(email[i])
    }
    await page.waitForTimeout(3000)

    }
})


test("Should display record not found text if try to search with invalid user email",async({page})=>{

    await page.goto("/webtable")
    const email = "balaji@yopmail.com"
    await page.getByPlaceholder("Search Name or Email").fill(email)
    await expect(page.locator('//td[contains(text(),"No records found")]')).toContainText("No records found")    
})

test.only("Should work the sorting using id as expected",async({page})=>{

    await page.goto("/webtable")
    const getValues = await page.locator('//table[@id="webtable"]//tbody//tr//td[1]').allTextContents()
    const actualValues = [...getValues].sort()
    console.log(actualValues)
    const sortButton =  page.locator('//button[contains(text(),"Sort by ID ")]')
    await sortButton.click()
    const sortedValues = await page.locator('//table[@id="webtable"]//tbody//tr//td[1]').allTextContents()
    const expectedValues = [...sortedValues]
    console.log(expectedValues)
    expect(expectedValues).toEqual(actualValues)
})