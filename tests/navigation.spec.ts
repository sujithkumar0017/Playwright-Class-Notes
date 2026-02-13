import { test, expect } from '@playwright/test';

test('navigate to home page and validate title and URL', async ({ page }) => {
  await page.goto('/');
  await page.locator('.Home_title__ANWNn').first().click();
  await page.locator('//a[@href="/buttons"]').click();
  await page.locator('#bst_btn1').click();
  const url = page.url();
  console.log(url);
  const title = await page.title();
  console.log(title);
  if (title === "Bspark Software Technologies || Best Software Training Institute in Chennai" && url === "https://www.bsparksoftwaretechnologies.com/selenium-training-in-chennai") {
    console.log("True");
  } else {
    console.log("False");
  }
  // await expect(page).toHaveTitle("Bspark Software Technologies || Best Software Training Institute in Chennai");
  // await page.goBack();
  await page.waitForTimeout(3000);

});