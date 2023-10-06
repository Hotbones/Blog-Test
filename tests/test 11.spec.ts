import { chromium, test } from '@playwright/test';

test('Test 11', async () => {

    console.log('Inicia Test 11 - Pruebas de navegación');
    console.log('Inicia Escenario 1 - navegacion por teclado');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    //('Los usuarios pueden navegar y utilizar el blog con el teclado'
    console.log('Inicia el navegador');
        await page.goto('https://www.ministryoftesting.com/'); 
        
        // Ejemplo: Presionar la tecla "Tab" para navegar
    await page.keyboard.press('Tab');

    // Ejemplo: Presionar la tecla "Enter" para activar un elemento
    await page.keyboard.press('Enter');
    console.log('se prueba la conbinación de las teclas');
    // Ejemplo: Combinaciones de teclas (Ctrl + C)
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyC');
    await page.keyboard.up('Control');

    // Ejemplo: Ingresar texto
    console.log('se prueba escritura en el box');

    await page.getByPlaceholder('Search...').click();
    await page.getByPlaceholder('Search...').fill('test de texto');

    // Verificar que no haya errores de accesibilidad
    //const results = await page.accessibility.snapshot();
   // expect(results).toHaveNoViolations();

        await page.close();
    });


