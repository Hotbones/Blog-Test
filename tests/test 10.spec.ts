/*
• Escenario 2: Reproducción de videos: Verifica que los videos se reproduzcan
sin problemas y que la calidad de reproducción sea adecuada.
• Escenario 3: Optimización de imágenes: Comprueba si las imágenes se optimizan
adecuadamente para reducir el tiempo de carga.
*/

import {chromium, test} from '@playwright/test'

test('Test 10', async () => {

    console.log('Inicia Test 10 - Rendimiento de carga de imágenes y videos');

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

  // Navega a la página del blog donde deseas realizar las pruebas
    console.log('Inicia el navegador');
    await page.goto('https://www.ministryoftesting.com/');
    await page.pause()

  // Selecciona una imagen de gran tamaño (puedes ajustar el selector según tu HTML)
    console.log('Selecciona la imagen 1');
    const imageSelector = '.position-relative > img';
    const imageSelector1 = '.rounded > a'
    const imageSelector2 = 'div:nth-child(2) > .card > .rounded > a'

    // Mide el tiempo de carga de la imagen
    console.log('Se mide el tiempo de carga la imagen 2');
    const startTime = Date.now();
    await page.waitForSelector(imageSelector);
    const loadTime = Date.now() - startTime;

  // Verifica que la imagen se haya cargado dentro de un tiempo razonable (por ejemplo, en menos de 5 segundos)
    console.log('se verifica la carga de la imagen 2');
    if (loadTime < 5000) {
    console.log('La imagen se cargó eficientemente en', loadTime, 'milisegundos.');
    }
    else {
    console.error('La imagen tardó demasiado en cargarse:', loadTime, 'milisegundos.');
    }

    console.log('Se mide el tiempo de carga la imagen 3');
    const startTime1 = Date.now();
    await page.waitForSelector(imageSelector1);
    const loadTime1 = Date.now() - startTime1;

  // Verifica que la imagen se haya cargado dentro de un tiempo razonable (por ejemplo, en menos de 5 segundos)
    console.log('se verifica la carga de la imagen 2');
    if (loadTime1 < 5000) {
    console.log('La imagen se cargó eficientemente en', loadTime1, 'milisegundos.');
    }
    else {
    console.error('La imagen tardó demasiado en cargarse:', loadTime1, 'milisegundos.');
    }

    console.log('Se mide el tiempo de carga la imagen 3');
    const startTime2 = Date.now();
    await page.waitForSelector(imageSelector2);
    const loadTime2 = Date.now() - startTime2;

  // Verifica que la imagen se haya cargado dentro de un tiempo razonable (por ejemplo, en menos de 5 segundos)
    console.log('se verifica la carga de la imagen 3');
    if (loadTime2 < 5000) {
    console.log('La imagen se cargó eficientemente en', loadTime2, 'milisegundos.');
    }
    else {
    console.error('La imagen tardó demasiado en cargarse:', loadTime2, 'milisegundos.');
    }
    
    console.log('Finaliza el escenario 1');

    console.log('Inicia el escenario 2');

      // Navega a la página del sitio web
    await page.goto('https://www.ministryoftesting.com/');
    await page.pause()
      // Espera a que se cargue la página y las imágenes
    await page.waitForLoadState('domcontentloaded');
    
      // Evalúa la optimización de las imágenes
    const imageElements = await page.$$('.position-relative > img');
    let optimizedImages = 0;
    
    for (const imgElement of imageElements) {
        const networkMetrics = await imgElement.evaluate((img) => {
        const resource = (img as HTMLImageElement).src;
        const performance = window.performance.getEntriesByName(resource);
        return performance.length > 0 ? performance[0] : null;
        });

    }    
      // Verifica si las imágenes se han optimizado adecuadamente
    if (optimizedImages === imageElements.length) {
        console.log('Todas las imágenes se han optimizado adecuadamente.');
    } else {
        console.error('No todas las imágenes se han optimizado adecuadamente.');
    }
    console.log('Finaliza escenario 2');
    
    
    console.log('Finaliza el test 10 ');
  // Cierra el navegador
    await browser.close();
})
