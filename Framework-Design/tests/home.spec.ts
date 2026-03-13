import test, { expect } from "@playwright/test"
import { HomePage } from "../pages/home.page"
import { LoginPage } from "../pages/login.page"





test.beforeEach("Navigate to Product Page", async ({ page }) => {

    await page.goto('https://playground.bsparksoftwaretechnologies.com/login')

    const loginPageObj = new LoginPage(page)
    await loginPageObj.enterEmail("jhon1@gmail.com")
    await loginPageObj.enterPassword("test@123")
    await loginPageObj.clickLoginButton()

})

test("Should navigate to the user page by clicking the user option",async({page})=>{
        const homePageObj = new HomePage(page)
        await homePageObj.clickUser()
        expect(page.url()).toMatch("https://playground.bsparksoftwaretechnologies.com/users")
})

test("Should navigate to the product page by clicking the product option",async({page})=>{
        const homePageObj = new HomePage(page)
        await homePageObj.clickProduct()
        expect(page.url()).toMatch("https://playground.bsparksoftwaretechnologies.com/products")
})