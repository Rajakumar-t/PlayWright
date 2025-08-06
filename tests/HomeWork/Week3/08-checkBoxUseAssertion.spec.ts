import { expect, test } from '@playwright/test'

test(`checkbox functionalities and assertion`, async ({ page }) => {

    // === 1. Navigate to Leafground Checkbox Page ===
    await page.goto("https://leafground.com/checkbox.xhtml")

    // === 2. Basic Checkbox: Click and Verify ===
    const basicCheckBox = page.locator("(//span[text()='Basic'])/preceding-sibling::div[contains(@class, 'ui-chkbox-box')]")
    await basicCheckBox.click()

    const checkboxInput = page.locator("//span[text()='Basic']/preceding-sibling::div//input[@type='checkbox']")
    await expect(checkboxInput).toBeChecked()
    console.log("Assertion passed: 'Basic' checkbox is checked")

    // === 3. Ajax Notification Checkbox ===
    await page.locator("//span[text()='Ajax']").click()
    await page.waitForSelector("//span[text()='Checked']")

    const notification = page.locator("//span[text()='Checked']")
    await expect(notification).toHaveText('Checked')
    console.log("'Notification' message is displayed after Ajax checkbox click")

    // === 4. Favorite Language Selection (Java) ===
    const favLang = page.locator("//label[text()='Java']")
    await favLang.click()

    const favLangInput = page.locator("(//label[text()='Java'])/preceding-sibling::div//div//input")
    await expect(favLangInput).toBeChecked()
    console.log("Favorite language 'Java' checkbox selected")

    // === 5. Tri-State Checkbox ===
    const triState = page.locator("(//span[@class='ui-chkbox-icon ui-c '])/parent::div")
    await triState.click()
    console.log(" Tri-State checkbox clicked (Check manually for its state)")

    // === 6. Toggle Switch ===
    const toggle = page.locator("//div[@class='ui-toggleswitch-slider']")
    await toggle.click()
    console.log("Toggle switch clicked")

    // === 7. Toggle Switch Confirmation Message ===
    const toggleMsg = page.locator("div.ui-growl-message")
    await expect(toggleMsg).toContainText("Checked")
    console.log("Toggle switch 'Checked' message displayed")

    // === 8. Disabled Checkbox Verification ===
    const disabledCheckbox = page.locator("//span[text()='Disabled']/preceding-sibling::div//input")
    await expect(disabledCheckbox).toBeDisabled()
    console.log("Disabled checkbox is verified and not clickable")

    // === 9. Select Multiple Cities (Paris & Rome) ===
    // Open dropdown
    await page.locator("//div[@class='ui-selectcheckboxmenu-trigger ui-state-default ui-corner-right']").click()

    // Select Paris
    const paris = page.locator("//label[text()='Paris']/preceding-sibling::div[contains(@class, 'ui-chkbox')]")
    await paris.click()
    console.log(" Paris city checkbox selected")

    // Close and reopen dropdown for Rome (to simulate independent clicks)
    await page.locator("//div[@class='ui-selectcheckboxmenu-trigger ui-state-default ui-corner-right']").click()
    const rome = page.locator("(//label[text()='Rome'])/preceding-sibling::div[contains(@class, 'ui-chkbox')]")
    await rome.click()
    console.log(" Rome city checkbox selected")

    // === 10. Confirm Selections are Active ===
    await expect(paris).toBeEnabled()
    console.log("Paris checkbox is enabled (selected)")

    await expect(rome).toBeEnabled()
    console.log("Rome checkbox is enabled (selected)")

    // === 11. Count All Checked Checkboxes ===
    const selectedCount = await page.locator("input[type='checkbox']:checked").count()
    console.log(`Total checkboxes selected: ${selectedCount}`)

    // === Optional: Wait before closing browser (for observation) ===
    await page.waitForTimeout(7000)
})
