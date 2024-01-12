const { test, expect } = require('@playwright/test');
 
test('frame handle', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
 
    // Prent Frame 1 called "Top"
    const parent_Frame = await page.frameLocator('//frame[@name="frame-top"]');
 
    const left_Frame = await parent_Frame.frameLocator('//frame[@name="frame-left"]').locator('body');
    console.log((await left_Frame.textContent()).trim());
 
    const middle_Frame = await parent_Frame.frameLocator('//frame[@name="frame-middle"]').locator('body');
    console.log((await middle_Frame.textContent()).trim());
 
    const right_Frame = await parent_Frame.frameLocator('//frame[@name="frame-right"]').locator('body');
    console.log((await right_Frame.textContent()).trim());
 
    // Paren Frame_2 Called "Bottom"
    const parent_Frame_2 = await page.frameLocator('//frame[@name="frame-bottom"]').locator('body');
    console.log(await parent_Frame_2.textContent());
 
}
)