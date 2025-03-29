import { test, expect } from '@playwright/test';

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click()
  
  await page.getByRole('textbox', { name: 'Nome' }).fill('The Pizza Shop')
  await page.getByRole('textbox', { name: 'Descrição' }).fill('Another description')
  
  await page.getByRole('button', { name: 'Salvar' }).click()
  
  await page.waitForLoadState('networkidle')
  
  const toast = page.getByText('Perfil atualizado com sucesso!')

  await expect(toast).toBeVisible()
  
  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'The Pizza Shop' })).toBeVisible()

  // await page.waitForTimeout(2000)
});