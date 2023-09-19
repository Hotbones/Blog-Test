import {test, expect} from '@playwright/test'
import { LoginPage } from './pageobject/object2.spec'

//Test of blog page
test('Test 1', async ({page}) =>{

    await page.goto('https://smartbear.com/blog/')

    const login = new LoginPage(page)
    await login.loginWithCredentials('Mr.Bones', '3cwyjdyS$R$d6D!')
    await login.checkSuccessfulLogin()

})

test('Test 2', async ({page}) =>{

    await page.goto('https://smartbear.com/blog/')

    const login = new LoginPage(page)
    await login.loginWithCredentials('Mr.Bones', '3cwyjdyS$R$d6D!')
    await login.checkSuccessfulLogin()

})