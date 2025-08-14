import { test, expect } from '@playwright/test' // import Playwright's test and assertion APIs

test(`handling the alert w3school`, async ({ page }) => { // define a test case and get a fresh Page via fixture

    page.on(`dialog`, async (alert) => { // set up a listener: whenever a JS dialog (alert/confirm/prompt) appears, run this callback
        const message = alert.message() // read the text shown in the dialog
        console.log(`The message in the dialog is ${message}`); // log the dialog's message for visibility in the test output

        const alertType = alert.type() // read the dialog type: 'alert' | 'confirm' | 'prompt' | 'beforeunload'
        console.log(`alert type is ${alertType}`); // log which type of dialog was shown

        if (alertType === 'confirm') { // if it’s a confirm dialog (OK/Cancel)

            await alert.accept() // press OK (accept) so the page continues and shows the “You pressed OK!” text
        } // end if
    }) // end dialog listener

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm") // navigate to the W3Schools “confirm” Tryit page
    await page.locator("//div[@id='accept-choices']").click() // dismiss the cookie consent banner so it doesn’t block interactions

    const frame = page.frameLocator('#iframeResult'); // get a FrameLocator for the result iframe that contains the demo
    const tryItBtn = frame.locator("//button[normalize-space()='Try it']"); // locate the “Try it” button inside the iframe

    // Click the button to trigger the confirm dialog (the page.on('dialog') handler above will fire and accept it)
    await tryItBtn.click(); // click the button which opens the confirm dialog

    // After accepting the confirm dialog, the text inside #demo should become exactly "You pressed OK!"
    const result = frame.locator('#demo'); // find the element that displays the result message
    await expect(result).toHaveText('You pressed OK!'); // assert that the result text matches the expected string

}) 
