import {expect, test} from '@playwright/test'
import { assert, log } from 'console'
test (`verify button functionalities using assertions`,async({page})=>{
    await page.goto("https://leafground.com/button.xhtml")
    const initialTitle = await page.title()
    await page.locator("//span[text()='Click']").click()
    const newTitle = await page.title()

    expect (newTitle).not.toBe(initialTitle)
    console.log("The Tital has Changed");
    await page.goBack()

    const disabledButton= page.locator("//span[text()='Disabled']")
    await expect(disabledButton).toBeDisabled()

    await page.locator("//span[text()='Image']").click()
    await page.locator("//span[text()='Image']").click()

    const buttons = await page.locator("button:has-text('Rounded')").count()
    console.log(`Number of Round button : ${buttons}`);
    

})