import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login Flow', () => {
  test('should login with valid standard user credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/.*inventory\.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('should show error on invalid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});