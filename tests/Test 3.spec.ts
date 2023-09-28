import {test, expect} from '@playwright/test'
import { chromium } from 'playwright';

// en este test se evaluan los cookies a traves de una cookie en especia y despues se toman
//todas las cookies que se encuentran en la pagina
test('Escenario 1', async ({page}) => {
  
  // Navega a la página web
  await page.goto('https://www.ministryoftesting.com/');

  // Define una cookie
const cookie = {
    name: '_ga_JE9XC6P8X3', // ejemploCookie
    value: 'KITBmzc39jOPo76XCLf6VjpD7ufz%2FI80Pn%2BOqT4rxDwnSQdfukXZ6A4OvUxbhthQ9EgMjtOO19c91%2BEAHjx%2F7MkW9dTOMWxgcHNZ%2FzDQLRvxAEY7eTcXfbUup2WCw4vtfxcUy%2FSJJ7uZ2I9fGVRrReinR%2BzHWx4Yi3K6NHbDiR7rEkfGurPmNa7s0cEW1d1UQkCgRzKtUoteXh3Yf9YM0G1jQFns7uNM6Bn4iEaiOdXOP7stv1OjgcilKdbqCAa%2BObwiFuCCGQTZDiAlEsYuKKBmHp%2BS--OcqC1ZDfMwluyH8X--qTcqochkxsy0dxy5fjYsag%3D%3D', // valorCookie
    domain: '.ministryoftesting.com', // Reemplaza con el dominio correcto
    path: '/',
    expires: Math.floor(Date.now() / 1000) + 3600, // Expira en 1 hora
    httpOnly: false, // Si la cookie es httpOnly
    secure: false, // Si la cookie es segura (HTTPS)
    sameSite: false , // Nivel de restricción de SameSite
};

  // Establece la cookie en la página
  const cookieString = `${cookie.name}=${cookie.value}; Domain=${cookie.domain}; Path=${cookie.path}; Expires=${new Date(cookie.expires * 1000).toUTCString()};`;

  // Establece la cookie en la página utilizando page.evaluate()
await page.evaluate((cookieString) => {
    document.cookie = cookieString;
}, cookieString);

 // Imprime la cookie en la consola
console.log('La Cookie esta definida correctamente:', cookieString);

})
test('Escenario 2', async ({page}) => {

  // Navega a una URL donde la cookie se aplicará
  await page.goto('https://www.ministryoftesting.com/');

  // Obtén todas las cookies de la página
  const cookies = await page.evaluate(() => {
    const cookiesArray = document.cookie.split(';').map(cookie => {
      const [name, value] = cookie.trim().split('=');
      return { name, value };
    });
    return cookiesArray;
  });

  // Obtiene el número de cookies
  const numberOfCookies = cookies.length;

   // Imprime el número de cookies en la consola
  console.log('Número de cookies en la página:', numberOfCookies);

  // Imprime las cookies en la consola
  console.log('Todas las cookies de la página:', cookies);
  

  // Realiza otras acciones de prueba según sea necesario

})

test('Escenario 3', async ({page}) => {

  // Navega a una URL donde la cookie se aplicará
  await page.goto('https://www.ministryoftesting.com/learn');

  // Obtén todas las cookies de la página
  const cookies = await page.evaluate(() => {
    const cookiesArray = document.cookie.split(';').map(cookie => {
      const [name, value] = cookie.trim().split('=');
      return { name, value };
    });
    return cookiesArray;
  });

  // Obtiene el número de cookies
  const numberOfCookies = cookies.length;

   // Imprime el número de cookies en la consola
  console.log('Número de cookies en la página:', numberOfCookies);

  // Imprime las cookies en la consola
  console.log('Todas las cookies de la página:', cookies);

})

test('Escenario 4', async ({page}) => {

  // Navega a una URL donde la cookie se aplicará
  await page.goto('https://www.ministryoftesting.com/events');

  // Obtén todas las cookies de la página
  const cookies = await page.evaluate(() => {
    const cookiesArray = document.cookie.split(';').map(cookie => {
      const [name, value] = cookie.trim().split('=');
      return { name, value };
    });
    return cookiesArray;
  });

  // Obtiene el número de cookies
  const numberOfCookies = cookies.length;

   // Imprime el número de cookies en la consola
  console.log('Número de cookies en la página:', numberOfCookies);

  // Imprime las cookies en la consola
  console.log('Todas las cookies de la página:', cookies);

})

test('Escenario 5', async ({page}) => {

  // Navega a una URL donde la cookie se aplicará
  await page.goto('https://club.ministryoftesting.com/');

  // Obtén todas las cookies de la página
  const cookies = await page.evaluate(() => {
    const cookiesArray = document.cookie.split(';').map(cookie => {
      const [name, value] = cookie.trim().split('=');
      return { name, value };
    });
    return cookiesArray;
  });

  // Obtiene el número de cookies
  const numberOfCookies = cookies.length;

   // Imprime el número de cookies en la consola
  console.log('Número de cookies en la página:', numberOfCookies);

  // Imprime las cookies en la consola
  console.log('Todas las cookies de la página:', cookies);


})