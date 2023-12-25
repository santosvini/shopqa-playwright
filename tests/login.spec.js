// @ts-check
const { test, expect } = require('@playwright/test');

test.use({
  viewport: { width: 1280, height: 768 }
})

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test('Login com sucesso @success', async ({ page }) => {

  const text = await page.waitForSelector('text=NEWSLETTER')
  await text.scrollIntoViewIfNeeded()

  await expect(page).toHaveTitle(/QAZANDO Shop E-Commerce/);
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  
  // await page.screenshot({ path: 'screenshot/screenshot1.png' });
  // await page.screenshot({ path: 'screenshot/screenshot2.png' });
});