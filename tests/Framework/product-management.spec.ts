import {test,expect} from "@playwright/test"

test.beforeEach("Login to the application",async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/login")
    await page.getByPlaceholder("Email").fill("shivya@example.com")
    await page.getByPlaceholder("Password").fill("123")
    await page.getByRole("button",{name:"Login"}).click()
    await page.getByRole('heading', { name: 'Products' }).click()
})
test("Should able to create the product",async({page})=>{
    await page.getByRole("button",{name:"+ Create Product"}).click()
    await page.getByPlaceholder("Product ID").fill("1001")
    await page.getByPlaceholder("Product Name").fill("Puma Shoes")
    await page.getByPlaceholder("Product Description").fill("Discounted Price")
    await page.getByPlaceholder("Product Price").fill("1500")
    await page.locator('//select[@name="color"]').selectOption("Blue")
    await page.getByRole("checkbox",{name:"active"}).click()
    await page.getByRole("button",{name:"Save"}).click()
    await page.waitForTimeout(5000)
})

test("Validate whether the created product were listed on the product listing table using product ID",async({page})=>{
const nextButton = page.getByRole('button', { name: 'Next' })
while (!(await page.getByRole('button', { name: 'Next' }).isDisabled())) {

    const ids = await page.locator('//table//tbody//tr//td[2]').allTextContents()

    if (ids.includes("1001")) {
        console.log("Product Found")
        break
    }

    await page.getByRole('button', { name: 'Next' }).click()
}

})