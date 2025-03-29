import { test, expect } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  await page.getByRole('textbox', { name: 'Seu e-mail' }).fill('douglas_san@hotmail.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Enviamos um link de autenticação para o seu e-mail.')

  expect(toast).toBeVisible()

  // await page.waitForTimeout(2000)
});

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  await page.getByRole('textbox', { name: 'Seu e-mail' }).fill('email@hotmail.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais Inválidas.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
});

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')

  await page.waitForTimeout(2000)
});