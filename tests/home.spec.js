const { test, expect } = require('@playwright/test');

test.describe('Home Page', async () =>{
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Acesso a Home Page @home', async ({ page }) => {
    await page.getByRole('banner').getByRole('link', { name: 'logo' }).isVisible
    page.locator('.header-bottom > .container > .row > .col-12')
    page.locator('div:nth-child(2) > div > .electronics_slider')
  })
})