const { test, expect } = require('@playwright/test');
const faker = require('./faker');
test.describe("Login", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/QAZANDO Shop E-Commerce/);
    await page.getByRole('link', { name: ' Login' }).click();
  })
  test('Login com sucesso @success', async ({ page }) => {

    const login = page.locator('#swal2-html-container')

    await page.locator('#user').click();
    await page.locator('#user').fill(faker.register.email);
    await page.locator('#password').click();
    await page.locator('#password').fill(faker.register.pass);
    await page.getByRole('button', { name: 'login' }).click();
    await page.locator('#swal2-show').isVisible()
    page.getByText('Login realizado')
    await expect(login).toHaveText(`Olá, ${faker.register.email}`)
    //await page.screenshot({ path: 'screenshot/login/login.png' });
  });

  test('Login sem e-mail e senha @nodata', async ({ page }) => {
    page.locator('#user')
    page.locator('#password')
    await page.getByRole('button', { name: 'login' }).click();
    await page.locator('.invalid_input').isVisible('E-mail inválido.')
    await page.locator('.invalid_input').isVisible('Senha inválida.')
    //await page.screenshot({ path: 'screenshot/login/login1.png' });
  })

  test('Login com usuário incorreto @erroruser', async ({ page }) => {
    await page.locator('#user').click()
    await page.locator('#user').fill(faker.register.username)
    await page.locator('#password').click()
    await page.locator('#password').fill(faker.register.pass)
    await page.getByRole('button', { name: 'login' }).click()
    await page.locator('.invalid_input').isVisible('E-mail inválido.')
    //await page.screenshot({ path: 'screenshot/login/login2.png' })
  });

  test('Login com senha incorreta @errorpass', async ({ page }) => {
    await page.locator('#user').click();
    await page.locator('#user').fill(faker.register.email);
    await page.locator('#password').click();
    await page.locator('#password').fill(faker.register.errorpass);
    await page.getByRole('button', { name: 'login' }).click();
    await page.locator('.invalid_input').isVisible('Senha inválida.')
    //await page.screenshot({ path: 'screenshot/login/login3.png' });
  })

  test('Login sem usuário @nouser', async ({ page }) => {
    page.locator('#user')
    await page.locator('#password').click()
    await page.locator('#password').fill(faker.register.pass)
    await page.getByRole('button', { name: 'login' }).click()
    await page.locator('.invalid_input').isVisible('E-mail inválido.')
    //await page.screenshot({ path: 'screenshot/login/login4.png' })
  })

  test('Login sem senha @nopass', async ({ page }) => {
    await page.locator('#user').click();
    await page.locator('#user').fill(faker.register.email);
    page.locator('#password')
    await page.getByRole('button', { name: 'login' }).click();
    await page.locator('.invalid_input').isVisible('Senha inválida.')
    //await page.screenshot({ path: 'screenshot/login/login5.png' });
  })

  // const text = await page.waitForSelector('text=NEWSLETTER')
  // await text.scrollIntoViewIfNeeded()

})