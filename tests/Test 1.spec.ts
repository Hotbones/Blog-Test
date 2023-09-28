import {test, expect} from '@playwright/test'
import { LoginPage } from './pageobject/object2.spec'

//Test of blog page
test('Ecenario 1', async ({page}) =>{

    await page.goto('https://www.ministryoftesting.com/')

    const login = new LoginPage(page)
    await login.loginWithCredentials('Mr.Bones', '3cwyjdyS$R$d6D!')
    await login.checkSuccessfulLogin()

})

test('Ecenario 2', async ({page}) =>{

    await page.goto('https://www.ministryoftesting.com/')

    const login = new LoginPage(page)
    await login.loginWithCredentials('Mr.Bones', '3cwyjdyS$R$d6D!')
    await login.checkSuccessfulLogin()

})

