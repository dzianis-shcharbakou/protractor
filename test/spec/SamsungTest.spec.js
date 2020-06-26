const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const EC = protractor.ExpectedConditions;

chai.use(chaiAsPromised);
const { expect } = chai;

const singInButton = element(by.css('div.personal-menu a'));
const headerText = element(by.css('h1.header'));
const headerTextRegistration = element(by.css('div.scenario-step__item_active h2.header'));
const registrationButton = element(by.cssContainingText('div.popup-links p > span', 'Зарегистрироваться'));
const phoneNumberInput = element(by.name('phone'));
const pinNumberInputs = element.all(by.name('number'));
const wrongPinText = element(by.cssContainingText('app-form-error', 'Неверный ПИН-код.'));

// const goButton = element(by.id('gobutton'));
// const latestResult = element(by.binding('latest'));

describe('Samsung RF tests "Sing in" button', () => {
  beforeEach(async () => {
    await browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    await browser.get('');
    await singInButton.click();
  });

  it('Check h1', async () => {
    const isPresent = await browser.isElementPresent(headerText);
    const text = await headerText.getText();
    await expect(isPresent).to.true;
    await expect(text).to.equal('Вход');
  });

  it('Check registration h2', async () => {
    await browser.wait(EC.presenceOf(registrationButton), 5000, '');
    await registrationButton.click();
    await browser.wait(EC.presenceOf(headerTextRegistration), 5000, '');
    const isPresent = await browser.isElementPresent(headerTextRegistration);
    const text = await headerTextRegistration.getText();
    await expect(isPresent).to.true;
    await expect(text).to.equal('Регистрация');
  });

  it('Check phone number input', async () => {
    await phoneNumberInput.sendKeys('454 534-55-34');
    await pinNumberInputs.each((el, index) => {
      el.sendKeys(index);
    });

    await browser.wait(EC.visibilityOf(wrongPinText), 5000, '');
    const isPresent = await browser.isElementPresent(wrongPinText);
    await expect(isPresent).to.true;
  });

  // it('should add one and two', () => {
  //   firstNumber.sendKeys(1);
  //   secondNumber.sendKeys(2);

  //   goButton.click();

  //   expect(latestResult.getText()).to.eventually.equal('3');
  // });

  // it('should add four and six', () => {
  //   // Fill this in.
  //   expect(latestResult.getText()).to.eventually.equal('0');
  // });

  // it('should read the value from an input', () => {
  //   firstNumber.sendKeys(1);
  //   expect(firstNumber.getAttribute('value')).to.eventually.equal('1');
  // });
});
