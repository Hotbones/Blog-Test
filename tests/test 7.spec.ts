import {test, expect, devices} from '@playwright/test'
import { chromium, firefox, webkit } from 'playwright';

test('Test 7', async () => {
  
console.log('Inicia Test 7: Compatibilidad con navegadores:');
  const browserChrome = await chromium.launch();
  const browserFirefox = await firefox.launch();
  //const browserEdge = await webkit.launch();

  try {
    console.log('Escenario 1: Ejecución en los diferentes browsers');
    console.log('Se abre los navegadores e Inicia el Test');
    const pageChrome = await browserChrome.newPage();
    await pageChrome.pause()
    const pageFirefox = await browserFirefox.newPage();
    await pageFirefox.pause()
    /*const pageEdge = await browserEdge.newPage();
    await pageEdge.pause()*/

    console.log('Se navega en la página de ministryoftesting');
    await pageChrome.goto('https://www.ministryoftesting.com/');
    
    await pageFirefox.goto('https://www.ministryoftesting.com/');
    
    /*await pageEdge.goto('https://www.ministryoftesting.com/');
    await pageEdge.pause()*/
    // no se puede verificar en edge porque el emulador no carga la pagina.

    // Cierra las páginas de los navegadores
    await pageChrome.close();
    await pageFirefox.close();
    //await pageEdge.close();

  } finally {
    // Cierra los navegadores al finalizar
    await browserChrome.close();
    await browserFirefox.close();
   // await browserEdge.close();
  console.log('Se cierran los navegadores y finaliza el escenario 1');
  }

console.log('Inicia el Escenario 2: Pruebas de diseño responsive');
console.log('Se agregan los dispositivos a probar');

const devicesToTest = [
  'iPhone SE',
  'iPhone XR',
  'iPhone 12 Pro',
  'Pixel 5',
  'Samsung Galaxy S8+',
  'Samsung Galaxy S20 Ultra',
  'iPad Air',
  'iPad Mini',
  'Surface Pro 7',
  'Samsung Galaxy A51/71'
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
    await page.close();
    // Registra en la consola o en un archivo que el dispositivo se abrió correctamente
    console.log(`Dispositivo ${device} se abrió correctamente.`);
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir al abrir el dispositivo
    console.error(`Error al abrir el dispositivo ${device}: ${error.message}`);
  } finally {
    await page.close();
  }
  }
  console.log('Se verifica el escenario 2 correctamente');
  console.log('Finaliza el Test 7 correctamente');
})
//https://www.youtube.com/watch?v=NBHDp-QvGBQ