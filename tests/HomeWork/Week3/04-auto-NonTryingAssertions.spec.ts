import { expect, test } from '@playwright/test'

// Define a Playwright test block
test(`Retrying and non-retrying assertion`, async ({ page }) => {

    // Step 1: Navigate to the login page
    await page.goto("http://leaftaps.com/opentaps/control/main")

    // Step 2: Assert the page title using auto-retrying assertion
    await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform")

    // Step 3: Locate the username input box
    const uname = await page.locator("#username")

    // Step 4: Check if username field is enabled
    const enable = await uname.isEnabled()
    console.log("The username field is enabled: " + enable)

    // Step 5: Fill the username input
    await uname.fill("demosalesmanager")

    // Step 6: Locate password field using its role and label
    const passwordField = page.getByRole("textbox", { name: "Password" })

    // Step 7: Fill the password
    await passwordField.fill("crmsfa")

    // Step 8: Locate the login button
    const login = await page.locator("//input[@class='decorativeSubmit']")

    // Step 9: Check if the login button is enabled
    const loginenable = await login.isEnabled()
    if (loginenable != true) {
        console.log("The Login Button is not enabled to Click")
    } else {
        console.log("The Login Button is enabled: " + loginenable)
    }

    // Step 10: Click the login button
    await login.click()

    // Step 11: Click on CRM/SFA link after login
    await page.locator("text=CRM/SFA").click()

    // Step 12: Click on Create Lead
    await page.locator("//a[text()='Create Lead']").click()

    // Step 13: Fill in the company name
    await page.locator("#createLeadForm_companyName").fill("Test Leaf")

    // Step 14: Fill in the first name
    await page.locator("#createLeadForm_firstName").fill("Ramu")

    // Step 15: Fill in the last name
    await page.locator("#createLeadForm_lastName").fill("Stev")

    // Step 16: Fill in the personal salutation
    await page.locator("#createLeadForm_personalTitle").fill("Mr")

    // Step 17: Fill in the professional title
    await page.locator("#createLeadForm_generalProfTitle").fill("Manager")

    // Step 18: Select currency using value
    await page.selectOption("#createLeadForm_currencyUomId", { value: "GBP" })

    // Step 19: Fill in the annual revenue
    await page.locator("#createLeadForm_annualRevenue").fill("100000")

    // Step 20: Fill in the department
    await page.locator("#createLeadForm_departmentName").fill("Sales")

    // Step 21: Fill in the phone number
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890")

    // Step 22: Click on Create Lead button
    await page.locator(".smallSubmit").click()

    // Step 23: Verify company name with auto-retrying assertion
    const companyName = page.locator("#viewLead_companyName_sp")
    await expect(companyName).toContainText("Test Leaf")

    // Step 24: Verify first name using auto-retrying assertion, wait until the condition is met or timeout occurs.
    await expect(page.locator("#viewLead_firstName_sp")).toHaveText("Ramu")

    // Step 25: Verify last name using non-retrying assertion, check the condition immediately, no waiting.
    const lastName = page.locator("#viewLead_lastName_sp")
    await expect(lastName).toHaveText("Stev")

    // Step 26: Verify status field text
    const status = page.locator("//span[text()='Assigned']")
    await expect(status).toHaveText("Assigned")

    // Step 27: Get the current page title and print
    const title = await page.title()
    console.log("Page Title: " + title)

    // Step 28: Assert the title to ensure we're on the correct view page
    await expect(page).toHaveTitle("View Lead | opentaps CRM")
})