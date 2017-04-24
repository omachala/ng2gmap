import { BrigadyPage } from './app.po';

describe('brigady App', () => {
  let page: BrigadyPage;

  beforeEach(() => {
    page = new BrigadyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
