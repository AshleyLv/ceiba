import { CeibaPage } from './app.po';

describe('ceiba App', function() {
  let page: CeibaPage;

  beforeEach(() => {
    page = new CeibaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
