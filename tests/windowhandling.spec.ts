import {test,chromium} from "@playwright/test"

test("window hanle",async()=>{
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto("https://www.filpkart.com")
    await page2.goto("https://www.amazon.in")

    console.log(context.pages().length)

});


test("Handle child window",async()=>{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage();

    await page.goto("/windowhandle")

    const ele = page.locator("#bst_btn4");

    const childwindow = context.waitForEvent("page")
    await ele.click()
    const element = await childwindow
    console.log("get Parent Page Url",page.url())
    console.log("Get child Page Url",element.url())
})