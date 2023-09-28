import {test, expect} from '@playwright/test'

//Test of blog page

/*
Escenario 2: Prueba de enlaces rotos
Objetivo: Escanear todas las páginas del blog en busca de enlaces rotos o redirecciones incorrectas.

Precondiciones: El navegador debe estar configurado para realizar pruebas en el sitio web de Ministry of Testing.

Pasos de Prueba:

Navegar a la página principal del sitio web de Ministry of Testing.
Escanear todas las páginas en busca de enlaces rotos o redirecciones incorrectas.
Expectativas: No deben encontrarse enlaces rotos ni redirecciones incorrectas en ninguna página del sitio.

Resultado: [Registrar aquí los resultados reales después de la ejecución de la prueba.]
    */

test('Escenario 2: Prueba de enlaces rotos 1', async ({page}) =>{

    await page.goto('https://www.ministryoftesting.com/');
    await page.getByRole('link', { name: 'Learn', exact: true }).click();
    await page.pause()
    await page.getByText('TestBash Autumn 2023 is swiftly approaching! Don\'t miss the final TestBash of th').click();
})

test('Escenario 2: Prueba de enlaces rotos 2', async ({page}) =>{
    await page.goto('https://www.ministryoftesting.com/');
    await page.locator('#eventNav').click();
    await page.pause()
    await page.getByText('TestBash Autumn 2023 is swiftly approaching! Don\'t miss the final TestBash of th').click();
    
})

test('Escenario 2: Prueba de enlaces rotos 3', async ({page}) =>{
    await page.goto('https://www.ministryoftesting.com/');
    await page.getByRole('link', { name: 'Community', exact: true }).click();
    await page.pause()
    await page.getByRole('link', { name: 'tools', exact: true }).click();
    await page.getByRole('link', { name: 'automation', exact: true }).click();
    await page.getByRole('link', { name: 'mobile-testing', exact: true }).click();

})

test('Escenario 2: Prueba de enlaces rotos 4', async ({page}) =>{
    await page.goto('https://www.ministryoftesting.com/');

    await page.getByRole('link', { name: 'News', exact: true }).click();
    await page.getByRole('heading', { name: 'News' }).click();
    await page.getByRole('link', { name: '📲 The TestBash UK App is Not Harmful' }).click();
})

test('Escenario 2: Prueba de enlaces rotos 5', async ({page}) =>{
    
    await page.goto('https://www.ministryoftesting.com/');
    await page.getByRole('link', { name: ' Sign In' }).click();
    await page.pause()

    await page.getByPlaceholder('Email or Username').click();
    await page.getByPlaceholder('Email or Username').fill('test@gmail.com');
    
    await page.getByPlaceholder('password').click();
    await page.getByPlaceholder('password').fill('juanser');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByText('Invalid Login or password.').click();
    await page.pause()

})