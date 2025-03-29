import { test, expect } from '@playwright/test';

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByRole('textbox', { name: 'Nome do estabelecimento' }).fill('Pizza Shop')
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Douglas Dias Leal')
  await page.getByRole('textbox', { name: 'Seu e-mail' }).fill('douglas_san@hotmail.com')
  await page.getByRole('textbox', { name: 'Seu celular' }).fill('00000000000')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso')

  await expect(toast).toBeVisible()

  // await page.waitForTimeout(2000)
});

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByRole('textbox', { name: 'Nome do estabelecimento' }).fill('Invalid Name')
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Douglas Dias Leal')
  await page.getByRole('textbox', { name: 'Seu e-mail' }).fill('douglas_san@hotmail.com')
  await page.getByRole('textbox', { name: 'Seu celular' }).fill('00000000000')
  
  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante!')

  await expect(toast).toBeVisible()

  // await page.waitForTimeout(2000)
});

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')

  // await page.waitForTimeout(2000)
});