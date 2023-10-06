import {chromium, devices, test} from '@playwright/test'

test('Test 8', async () => {

console.log('Inicia Test 8 - Dispositivos móviles:');
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
    console.log('Se verifica ampliar y reducir la pantalla');

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

console.log('Se verifica el escenario 1 correctamente');


console.log('Escenario 2: Comprobación de velocidad de carga');

    console.log('Se navega en la pagina de cada dispositivo');

    const page1 = await context.newPage();
try {

// Realiza las pruebas de velocidad de carga
console.log(`Inicia el test de velocidad de carga del dispoitivo ${device}`)

// Inicia el cronómetro antes de cargar la página
const startTime = new Date().getTime();

// Navega a la página del blog
await page1.goto('https://www.ministryoftesting.com/');
await page1.pause()

// Detén el cronómetro después de que la página se haya cargado completamente
const endTime = new Date().getTime();

// Mide el tiempo de carga en milisegundos
const loadTime = endTime - startTime;
    console.log(`Tiempo de carga: ${loadTime} ms, del dispositivo ${device}`);

// Verifica la velocidad de carga
const maxLoadTime = 5000; // 5 segundos

    if (loadTime <= maxLoadTime) {
    console.log(`La página se cargó de manera rápida y eficiente. ${device} passed`);
    } else {
    console.log(`La página se cargó lentamente. ${device} No passed`);
    }

} catch (error) {
    // Maneja cualquier error que pueda ocurrir al abrir el dispositivo
    console.error(`Error al abrir el dispositivo ${device}: ${error.message}`);
} finally {
    await page1.close();
}
}
    console.log('Finaliza el Test 8 ');
})



