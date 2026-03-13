import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/login.page"






test("Navigate to Product Page", async ({ page }) => {

    await page.goto('https://playground.bsparksoftwaretechnologies.com/login')

    const loginPageObj = new LoginPage(page)
    await loginPageObj.enterEmail("jhon1@gmail.com")
    await loginPageObj.enterPassword("test@123")
    await loginPageObj.clickLoginButton()
    expect(await loginPageObj.validateTitle()).toBe("Bspark Dashboard")
})