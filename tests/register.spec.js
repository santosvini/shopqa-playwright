const { test, expect } = require('@playwright/test')
const faker = require('./faker')
test.describe("Register", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/QAZANDO Shop E-Commerce/);
    await page.getByRole('link', { name: ' Cadastro' }).click()
  })
  test('New Register @register', async ({ page }) => {
    page.getByRole('heading', { name: 'Cadastro de usuário' })
    await page.locator('#user').fill(faker.register.username)
    await page.locator('#email').fill(faker.register.email)
    await page.locator('#password').fill(faker.register.pass)
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    //await page.screenshot({ path: 'screenshot/register/register.png' })
  })
})
