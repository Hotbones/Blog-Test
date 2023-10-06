/*
• Escenario 1: Escaneo de vulnerabilidades conocidas: Utiliza herramientas de escaneo de seguridad 
junto con Playwright para buscar vulnerabilidades conocidas en tu blog, como inyecciones de SQL o ataques XSS.
• Escenario 2: Pruebas de autenticación segura: Verifica que la autenticación de usuarios esté 
implementada de  manera segura y que no haya riesgos de ataques de fuerza bruta.
• Escenario 3: Pruebas de autorización: Asegúrate de que los usuarios solo puedan
acceder a áreas autorizadas de tu blog y que no existan problemas de autorización incorrecta.
*/

/*BLOCKEQDO POR FALTA DE ACCESOS LEGALES */
import {chromium, test} from '@playwright/test'
import { spawn } from 'child_process';
import * as fs from 'fs';
test('Test 9', async () => {

    console.log('Inicia Test 9 - Escaneo de vulnerabilidades');

  // Inicia Playwright
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navega a la página del blog
  await page.goto('https://www.ministryoftesting.com');
  await page.pause()

  // Guarda la URL de la página objetivo
  const targetURL = page.url();

  // Inicia OWASP ZAP
  const zapProcess = spawn('zap.sh', ['-daemon']);
  
  // Espera a que OWASP ZAP se inicie (puede llevar un tiempo)
  await new Promise(resolve => setTimeout(resolve, 10000));

  // Inicia el escaneo con OWASP ZAP
  const zapScanner = spawn('zap-cli', ['--zap-url', 'http://localhost:8080', 'quick-scan', targetURL]);
  
  // Espera a que finalice el escaneo
  await new Promise<void>(resolve => {
    zapScanner.on('close', code => {
      if (code === 0) {
        console.log('Escaneo completado con éxito.');
      } else {
        console.error('Error en el escaneo.');
      }
      resolve();
    });
  });

  // Guarda el informe del escaneo
  const zapReport = spawn('zap-cli', ['--zap-url', 'http://localhost:8080', 'report', 'html', '-o', 'zap-report.html']);
  await new Promise<void>(resolve => {
    zapReport.on('close', code => {
      if (code === 0) {
        console.log('Informe de escaneo guardado.');
      } else {
        console.error('Error al generar el informe.');
      }
      resolve();
    });
  });

  // Cierra Playwright y OWASP ZAP
  await browser.close();
  zapProcess.kill();

  console.log('Finaliza test 9');
})