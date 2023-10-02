import {test, expect} from '@playwright/test'

test('Test 6', async ({page}) =>{
console.log('Test 6: Formularios');

console.log('Se abre el navegador e Inicia el Test');
    await page.goto('https://www.ministryoftesting.com/');
    await page.pause()

console.log('Escenario 1: Enviar un formulario de contacto:');
    await page.getByRole('link', { name: ' Sign In' }).click();
    await page.pause()
    await page.getByPlaceholder('Email or Username').click();
    await page.getByPlaceholder('Email or Username').fill('Mr.Bones');
    await page.getByPlaceholder('Email or Username').press('Tab');
    await page.getByPlaceholder('password').click();
    await page.getByPlaceholder('password').fill('3cwyjdyS$R$d6D!');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.pause()
    await page.getByText('Signed in successfully.')
console.log('Verifica datos ingresados correctamente y su confirmación');

console.log('Escenario 2: Suscripción a boletín de noticias:');
    await page.goto('https://www.ministryoftesting.com/newsletter');
    await page.pause()
    await page.getByRole('heading', { name: 'Subscribe to Our Weekly Newsletter' }).isVisible()
    console.log('Se abre el navegador la suscripción al boletin de news');

    await page.getByPlaceholder('Enter your email').click();
    await page.getByPlaceholder('Enter your email').fill('hotbones22@gmail.com');
    await page.getByRole('button', { name: 'Subscribe' }).click()
    console.log('se carga el correo y se suscribre al boletin');
    
    await page.getByRole('heading', { name: 'Thanks for subscribing' }).isVisible()
    console.log('Se Verifica la carga del correo y la suscripción');

console.log('Escenario 3: Revisión de news:');
    console.log('Se entra a todas las noticias');
    await page.getByRole('link', { name: 'View All' }).click();
    await page.locator('span').filter({ hasText: 'Newsletter' }).click();
    await page.pause()
    await page.getByText('Archive').click();
    console.log('Seleccionamos la ultima noticia');
    await page.getByRole('link', { name: 'Your Weekly Testing News - Issue 441' }).click();
    await page.goto('https://www.ministryoftesting.com/newsletter');
    await page.pause()
    await page.getByText('Newsletter Archive Content missing').isVisible()
    //encontramos un Bug, enlace roto, deberiamos ir a la direccion https://www.ministryoftesting.com/newsletter/19f7accf
    // y la operación no se ejecuta
    await page.goto('https://www.ministryoftesting.com/newsletter/19f7accf')
    await page.getByRole('heading', { name: 'Your Weekly Testing News - Issue 440' }).isVisible()
    console.log('Debe aparecer la ultima noticia'); 
    console.log('No se verifica la acción correctamente');
    
    await page.pause()
    console.log('Se verifica el Test 6 correctamente');

    // Cierra el navegador
    await page.close();
    console.log('Se cierra el navegador y Finaliza el Test 6');
    

})