import { WeddingAppPage } from './app.po';

describe('wedding-app App', function() {
  let page: WeddingAppPage;

  beforeEach(() => {
    page = new WeddingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
