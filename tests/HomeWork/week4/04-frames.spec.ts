import { expect, test } from '@playwright/test' // import Playwright's test runner and assertion utilities

test(`handling the iframe`, async ({ page }) => { // define a test case named "handling the iframe"
    await page.goto('https://leafground.com/frame.xhtml') // navigate to the page that contains multiple iframes

    const frameURL = page.frame({ url: "https://leafground.com/default.xhtml" }) // find a frame by its exact URL; returns Frame | null
    await frameURL?.locator("#Click").click() // if the frame exists, locate the element with id="Click" inside it and click
    await page.waitForTimeout(3000) // hard wait for 3 seconds (used here to observe UI changes / not recommended for real assertions)
    const text1 = await frameURL?.locator("#Click").allInnerTexts() // read all inner texts from the same button; returns string[] (or undefined if frame not found)
    console.log(`The text display after clickihg is...... ${text1}`) // log the button text(s) after clicking
}) 
test('countingh the frame', async ({ page }) => { // define a second test case to count iframes
    await page.goto('https://leafground.com/frame.xhtml') // navigate to the same page again for this test

    const ifarameCount = await page.locator("//iframe").count() // count all top-level <iframe> elements in the main document using XPath
    console.log(`the count of iframe is ${ifarameCount}`) // log the count of top-level iframes
}) 

test(`clicking the button inside the nested frame`, async ({ page }) => { // define a third test case for nested frames

    await page.goto('https://leafground.com/frame.xhtml') // navigate to the frames page for this test
    const frame2 = page.frame({ name: "frame2" }) // get the outer frame by name="frame2"; returns Frame | null
    await frame2?.click("#Click") // attempt to click #Click inside that outer frame (will no-op if frame not found)
    await page.waitForTimeout(3000) // hard wait for 3 seconds (useful for manual observation)
    const text1 = frame2?.locator("#Click") // create a locator for the #Click element inside the found frame (if any)
    const innertext = await text1?.allInnerTexts() // read all inner texts from that locator; returns string[] (or undefined if locator absent)
    console.log(`The text after clicking the button inside the nested loop is ..${innertext} `); // log the text(s) after clicking inside (supposed) nested frame
}) 
