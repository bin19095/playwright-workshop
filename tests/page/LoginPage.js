exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page;
        this.loginLink="#login2";
        // this.usernameInput = '#loginusername';
        // this.passwordInput = '#loginpassword';
        this.loginButton = '//button[normalize-space()="Log in"]';
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async login(loginData, elementLocator){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(elementLocator.usernameInput).fill(loginData.userName);
        await this.page.locator(elementLocator.passwordInput).fill(loginData.userPassword);
        await this.page.locator(this.loginButton).click();

    }
}
