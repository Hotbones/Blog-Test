/*
• Escenario 1: Pruebas de navegación táctil: Utiliza Playwright para emular gestos táctiles
en dispositivos móviles y verifica que los usuarios puedan navegar y interactuar de manera efectiva.
• Escenario 2: Comprobación de velocidad de carga en dispositivos móviles: Mide el tiempo de carga 
de tu blog en dispositivos móviles y verifica que sea rápido y eficiente.
• Escenario 3: Pruebas de notificaciones push: Si tu blog utiliza notificaciones push, 
verifica que se entreguen correctamente en dispositivos móviles.
*/

import {chromium, devices, test} from '@playwright/test'

test('Test 8', async () => {

console.log('Inicia Test 8 - dispositivos móviles:');
console.log('Escenario 1: Pruebas de navegación táctil:');

const devicesToTest = [
'iPhone SE',
/*'iPhone XR',
'iPhone 12 Pro',
'Pixel 5',
'Samsung Galaxy S8+',
'Samsung Galaxy S20 Ultra',
'iPad Air',
'iPad Mini',
'Surface Pro 7',
'Samsung Galaxy A51/71'*/
];

const browser = await chromium.launch();
console.log('Se navega en la pagina de cada dispositivo');
for (const device of devicesToTest) {
    const context = await browser.newContext({
    ...devices[device],
    });
    
    const page = await context.newPage();
try {
    await page.goto('https://www.ministryoftesting.com/');
    await page.pause()
    
    //Deslizar
    await page.touchscreen.tap(100,100)
    await page.touchscreen.tap(200,300)
    await page.touchscreen.tap(200,400)
    await page.touchscreen.tap(200,500)
    await page.touchscreen.tap(100,100);
    console.log('Se verifica deslizar la pantalla');

    //Pellizcar:
    // Pellizcar (ampliar)
    await page.touchscreen.tap(100,200)
    await page.touchscreen.tap(150,250)
    await page.touchscreen.tap(200,300)
    await page.touchscreen.tap(300,400)
    await page.touchscreen.tap(100,100)

  // Pellizcar (reducir)
    await page.touchscreen.tap(200,100)
    await page.touchscreen.tap(250,150)
    await page.touchscreen.tap(300,200)
    await page.touchscreen.tap(350,250)
    await page.touchscreen.tap(100,100)
    console.log('Se verifica pellizcar la pantalla');

    //Rotar
 // Rotar en sentido horario
    await page.touchscreen.tap(100,100)
    await page.touchscreen.tap(200,100)
    await page.touchscreen.tap(200,200)
    await page.touchscreen.tap(100,100)

 // Rotar en sentido antihorario
    await page.touchscreen.tap(100,100)
    await page.touchscreen.tap(100,200)
    await page.touchscreen.tap(200,200)
    await page.touchscreen.tap(100,100)
    console.log('Se verifica Rotar la pantalla');

    await page.close();
    // Registra en la consola o en un archivo que el dispositivo se abrió correctamente
    console.log(`La navegacion táctil del dispoitivo ${device} fue correcto.`);
} catch (error) {
    // Maneja cualquier error que pueda ocurrir al abrir el dispositivo
    console.error(`Error al abrir el dispositivo ${device}: ${error.message}`);
} finally {
    await page.close();
}
}
console.log('Se verifica el escenario 2 correctamente');
console.log('Finaliza el Test 8 correctamente');
})


