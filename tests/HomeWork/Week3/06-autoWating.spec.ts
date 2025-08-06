import { expect, test } from '@playwright/test'
import { log } from 'node:console'

test(`auto-waiting features for handling dynamic content efficiently`, async ({ page }) => {

  // Navigate to the LeafGround waits page
  await page.goto("https://leafground.com/waits.xhtml")

  // --------------------------------------
  //  Section 1: Wait for element to become visible
  // Click the first "Click" button
  await page.locator("(//span[text()='Click'])[1]").click()

  // Wait for "I am here" to appear and assert visibility
  const visibility = page.locator("//span[text()='I am here']")
  await expect(visibility).toBeVisible()
  console.log(" The Element is now Visible")

  // --------------------------------------
  //  Section 2: Wait for element to disappear
  // Click the second "Click" button
  await page.locator("(//span[text()='Click'])[2]").click()

  // Wait for "I am about to hide" to disappear and assert invisibility
  const invisibility = page.locator("//span[text()='I am about to hide']")
  await expect(invisibility).toBeHidden()
  console.log(" The Button has Disappeared")

  // --------------------------------------
  //  Section 3: Wait for button to become clickable
  // Click the "Click Second" button
  await page.locator("//span[text()='Click Second']").click()

  // Wait for "Click First Button" to become enabled
  const clickability = page.locator("//span[text()='Click First Button']")
  await expect(clickability).toBeEnabled()
  console.log(" The button has been Enabled and is Clickable")

  // --------------------------------------
  //  Section 4: Wait for text to change
  // Click the third "Click" button
  await page.locator("(//span[text()='Click'])[3]").click()

  // Wait for text to change to "Did you notice?"
  const textChange = page.locator("//span[text()='Did you notice?']")
  await expect(textChange).toHaveText('Did you notice?')
  console.log(" The text has Changed successfully")

})
