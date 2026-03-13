import {Locator, Page} from "@playwright/test"
import { playwrightGenerics } from "../utils/playwrightGenerics";



export class LoginPage extends playwrightGenerics {

    readonly emailTextBox: Locator
    readonly passwordTextBox: Locator
    readonly loginButton: Locator
    readonly errorToast: Locator
    readonly validateText: Locator
  
   

    constructor(page:Page){
        super(page);
        this.emailTextBox = page.locator("#username")
        this.passwordTextBox = page.locator("#pwd")
        this.loginButton = page.getByText("Login").last()
        this.errorToast = page.locator(".error")
        this.validateText = page.locator('//h1[@class="ProductDashboard_title__4WeLw"][1]')

    }

    async enterEmail(email:string){
        await this.enterText(this.emailTextBox,email)
    }
    async enterPassword(password:string){
        await this.enterText(this.passwordTextBox,password)
    }
    async clickLoginButton(){
        await this.clickElement(this.loginButton)
    }
    async getErrorToast(){
        await this.getElementText(this.errorToast)
    }

    async validateTitle(){
        return await this.getElementText(this.validateText)

    }

}