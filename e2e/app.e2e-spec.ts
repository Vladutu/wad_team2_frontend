import { WadTeam2FontendPage } from './app.po';

describe('wad-team2-fontend App', function() {
  let page: WadTeam2FontendPage;

  beforeEach(() => {
    page = new WadTeam2FontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
