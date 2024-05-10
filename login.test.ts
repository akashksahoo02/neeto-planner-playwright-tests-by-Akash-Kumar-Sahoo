import { chromium, Browser, Page } from 'playwright';
import { test, expect } from '@playwright/test';

test("Login Test", async () => {
    // Launch browser in non-headless mode
    const browser: Browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    // Create a new page
    const page: Page = await context.newPage();

    // Navigate to the URL
    await page.goto('https://akash-kumar-sahoo.neetoplanner.net/dashboard/active');
    
    // Wait for 2 seconds
    await page.waitForTimeout(2000);

    // Fill email field
    await page.fill('input#user_email', 'cpts9gnqty9-planner-akash_kumar_sahoo-silicon_university@bigbinary.com');
    
    // Click on the sign-in button
    await page.click('//*[@id="neeto-login-form"]/div/div[2]/button');
    
    // Wait for 2 seconds
    await page.waitForTimeout(2000);

    // Fill password field
    await page.locator('//*[@id=\":r0:\"]').fill('123456');

    // Wait for 10 seconds
    await page.waitForTimeout(10000);

    // Close the browser
    await browser.close();
    
});
