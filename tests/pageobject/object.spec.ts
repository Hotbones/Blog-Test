//https://www.youtube.com/watch?v=cxBRyfnwkkk&list=PLeo6Q1inqlOdzwuW6ivlX_95682PfsGGG&index=12
import { Locator, Page, expect } from '@playwright/test'

// localization
export class LoginPage {
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginTextbox: Locator
    private readonly shoppingCartIcon: Locator
    private readonly itemTextbox: Locator

//object constrution 
    constructor(page: Page) {
        this.usernameTextbox = page.getByRole('textbox', {name:'Username'})
        this.passwordTextbox = page.getByRole('textbox', {name:'Password'})
        this.loginTextbox = page.getByRole('button', {name:'Login'})
        this.shoppingCartIcon = page.locator("xpath=//a[contains(@class, 'shopping_cat_link')]")
        this.itemTextbox = page.getByRole('textbox', {name:'Item'})
    }
    

// interaccion del object
// option 1
/*async fillUsername() {
    await this.usernameTextbox.fill('standard_user')
}*/

//option 2
async fillUsername(username:string){
    await this.usernameTextbox.fill(username)
}
//option 1
/*async fillPassword() {
    await this.passwordTextbox.fill('secret_sauce')
}*/

//option 2
async fillPassword(password:string){
    await this.passwordTextbox.fill(password)
}
    
async clickLogin() {
    await this.loginTextbox.click()
}


// option 3
async loginWithCredentials(username: string, password:string){
    await this.fillUsername(username)
    await this.fillPassword(password)
    await this.clickLogin()
}

async checkSuccessfulLogin(){
    await this.shoppingCartIcon.isVisible()
}

async fillItem(item:string){
    await this.itemTextbox.fill(item)
    }

// option buy by Item x
async BuyItem(itemname: string){
    await this.fillItem(itemname)
}

}
