import { AppPage } from './app.po';
import {browser, By, logging, protractor} from 'protractor';

/*describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to psih-front!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});*/


// tslint:disable-next-line:only-arrow-functions
describe('add AppUser', function() {

  browser.get('http://localhost:4200/users');

  // tslint:disable-next-line:only-arrow-functions
  it('should render addorupdateuser page', function() {

// Checking the current url

    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:prefer-const
    let currentUrl = browser.driver.getCurrentUrl();

    expect(currentUrl).toMatch('/users');
    const addUser = browser.driver.findElement(By.name('addUser'));

    addUser.click();
  });

  // tslint:disable-next-line:only-arrow-functions
  it('should add User', function() {

// Find page elements

    const firstnameField = browser.driver.findElement(By.name('firstname'));
    const lastnameField = browser.driver.findElement(By.name('lastname'));
    const usernameField = browser.driver.findElement(By.name('username'));
    const emailField = browser.driver.findElement(By.name('email'));

// finding button to add user

    const addUserButton = browser.driver.findElement(By.name('addorupordateUser'));

// Fill input fields

    console.log('entering firstname');

    firstnameField.sendKeys('Momar Talla');

    console.log('entering lastname');

    lastnameField.sendKeys('KASSE');

    console.log('entering username');

    usernameField.sendKeys('kassepro');

    console.log('entering email');

    emailField.sendKeys('momartallakasse@gmail.com');

// Ensure fields contains what we've entered

    expect(firstnameField.getAttribute('value')).toEqual('Momar Talla');

    expect(lastnameField.getAttribute('value')).toEqual('KASSE');

    expect(usernameField.getAttribute('value')).toEqual('kassepro');

    expect(emailField.getAttribute('value')).toEqual('momartallakasse@gmail.com');

    console.log('clicking addUser button');

    addUserButton.submit();

    console.log('user added');

    browser.waitForAngular();

  });

});
