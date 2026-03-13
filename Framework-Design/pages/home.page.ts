import {Locator, Page} from "@playwright/test"
import { playwrightGenerics } from "../utils/playwrightGenerics";



export class HomePage extends playwrightGenerics{

    readonly productElement: Locator
    readonly userElement: Locator


    constructor(page:Page){
        super(page)
        this.productElement = page.getByText("Products").first()
        this.userElement = page.locator('//h2[text()="Users"]')   
    }

    async clickUser(){
        await this.clickElement(this.userElement)
    }
    async clickProduct(){
        await this.clickElement(this.productElement)
    }
}