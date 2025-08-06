import { expect, test } from '@playwright/test'

test('validate the behavior and state of radio buttons', async ({ page }) => {

    // ========================
    //  Navigate to the Radio Button Page
    // ========================
    await page.goto("https://leafground.com/radio.xhtml")

    // ========================
    // Section: Favorite Browser Selection
    // ========================
    const browser = page.locator("(//label[text()='Chrome'])[1]") // Locate Chrome radio button (1st group)
    await browser.click() // Select Chrome
    await expect(browser).toBeChecked() // Assertion: Chrome is selected
    console.log(" Favorite browser selected: Chrome (Radio group 1)")

    // ========================
    // Section: Select City from Radio Options
    // ========================
    const cityOption = page.locator("//label[text()='Chennai']") // Locate Chennai option
    await cityOption.click() // Select Chennai
    await expect(cityOption).toBeChecked() // Assertion: Chennai is selected
    console.log("City selected: Chennai")

    // ========================
    //  Section: Are you enjoying the classes? (Default Selection)
    // ========================
    const defaultBrowser = page.locator("(//label[text()='Chrome'])[2]") // Locate Chrome under "enjoying class" section
    await defaultBrowser.click() // Ensure it's selected (click again just in case)
    await expect(defaultBrowser).toBeChecked() // Assertion: Chrome is selected
    console.log("Enjoying classes question: Chrome (Yes) is selected")

    // ========================
    // Section: Age Group Default Selection
    // ========================
    const defaultAgeGroup = page.locator("//label[text()='21-40 Years']") // Locate age group option
    await expect(defaultAgeGroup).toBeChecked() // Assertion: Element is checked
    console.log(" Default age group is visible: '21-40 Years' (Check selection manually if needed)")
})
