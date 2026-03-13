import { playwrightGenerics } from "../utils/playwrightGenerics";
import {Locator, Page} from "@playwright/test"


export class ProductPage extends playwrightGenerics {

    readonly createProductButton: Locator
    readonly ProductIDTextBox: Locator
    readonly productNameTextBox:Locator
    readonly productDescTextBox:Locator
    readonly productPriceTextBox:Locator
    readonly selectColorDropdown:Locator
    readonly activeCheckbox:Locator
    readonly saveButton:Locator
    readonly cancelButton:Locator
    readonly nextButton: Locator
    readonly previousButton: Locator
    readonly getIdFromTable: Locator

    constructor(page:Page){
        super(page)
        this.createProductButton = page.getByRole("button",{name:"+ Create Product"})
        this.ProductIDTextBox = page.getByPlaceholder("Product ID")
        this.productNameTextBox = page.getByPlaceholder("Product Name")
        this.productDescTextBox = page.getByPlaceholder("Product Description")
        this.productPriceTextBox = page.getByPlaceholder("Product Price")
        this.selectColorDropdown = page.locator("select[name=color]")
        this.activeCheckbox = page.locator("input[name=active]")
        this.saveButton = page.locator("button[type=submit]")
        this.cancelButton = page.getByText("Cancel")
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.previousButton = page.getByRole('button', { name: 'Prev' })
        this.getIdFromTable = page.locator('//table//tbody//tr//td[2]')
    }   

    async clickCreateProductButton(){
        await this.clickElement(this.createProductButton)
    }

    async enterProductID(Id:string){
        await this.enterText(this.ProductIDTextBox,Id)
    }

    async enterProductName(name:string){
        await this.enterText(this.productNameTextBox,name)
    }
    async enterProductDescription(description:string){
        await this.enterText(this.productDescTextBox,description)
    }
    async enterProductPrice(price:string){
        await this.enterText(this.productPriceTextBox,price)
    }
    async selectProductColor(color:string){
        await this.selectDropdownByText(this.selectColorDropdown,color)
    }
    async clickCheckbox(){
        await this.checkbox(this.activeCheckbox)
    }
    async clickSaveButton(){
        await this.clickElement(this.saveButton)
    }


async searchProduct(id: string) {
    while (! await this.isElementDisabled(this.nextButton)) {

        const getids = await this.getAllElementText(this.getIdFromTable)

        if (getids.includes(id)) {
            console.log("Product Found")
            return true
        }
        else{
            console.log("Product not found")
        }

        await this.clickElement(this.nextButton)
    }
}

}