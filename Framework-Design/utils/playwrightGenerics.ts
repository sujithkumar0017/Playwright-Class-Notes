import { Locator, Page, TestInfo } from "@playwright/test";


export class playwrightGenerics
{
    readonly page: Page;
    constructor(page: Page)
    {
        this.page = page
    }

    //Inputbox - type, clear, placeholder, default text
    async enterText(ele: Locator, valueToEnter:string): Promise<void>
    {
        await ele.fill(valueToEnter)
        console.log("Value entered as ", valueToEnter);
    }

    async clearText(ele: Locator): Promise<void>
    {
        await ele.clear()
        console.log("Value Cleared");
    }

    async getAttributeText(ele: Locator, attributeName:string): Promise<string>
    {
       const data = await ele.getAttribute(attributeName)
       console.log("getAttribute of ", attributeName);
       return data || ""
    }

    //Button - click, doubleclick, rightclick

    async clickElement(ele: Locator): Promise<void>
    {
        await ele.click()
        console.log("Element clciked");
    }

    async doubleClickElement(ele:Locator):Promise<void>{
        ele.dblclick()
    }

    async rightClickElement(ele:Locator):Promise<void>{
        ele.click({button:"right"})
    }

    //text - textContent
    async getElementText(ele:Locator): Promise<String>{
        const text = await ele.textContent()
        return text || ""
    }

    async getAllElementText(ele:Locator): Promise<String[]>{
        const alltext = await ele.allTextContents()
        return alltext
    }

    // checkbox
    async checkbox(ele:Locator): Promise<void>{
        await ele.check()
    }
    //dropdown 
    async selectDropdownByText(ele:Locator,value:any): Promise<void>{
        await ele.selectOption(value)
    }

    //frame
    async getIframeLocator(frame:Locator): Promise<Locator>  {
        return frame
     }
    //windowhandling

    //Have some doubt on this method creation.

    //alerts
    async getMessageFromAlert(){
        this.page.once("dialog",async(dialog)=>{
            return dialog.message()
        })
    }
    async acceptTheAlert(): Promise<void>{
        this.page.once("dialog",async(dialog)=>{
            await dialog.accept()
    })
}
    async dismissTheAlert(): Promise<void>{
        this.page.once("dialog",async(dialog)=>{
            await dialog.dismiss()
        })

    }

    //hover
    async hover(ele:Locator): Promise<void>{
        await ele.hover()
    }

    //"visible" | "hidden" | "stable" | "enabled" | "disabled" | "editable

    async isElementVisible(element: Locator): Promise<boolean> {
        return await element.isVisible();
    }

    async isElementHidden(element: Locator): Promise<boolean> {
        return await element.isHidden();
    }

    async isElementEnabled(element: Locator): Promise<boolean> {
        return await element.isEnabled();
    }

    async isElementDisabled(element: Locator): Promise<boolean> {
        return await element.isDisabled();
    }

    async isElementEditable(element: Locator): Promise<boolean> {
        return await element.isEditable();
    }

    //screeshot - ele and page

    async fullPageScreenshot(filename:string): Promise<void>{
        await this.page.screenshot({ path: `screenshots/${filename}.png`, fullPage: true });
    }

    async elementScreenshot(ele:Locator ,filename:string): Promise<void>{
        await ele.screenshot({ path: `screenshots/${filename}.png` });
    }
    
    //browser commands - back, frwd, refresh, close, getTitle, url, navigateTo

    async browserBack(): Promise<void>{
        await this.page.goBack()
    }
    async browserForward(): Promise<void>{
        await this.page.goForward()
    }
    async browserClose(): Promise<void>{
        await this.page.close()
    }
    async pageRefresh(): Promise<void>{
        await this.page.reload()
    }
    async pageGetTitle(): Promise<String>{
        return await this.page.title()
    }
    getPageUrl(){
        return this.page.url()
    }
    async navigateTo(url:string):Promise<void>{
        await this.page.goto(url)
    }
}