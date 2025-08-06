import { expect, test } from "@playwright/test";

test(`Create a Lead in TestLeaf`, async ({ page }) => {

  // 1. Navigate to the URL
  await page.goto("http://leaftaps.com/opentaps/control/main")

  // 2. Get and assert URL
  await expect(page).toHaveURL("http://leaftaps.com/opentaps/control/main")
  console.log("Current URL: " + await page.url())

  // 3. Enter username
  await page.locator("#username").fill("demosalesmanager")

  // 4. Enter password
  const passwordField = page.getByRole("textbox", { name: "Password" })
  await passwordField.fill("crmsfa")

  // 5. Click the Login button
  await page.locator(".decorativeSubmit").click() // CSS Selector

  // 6. Click on CRM/SFA link
  await page.locator("text=CRM/SFA").click() // Text-based locator

  // 7. Click on Leads tab
  await page.locator("//a[text()='Create Lead']").click()

  // 9. Fill Company Name
  await page.locator("#createLeadForm_companyName").fill("Test Leaf")

  // 10. Fill First Name
  await page.locator("#createLeadForm_firstName").fill("Ramu")

  // 11. Fill Last Name
  await page.locator("#createLeadForm_lastName").fill("Stev")

  // 12. Fill Salutation (Personal Title)
  await page.locator("#createLeadForm_personalTitle").fill("Mr")

  // 13. Fill Title
  await page.locator("#createLeadForm_generalProfTitle").fill("Manager")

  // 14. Select Currency
  await page.selectOption("#createLeadForm_currencyUomId", { value: "GBP" })

  // 15. Fill Annual Revenue
  await page.locator("#createLeadForm_annualRevenue").fill("100000")

  // 16. Fill Department
  await page.locator("#createLeadForm_departmentName").fill("Sales")

  // 17. Fill Phone number
  await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890")

  // 18. Click on Create Lead button
  await page.locator(".smallSubmit").click()

  // 19. Verify the Company Name
  const companyName = page.locator("#viewLead_companyName_sp")
  await expect(companyName).toContainText("Test Leaf")

  // 20. Verify the First Name
  const firstName = page.locator("#viewLead_firstName_sp")
  await expect(firstName).toHaveText("Ramu")

  // 21. Verify the Last Name
  const lastName = page.locator("#viewLead_lastName_sp")
  await expect(lastName).toHaveText("Stev")

  // 22. Verify the Status (assuming status exists)
  const status = page.locator("//span[text()='Assigned']")
  await expect(status).toHaveText("Assigned" )

  // 23. Print and assert the page title
  const title = await page.title()
  console.log("Page Title: " + title)
  await expect(page).toHaveTitle("View Lead | opentaps CRM") 

});
