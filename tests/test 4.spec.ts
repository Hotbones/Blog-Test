
import {test, expect} from '@playwright/test'

test('Test 4: Búsquedas', async ({page}) =>{
console.log('Test 4: Búsquedas');

console.log('Escenario 1: Búsqueda con resultados precisos');
console.log('Se abre el navegador e Inicia el Test');
    await page.goto('https://www.ministryoftesting.com/');
    //1.	Navegar a la página de búsqueda
    await page.getByPlaceholder('Search...').click();
    await page.getByRole('button', { name: '' }).click();
    await page.pause()
    console.log('Se puede navegar correctamente');
    
    //2.	Realizar una búsqueda con criterios específicos
    await page.getByPlaceholder('Search MoT').click();
    await page.getByPlaceholder('Search MoT').fill('events of May');
    await page.getByPlaceholder('Search MoT').press('Enter');
    await page.pause()
    console.log('Cualquier búsqueda se puede realizar');

    //3.	Verificar los resultados de búsqueda
    await page.getByRole('link', { name: 'Weekly Events - March to May 2022 Review' }).isVisible()
    await page.getByRole('link', { name: 'Your Weekly Testing News - Issue 374' }).isVisible()
    await page.locator('#search_sort').isVisible()
    await page.pause()
    console.log('El resultado de la busqueda es correcto');

    //4.	Verificar la precisión de los resultados
// search n 1
    await page.getByPlaceholder('Search MoT').click();
    await page.getByPlaceholder('Search MoT').fill('weekly Events');
    await page.getByPlaceholder('Search MoT').press('Enter');
    await page.pause()
    console.log('Se verifica busqueda de eventos');
// search n 2
    await page.getByPlaceholder('Search MoT').click();
    await page.getByPlaceholder('Search MoT').fill('automation');
    await page.goto('https://www.ministryoftesting.com/search?q=automation&button=');
    await page.pause()
    console.log('Se verifica busqueda de palabra clave');
// search n 3
    await page.getByPlaceholder('Search MoT').click();
    await page.getByPlaceholder('Search MoT').fill('log out');
    await page.getByPlaceholder('Search MoT').press('Enter');
    await page.pause()
    console.log('Se verifica busqueda de palabra clave 2');
// search n 4
    await page.getByPlaceholder('Search MoT').click();
    await page.getByPlaceholder('Search MoT').fill('131354687');
    await page.getByPlaceholder('Search MoT').press('Enter');
    await page.getByRole('heading', { name: 'Sorry, no results found' }).isVisible()
    await page.pause()
    console.log('Se verifica busqueda errónea y su aviso de error');
// search n 5
    await page.getByPlaceholder('Search MoT').click();
    await page.getByPlaceholder('Search MoT').fill('ajsdkjaskjhd');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('heading', { name: 'Sorry, no results found' }).isVisible()
    await page.pause()
    console.log('Se verifica busqueda errónea N 2 y su aviso de error');

console.log('Escenario 2: Búsqueda interctuando en diferentes páginas');
await page.goto('https://www.ministryoftesting.com/');
await page.getByPlaceholder('Search...').click();
await page.pause()
await page.getByPlaceholder('Search...').fill('Events');
await page.getByPlaceholder('Search...').press('Enter');
await page.pause()
console.log('Se verifica busqueda correcta');
await page.getByRole('link', { name: 'Free 526' }).click();
await page.getByRole('link', { name: 'Panel Event - "Shifting Testing, Left or Right?"' }).click();
await page.pause()
console.log('Se verifica busqueda entre paginas n 1');

await page.getByRole('heading', { name: 'Panel Event - "Shifting Testing, Left or Right?"' }).isVisible()
await page.getByText('Shifting Testing, Left or Right - Over the last few years, testing has evolved f').isVisible()
await page.pause()
console.log('Se verifica busqueda entre paginas n 2');

await page.getByPlaceholder('Search...').click();
await page.getByPlaceholder('Search...').fill('API');
await page.getByPlaceholder('Search...').press('Enter');
await page.pause()
await page.getByRole('link', { name: 'Automated Security Testing Using ZAP Python API' }).click();
await page.getByRole('heading', { name: 'Automated Security Testing Using ZAP Python API' }).click();
await page.getByRole('heading', { name: 'References' }).click();
await page.pause()
console.log('Se verifica busqueda entre paginas n 3');

// Cierra el navegador
await page.close();
console.log('Se cierra el navegador y Finaliza el Test');

})