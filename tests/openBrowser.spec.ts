import {test,chromium} from '@playwright/test';


//Interview question: How to open the browser manually in Playwright?
test('open browser manually', async()=>{

    const browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
})
    const context = await browser.newContext();  // Create a new browser context
    const page = await context.newPage();  // Private window
    await page.goto('https://playground.bsparksoftwaretechnologies.com/');
    await page.waitForTimeout(3000);
    await page.close();
}
)
