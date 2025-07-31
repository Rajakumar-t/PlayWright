import { chromium, firefox, test } from '@playwright/test';

// Test 1: Open Flipkart and Redbus in two tabs in the same browser
test('workingWithTwoTab', async ({ browser }) => {
    // Create a new browser context (like a fresh browser profile)
    const context = await browser.newContext();

    // --- Tab 1: Open Redbus ---
    const redbusPage = await context.newPage(); // Open new tab
    await redbusPage.goto("https://www.redbus.in"); // Navigate to Redbus
    console.log("Redbus Title:", await redbusPage.title()); // Print Redbus title
    console.log("Redbus URL:", redbusPage.url()); // Print Redbus URL

    // --- Tab 2: Open Flipkart ---
    const flipkartPage = await context.newPage(); // Open another new tab
    await flipkartPage.goto("https://www.flipkart.com"); // Navigate to Flipkart
    console.log("Flipkart Title:", await flipkartPage.title()); // Print Flipkart title
    console.log("Flipkart URL:", flipkartPage.url()); // Print Flipkart URL

});


// Test 2: Open Redbus in a separate Chromium browser instance
test('Chromium - Redbus', async () => {
    // Launch Chromium browser in headed mode (UI visible)
    const chromiumBrowser = await chromium.launch({ headless: false });

    // Create a new context (tab environment) in Chromium
    const chromiumContext = await chromiumBrowser.newContext();

    // Open a new page/tab
    const redbusPage = await chromiumContext.newPage();

    // Navigate to Redbus
    await redbusPage.goto("https://www.redbus.in");

    // Print title and URL
    console.log("Redbus Title (Chromium):", await redbusPage.title());
    console.log("Redbus URL (Chromium):", redbusPage.url());

});


// Test 3: Open Flipkart in a separate Firefox browser instance
test('Firefox - Flipkart', async () => {
    // Launch Firefox browser in headed mode
    const firefoxBrowser = await firefox.launch({ headless: false });

    // Create a new context in Firefox
    const firefoxContext = await firefoxBrowser.newContext();

    // Open a new page/tab
    const flipkartPage = await firefoxContext.newPage();

    // Navigate to Flipkart
    await flipkartPage.goto("https://www.flipkart.com");

    // Print title and URL
    console.log("Flipkart Title (Firefox):", await flipkartPage.title());
    console.log("Flipkart URL (Firefox):", flipkartPage.url());

});
