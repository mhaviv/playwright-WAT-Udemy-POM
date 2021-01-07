Login = require('../pageObjects/login');


describe('Post', () => {

  const login = new Login()

  beforeAll(async () => {
    await page.goto('https://react-redux.realworld.io/#/login')
  })

  test('Sign In', async () => {
    const title = await page.title()
    expect(title).toBe('Conduit')

    // Enter credentials to sign in
    const email = await login.email()
    await email.fill('qacamp.acad@gmail.com') // using email method from login class
    await email.press('Tab')
    await login.password_fill('test12345') // using password_fill method from login class and filling parameter with password
    await login.signInButton_click()

    // Verify successful sign in
    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch('Your Feed')
  })

  afterAll(async () => {
    await browser.close()
  })

})