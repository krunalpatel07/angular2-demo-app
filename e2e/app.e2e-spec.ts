import { Angular2PractiseAppPage } from './app.po';

describe('angular2-practise-app App', () => {
  let page: Angular2PractiseAppPage;

  beforeEach(() => {
    page = new Angular2PractiseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
