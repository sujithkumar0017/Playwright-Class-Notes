import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { ProductPage } from "../pages/product.page";

test.beforeEach("Navigate to Product Page", async ({ page }) => {

    await page.goto('https://playground.bsparksoftwaretechnologies.com/login')

    const loginPageObj = new LoginPage(page)
    const homePageObj = new HomePage(page)
    await loginPageObj.enterEmail("jhon1@gmail.com")
    await loginPageObj.enterPassword("test@123")
    await loginPageObj.clickLoginButton()
    await homePageObj.clickProduct()

})

test("Should able to create the new product with valid data and display on the table", async ({ page }) => {

    const productPageObj = new ProductPage(page)
    await productPageObj.clickCreateProductButton()
    await productPageObj.enterProductID("5001")
    await productPageObj.enterProductName("Adidas")
    await productPageObj.enterProductDescription("This is created for testing")
    await productPageObj.enterProductPrice("10000")
    await productPageObj.selectProductColor("Green")
    await productPageObj.clickCheckbox()
    await productPageObj.clickSaveButton()
    expect(await productPageObj.searchProduct("5001")).toBeTruthy()
    await page.waitForTimeout(4000)

})


test("Should able to edit the product details",async()=>{
    
})

test("should able to delete the product from table",async()=>{

})

test("should display the products according to the selected status", async()=>{
    
})

