import { test } from '@playwright/test'
import { log } from 'node:console'

test(`select dropdown components on web applications`, async ({ page }) => {

    // Navigate to the LeafGround dropdowns page
    await page.goto("https://leafground.com/select.xhtml")

    // Select 'Selenium' from the first basic dropdown
    await page.selectOption(`//select[@class='ui-selectonemenu']`, { value: "Selenium" })

    // Get all options from the automation tools dropdown
    const automationTool = page.locator("(//select[@class='ui-selectonemenu'])/option")
    const automationcount = await automationTool.count()

    // Log how many automation tools are listed
    console.log(`The count of Automation tool = ${automationcount}`)

    // Print the text of each automation tool option
    for (let index = 0; index < automationcount; index++) {
        console.log(await automationTool.nth(index).innerText())
    }

    // Click to open the 'Country' dropdown
    await page.locator(`//label[text()='Select Country']`).click()

    // Select 'India' from the country dropdown
    await page.locator(`//li[@data-label='India']`).click()

    // Click to open the 'City' dropdown (which is dependent on country)
    await page.locator(`//label[text()='Select City']`).click()

    // Define expected list of cities (optional check or future assertion)
    const expectedCities = ['Select City', 'Bengaluru', 'Chennai', 'Delhi']

    // Fetch the list of cities displayed and store them in actualCities
    const actualCities = await page.locator(`//ul[contains(@id, 'city_items')]/li`).allInnerTexts()

    // Select 'Chennai' from the cities list
    await page.locator("//label[text()='Select City']").click()
    await page.locator("//li[text()='Chennai']").click()

    // Click to open the 'Choose Course' dropdown (multi-select)
    await page.locator("//button[@aria-label='Show Options']").click()
    await page.locator(`//li[text()='AWS']`).click()

    // Reopen the multi-select and select 'Appium'
    await page.locator("//button[@aria-label='Show Options']").click()
    await page.locator(`//li[text()='Appium']`).click()

    // Reopen again and select 'Selenium WebDriver'
    await page.locator("//button[@aria-label='Show Options']").click()
    await page.locator(`//li[text()='Selenium WebDriver']`).click()

    // Open the 'Language' dropdown
    await page.locator("//label[text()='Select Language']").click()

    // Get the list of languages from the second dropdown
    const language = page.locator("(//ul[@class='ui-selectonemenu-items ui-selectonemenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset'])[2]")
    const language1 = await language.count()

    // Print all available language options
    for (let index = 0; index < language1; index++) {
        console.log(await language.nth(index).innerText())
    }

    // Select the language 'Tamil'
    await page.locator("//li[text()='Tamil']").click()

    // Open the 'Value' dropdown (last dropdown on the page)
    await page.locator(`//label[contains(@id, 'value_label')]`).click()

    // Select the value option 'இரண்டு' (Tamil for "Two")
    await page.locator("//li[text()='இரண்டு']").click()

    // Pause to see the final result before closing
    await page.waitForTimeout(6000)
})
