import { Fire2bowyerPage } from './app.po';

describe('fire2bowyer App', function() {
  let page: Fire2bowyerPage;

  beforeEach(() => {
    page = new Fire2bowyerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
