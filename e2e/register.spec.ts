import {test, expect} from "playwright/test";

test("login homepage roblox", async ({page}) => {

    await page.goto("https://www.roblox.com/");

//Birthday

    await page.locator("#MonthDropdown").selectOption("Apr");
    await page.locator("#DayDropdown").selectOption("10");
    await page.locator("#YearDropdown").selectOption("2004");  
// Usarname and password
    await page.locator("#signup-username").fill("kaftiel1509");
    await page.locator("#signup-password").fill("nevac1001");

// Gender    
    await page.locator("#MaleButton").click();

// Sign up button    
    await page.locator("#signup-button").click();

await expect(page).toHaveURL("https://www.roblox.com/");

});