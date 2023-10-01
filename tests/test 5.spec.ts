/*
• Escenario 1: Agregar comentarios: Automatiza la creación y publicación de comentarios en una publicación 
y verifica que aparezcan correctamente.

• Escenario 2: Moderación de comentarios: Si tienes moderación de comentarios, 
verifica que los comentarios pendientes se muestren correctamente en el panel de moderación.

• Escenario 3: Respuestas a comentarios: Automatiza la creación de respuestas a comentarios 
y verifica que se muestren en el lugar correcto de la publicación.
*/

import {test, expect} from '@playwright/test'

test('Test 5', async ({page}) =>{
console.log('Test 5: Comentarios');

console.log('Se abre el navegador e Inicia el Test');
    await page.goto('https://www.ministryoftesting.com/');
    await page.pause()

    console.log('Se debe loguearse para hacer comentarios');
    await page.getByRole('link', { name: ' Sign In' }).click();
    await page.pause()
    await page.getByPlaceholder('Email or Username').click();
    await page.getByPlaceholder('Email or Username').fill('Mr.Bones');
    await page.getByPlaceholder('Email or Username').press('Tab');
    await page.getByPlaceholder('password').click();
    await page.getByPlaceholder('password').fill('3cwyjdyS$R$d6D!');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.pause()
await page.getByRole('link', { name: 'Community', exact: true }).click();
console.log('Se debe entrar al modulo comunidad para hacer comentarios');

await page.goto('https://club.ministryoftesting.com/login');
await page.goto('https://club.ministryoftesting.com/latest');
await page.pause()
// hay un bug porque no queda loggeado el usuario y se debe volver a hacer click en el boton de log in
//para poder ir a la opcion de 'My Post'
await page.getByRole('button', { name: 'Log In' }).click();
await page.pause()
console.log('Bug 1, nos debemos loguear otra vez');

console.log('Escenario 1: Agregar comentarios');
await page.getByRole('link', { name: 'My Posts' }).click();
await page.pause()
await page.getByRole('link', { name: 'api-testing', exact: true }).click();
await page.pause()
await page.getByRole('heading', { name: 'What are your strategies for working with and maintaining large Postman collections?' }).click();
await page.getByRole('button', { name: 'Reply', exact: true }).click();
await page.getByPlaceholder('Type here. Use Markdown, BBCode, or HTML to format. Drag or paste images.').click();
console.log('Entramo a un Post para hacer un comentario');

await page.getByPlaceholder('Type here. Use Markdown, BBCode, or HTML to format. Drag or paste images.').fill('this is a test\n');
await page.getByTitle('minimise the composer panel').click();
await page.goto('https://club.ministryoftesting.com/t/what-are-your-strategies-for-working-with-and-maintaining-large-postman-collections/70926');
await page.pause()
await page.getByRole('link', { name: 'My Posts' }).click();
console.log('Se hace el comentario con éxito');

console.log('Escenario 2: Moderación de comentarios');
await page.getByRole('link', { name: 'Drafts (1)' }).click();
await page.getByTitle('Remove').click();
await page.getByRole('button', { name: 'Yes' }).click();
await page.pause()
console.log('Escenario 3: Respuestas a comentarios');
console.log('Verificamos que esta el comentario y lo borramos');

await page.getByRole('button', { name: 'Mr Bones' }).click();
await page.locator('#user-menu-button-profile').click();
await page.getByRole('button', { name: '​ Sign Out' }).click();
await page.pause()
console.log('Nos deslogueamos');

    await page.pause()
    console.log('Se verifica el Test 5 correctamente');

    // Cierra el navegador
    await page.close();
    console.log('Se cierra el navegador y Finaliza el Test');


})