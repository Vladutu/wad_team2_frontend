import { WadTeam2FrontendPage } from './app.po';

describe('wad-team2-frontend App', function() {
  let page: WadTeam2FrontendPage;

  beforeEach(() => {
    page = new WadTeam2FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
