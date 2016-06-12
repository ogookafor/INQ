import { InqPage } from './app.po';

describe('inq App', function() {
  let page: InqPage;

  beforeEach(() => {
    page = new InqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('inq works!');
  });
});
