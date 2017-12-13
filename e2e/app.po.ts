import { browser, element, by } from 'protractor';

export class CrowdFundingCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
