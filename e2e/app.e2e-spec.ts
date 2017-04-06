import { OfficeUiPage } from './app.po';

describe('office-ui App', () => {
  let page: OfficeUiPage;

  beforeEach(() => {
    page = new OfficeUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
