import { test, expect } from '@playwright/test';

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const dayOrdersAmount = await page.getByTestId('day-orders-amount').textContent();
  
  expect(dayOrdersAmount?.trim()).toBe('20');

  expect(page.getByText('-5% em relação a ontem')).toBeVisible()

  // await page.waitForTimeout(2000);
});

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const monthOrdersAmount = await page.getByTestId('month-orders-amount').textContent();
  
  expect(monthOrdersAmount?.trim()).toBe('200');

  expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()

  // await page.waitForTimeout(2000);
});

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const monthCanceledOrdersAmount = await page.getByTestId('month-canceled-orders-amount').textContent();
  
  expect(monthCanceledOrdersAmount?.trim()).toBe('5');

  expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()

  // await page.waitForTimeout(2000);
});

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const monthRevenue = await page.getByTestId('month-revenue').textContent();
  
  const normalizedRevenue = monthRevenue?.replace(/\u00A0/g, ' ').trim();
  expect(normalizedRevenue).toBe('R$ 200,00');

  expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()

  // await page.waitForTimeout(2000);
});