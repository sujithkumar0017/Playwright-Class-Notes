import {test} from '@playwright/test';



test("Should display a validate error toast for first name field left empty", async({page})=>{
    await page.goto('/');
    await page.locator('.Home_title__ANWNn').first().click();
    await page.locator("//span[text()='FORM VALIDATION']").click()
    await page.locator("#bst_007").click()
    const message = await page.locator('//p[contains(text(),"First name is required")]').textContent();
    if (message == "First name is required"){
        console.log("True")
    }
    else{
        console.log("False")
    }
    console.log(message)
})

test("Should display the correct placeholder each input field", async({page})=>{
    await page.goto("/")
    await page.locator('.Home_title__ANWNn').first().click();
    await page.locator("//span[text()='FORM VALIDATION']").click()
    const firstname = await page.locator("#bst_001").getAttribute("placeholder")
    console.log(firstname)
    const lastname = await page.locator("#bst_002").getAttribute("placeholder")
    console.log(lastname)
    const email = await page.locator("#bst_004").getAttribute("placeholder")
    console.log(email)
    const phone_number = await page.locator("#bst_005").getAttribute("placeholder")
    console.log(phone_number)
    const password = await page.locator("#bst_006").getAttribute("placeholder")
    console.log(password)
})

test('Should able to enter valid data and submit the form successfully', async({page})=>{
    await page.goto("/")
    await page.locator('.Home_title__ANWNn').first().click();
    await page.locator("//span[text()='FORM VALIDATION']").click()
    await page.locator("#bst_001").fill("sujith")
    await page.locator("#bst_002").fill("Kumar")
    await page.locator("#day").selectOption({value:"10"})
    await page.locator("#month").selectOption({label:"Mar"})
    await page.locator("#year").selectOption({index:2})
    await page.locator("#male").click()
    await page.locator("#bst_004").fill("sujith@yopmail.com")
    await page.locator("#bst_005").fill("930303030")
    await page.locator("#bst_006").fill("123@asAS")
    await page.locator("#bst_007").click()
    await page.waitForTimeout(2000);
});


