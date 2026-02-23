import {test} from "@playwright/test"


test("Multiple Frames",async({page})=>{
    await page.goto("/frames");
    const parent_frame = page.frameLocator("#bst_frame2")
    const child_frame = parent_frame.frameLocator("#bst_frame3")
    const inputbox = child_frame.locator("#nameInput")
    await inputbox.fill("sujith")
    await child_frame.getByRole('button',{name:"submit"}).click()
    const gettext = await child_frame.locator(".UsernameInput_message__Befhi").textContent()
    if (gettext === "Welcome, sujith!"){
        console.log("True")
    }
    else{
        console.log("False")
    }   
})
