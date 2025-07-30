// Importing Playwright's test and expect functions
import { expect, test } from '@playwright/test';
// NOTE: The 'assert' import is unused and can be removed
import { assert } from 'console';
import { verify } from 'crypto';

// =============================================
// ✅ Test Case 1: Create a New Lead in Salesforce
// =============================================
test('creating test lead', async ({ page }) => {

    // Step 1: Navigate to the Salesforce login page
    await page.goto('https://login.salesforce.com');

    // Log message to verify navigation
    console.log('Page loaded');

    // Step 2: Enter login credentials
    await page.locator('#username').fill('ravindran.ramdas@testleaf.com');
    await page.locator('#password').fill('RaviSalesTest#1432');

    // Step 3: Click the Login button
    await page.locator('#Login').click();

    // Step 4: Open the App Launcher (9-dot waffle icon)
    await page.locator("//span[text()='App Launcher']").click();

    // Step 5: Click "View All" to open the app list
    await page.locator("//button[text()='View All']").click();

    // Step 6: Scroll to and click on the "Leads" app
    await page.locator("//p[text()='Leads']").scrollIntoViewIfNeeded();
    await page.locator("//p[text()='Leads']").click();

    // Step 7: Click the "New" button to create a lead
    await page.locator("//div[text()='New']").click();

    // Step 8: Select "Mr." from the Salutation dropdown
    await page.locator('button[aria-label="Salutation"]').click();
    await page.locator('lightning-base-combobox-item').filter({ hasText: 'Mr.' }).click();

    // Step 9: Fill in Lead Details
    await page.locator("(//input[@class='slds-input'])[3]").fill('Ram');      // First Name
    await page.locator("(//input[@class='slds-input'])[4]").fill('singh');    // Last Name
    await page.locator("//input[@name='Company']").fill('testleaf');          // Company Name

    // Step 10: Click Save to create the lead
    await page.locator("//button[text()='Save']").click();

    // Step 11: Verify the created lead's full name is displayed correctly
    const name = page.locator('lightning-formatted-name');
    await expect(name).toContainText('Mr. Ram singh'); // Adjust if the actual name differs

    // Log the lead name locator object (for debugging)
    console.log(name);

    // Step 12: Pause briefly for observation
   // await page.waitForTimeout(10000);
});


// ==========================================================
// ✅ Test Case 2: Create and Edit Lead in LeafTaps CRM
// ==========================================================
test('creating a lead', async ({ page }) => {

    // Step 1: Navigate to the LeafTaps CRM login page
    await page.goto('http://leaftaps.com/opentaps/control/main')

    // Step 2: Enter login credentials
    await page.locator("#username").fill('DemoSalesManager')
    await page.locator("//input[@id='password']").fill('crmsfa')

    // Step 3: Click Login
    await page.locator("//input[@class='decorativeSubmit']").click()

    // Step 4: Click the "CRM/SFA" button after login
    await page.locator("#button").click()

    // Step 5: Go to the Leads section
    await page.waitForSelector("//a[text()='Leads']")
    await page.locator("//a[text()='Leads']").click()

    // (Step repeated accidentally) Click Leads again
    await page.locator("//a[text()='Leads']").click()

    // Step 6: Click on "Create Lead"
    await page.locator("//a[text()='Create Lead']").click()

    // Step 7: Fill in Lead details
    await page.locator('#createLeadForm_companyName').fill("xyz")    // Company
    await page.locator("#createLeadForm_firstName").fill('Ramesh')  // First Name
    await page.locator("#createLeadForm_lastName").fill('pawar')    // Last Name

    // Step 8: Click "Create Lead" button
    await page.locator("//input[@class='smallSubmit']").click()

    // Step 9: Click "Edit" on the lead record
    await page.locator("//a[@class='subMenuButton'][3]").click()

    // Step 10: Change the Company Name
    await page.locator('#updateLeadForm_companyName').fill("TestLeaf")

    // Step 11: Click "Update" to save changes
    await page.locator("//input[@value='Update']").click()

    // Step 12: Optional wait to observe updated lead
    await page.waitForTimeout(2000)
})

// Test 3: Create a new Individual in Salesforce
test(`Create Individuals`, async ({ page }) => {

    // Step 1: Navigate to Salesforce login page
    await page.goto('https://login.salesforce.com');

    // Log message to confirm navigation
    console.log('Page loaded');

    // Step 2: Fill in login credentials
    await page.locator('#username').fill('ravindran.ramdas@testleaf.com'); // Enter username
    await page.locator('#password').fill('RaviSalesTest#1432'); // Enter password

    // Step 3: Click on Login button to access the dashboard
    await page.locator('#Login').click();

    // Step 4: Click the 9-dot App Launcher icon
    await page.locator("//span[text()='App Launcher']").click();

    // Step 5: Click "View All" to open full app list
    await page.locator("//button[text()='View All']").click();

    // Step 6: Wait for "Individuals" app to appear, then click on it
    await page.waitForSelector("//p[text()='Individuals']", { timeout: 10000 });
    await page.locator("//p[text()='Individuals']").click();

    // Step 7: Wait for "New" button and click it to create a new Individual
    await page.waitForSelector("//div[@title='New']");
    await page.locator("//div[@title='New']").click();

    // Step 8: Fill in the Last Name for the new individual
    await page.locator("//input[@class='lastName compoundBLRadius compoundBRRadius form-element__row input']").fill("Ramesh");

    // Step 9: Click the Save button to create the individual record
    await page.locator("//span[text()='Save']").click();

    // Step 10: Wait for the newly created individual's name to be visible
    await page.waitForSelector("//div[@title='ramesh']", { timeout: 10000 });

    // Step 11: Assert that the name is visible and correct
    const lead = page.locator("//div[@title='ramesh']");
    await expect(lead).toBeVisible(); // Verifies the record appears on the screen
    await expect(lead).toContainText("ramesh"); // Verifies correct name was saved

});

