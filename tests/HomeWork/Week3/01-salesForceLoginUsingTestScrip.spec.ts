import { expect, test } from '@playwright/test';

test('SalesForceLogin Using TS', async ({ page }) => {

  // Step 1: Go to Salesforce login page
  await page.goto("https://login.salesforce.com/")

  // Step 2: Capture and print current URL
  const url = page.url()
  console.log("The URL for the site is = " + url)

  // Step 3: Assert the URL is correct
  await expect(page).toHaveURL("https://login.salesforce.com/")

  // Step 4: Check if username field is enabled
  const login = page.getByRole("textbox", { name: "Username" })
  const isEnabled = await login.isEnabled()
  console.log("The Username input is Enabled: " + isEnabled)

  // Step 5: Fill username and password
  await login.fill("ravindran.ramdas@testleaf.com")
  await page.getByRole("textbox", { name: "Password" }).fill("Password")

  // Step 6: Click the login button
  await page.getByRole("button", { name: "Log In" }).click()

  // Step 7: Wait for the next page to load
  await page.waitForTimeout(10000)

  // Step 8: Get and print the page title
  const title = await page.title()
  console.log("The title of the Page is = " + title)

  // Step 9: Get and print the current page URL after login
  const urlHome = await page.url()
  console.log("Current URL of the page is = " + urlHome)

})