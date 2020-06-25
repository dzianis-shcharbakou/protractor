const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { expect } = chai;

const firstNumber = element(by.model('first'));
const secondNumber = element(by.model('second'));
const goButton = element(by.id('gobutton'));
const latestResult = element(by.binding('latest'));

describe('Protractor Demo App', () => {
  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).to.eventually.equal('Super Calculator');
  });

  it('should add one and two', () => {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).to.eventually.equal('3');
  });

  it('should add four and six', () => {
    // Fill this in.
    expect(latestResult.getText()).to.eventually.equal('0');
  });

  it('should read the value from an input', () => {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).to.eventually.equal('1');
  });
});
