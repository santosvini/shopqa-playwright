const { test, expect } = require('@playwright/test');
const faker = require('./faker');
test.describe("Login", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/QAZANDO Shop E-Commerce/);
  })
  test('Login com sucesso @success', async ({ page }) => {
  
    // const text = await page.waitForSelector('text=NEWSLETTER')
    // await text.scrollIntoViewIfNeeded()
  
    await page.getByRole('link', { name: ' Login' }).click();
    await page.locator('#user').click();
    await page.locator('#user').fill(faker.register.username);
    //await page.locator('#user').fill(faker.register.email);
    await page.locator('#password').click();
    await page.locator('#password').fill(faker.register.pass);
    await page.getByRole('button', { name: 'login' }).click();
    await page.screenshot({ path: 'screenshot/login.png' });
  });
})
