// Create methods for every element for the page to avoid stringly typed
class login {
    async email() {
        return await page.$('input[type="email"]')
    }
    async password_fill(test) {
        return await page.type('input[type="password"]', test) // pass password as a parameter
    }
    async signInButton_click() {
        return await page.click("form >> 'Sign in'")
    }
}
module.exports = login