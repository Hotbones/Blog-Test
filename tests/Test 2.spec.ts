import {test, expect} from '@playwright/test'

//Test of blog page
test('Escenario 1: Navegación a través de categorías y etiquetas', async ({page}) =>{

    await page.goto('https://www.ministryoftesting.com/');
    /*
Pasos de Prueba:

Navegar a la página principal del sitio web de Ministry of Testing.
Realizar acciones de navegación por categorías y etiquetas.
Verificar que todas las páginas se carguen correctamente.
Expectativas: Se espera que todas las páginas se carguen sin errores y que la navegación sea fluida.
*/

await page.getByRole('heading', { name: 'Co-creating Better Software Testing' }).click();
await page.locator('.bg-info').click();
await page.getByRole('heading', { name: 'Featured' }).click();
await page.locator('.card').first().click();
await page.getByRole('heading', { name: 'Events' }).click();
await page.getByRole('heading', { name: 'Courses' }).click();
await page.getByRole('heading', { name: 'Learning Journeys' }).click();
await page.getByRole('link', { name: 'View All' }).nth(3).click();
await page.locator('.navbar-brand').click();
//Resultado: [smoke test positivo]

})



test('Escenario 3: Navegación por publicaciones relacionadas', async ({page}) =>{

    await page.goto('https://www.ministryoftesting.com/')

    /*
Escenario 3: Navegación por publicaciones relacionadas
Objetivo: Verificar que los enlaces a publicaciones relacionadas funcionen correctamente y dirijan a las publicaciones correctas.

Precondiciones: El navegador debe estar configurado para realizar pruebas en el sitio web de Ministry of Testing.

Pasos de Prueba:

Navegar a una página de publicación en el sitio web de Ministry of Testing.
Realizar acciones de navegación por enlaces relacionados.
Verificar que los enlaces dirijan a las publicaciones correctas.
Expectativas: Se espera que todos los enlaces a publicaciones relacionadas funcionen correctamente.

Resultado: [Registrar aquí los resultados reales después de la ejecución de la prueba.]
    */

})