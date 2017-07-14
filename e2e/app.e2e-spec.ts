import { AniListPage } from './app.po';

describe('ani-list App', () => {
  let page: AniListPage;

  beforeEach(() => {
    page = new AniListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
