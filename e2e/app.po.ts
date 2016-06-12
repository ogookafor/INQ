export class InqPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('inq-app h1')).getText();
  }
}
