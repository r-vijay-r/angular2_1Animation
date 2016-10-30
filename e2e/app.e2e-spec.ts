import { Angular21AnimationPage } from './app.po';

describe('angular2-1-animation App', function() {
  let page: Angular21AnimationPage;

  beforeEach(() => {
    page = new Angular21AnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
