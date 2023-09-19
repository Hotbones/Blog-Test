import {test, expect} from '@playwright/test'
import { LoginPage } from './pageobject/object.spec'

test('purchase an item', async ({page}) =>{

    await page.goto('https://www.saucedemo.com/')

    /*await page.getByRole('textbox', {name:'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce')
    await page.getByRole('button', {name:'Login'}).click()*/

    const objetos = new LoginPage(page)
    //option 1 without string
    /* await objetos.fillUsername()*/

    //option 2 with string
    await objetos.fillUsername('standard_user')

    //option 1 without string
    /*await objetos.fillPassword()*/

    //option 2 with string
    await objetos.fillPassword('secret_sauce')
    await objetos.clickLogin()

    const itemsCotainer = await page.locator('#inventory_container .inventory_item').all()

    const randomIndex = Math.floor(Math.random() * itemsCotainer.length)

    const randomItem = itemsCotainer[randomIndex]
    
    const expectedName = await randomItem.locator('.inventory_item_name').innerText()
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText()
    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText()
    
    console.log(`Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDescription} )`)

    await randomItem.getByRole('button', {name:'Add to cart'}).click()

    await page.locator('a.shopping_cart_link').click()

    await page.pause()

    expect(page.getByRole('button' , {name: 'Checkout'})).toBeVisible()

    const actualName = await page.locator('.inventory_item_name').innerText()
    const actualDescription = await page.locator('.inventory_item_desc').innerText()
    const actualPrice = await page.locator('.inventory_item_price').innerText()


    expect(actualName).toEqual(expectedName)
    expect(actualPrice).toEqual(expectedPrice)
    expect(actualDescription).toEqual(expectedDescription)
    
    await page.pause()
})

test('other user2', async ({page}) =>{

    await page.goto('https://www.saucedemo.com/')

    const objetos = new LoginPage(page)
    await objetos.fillUsername('locked_out_user')
    await objetos.fillPassword('secret_sauce')
    await objetos.clickLogin()

})

test('other user3', async ({page}) =>{

    await page.goto('https://www.saucedemo.com/')

    const objetos = new LoginPage(page)
    await objetos.fillUsername('problem_user')
    await objetos.fillPassword('secret_sauce')
    await objetos.clickLogin()
    await objetos.checkSuccessfulLogin() //ejemplo 1
    
})

//option 3 little lines of codes
test('other user4', async ({page}) =>{

    await page.goto('https://www.saucedemo.com/')

    const login = new LoginPage(page)
    await login.loginWithCredentials('performance_glitch_user', 'secret-sauce')
    await login.checkSuccessfulLogin() //ejemplo 2

    /*    //option of buy by Item 'x'
        const buyItem = new LoginPage(page)
        await buyItem.BuyItem('#item_3_title_link')*/

})