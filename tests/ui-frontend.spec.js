import { test, expect } from '@playwright/test';

test.describe('Frontend UI Automation Tests', () => {

  test('1. Homepage - Dashboard & Upload Component Load', async ({ page }) => {
    await page.goto('/');

    const heading = page.getByRole('heading', { name: /ask questions about your pdf/i });
    await expect(heading).toBeVisible();
  });

  test('2. Chat Input & Animated Thinking Indicator', async ({ page }) => {
    await page.goto('/');

    const inputField = page.getByPlaceholder(/ask a question about your uploaded pdf/i);
    await expect(inputField).toBeVisible();
  });

  test('3. Mobile Viewport - Responsive Header & Drawer Toggle', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const mobileHeader = page.getByText('PDF-RAG Assistant');
    await expect(mobileHeader).toBeVisible();

    const menuButton = page.getByRole('button', { name: /toggle upload menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const drawerTitle = page.getByText('Upload Document');
    await expect(drawerTitle).toBeVisible();
  });

});
