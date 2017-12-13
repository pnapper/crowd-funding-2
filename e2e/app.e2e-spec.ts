import { CrowdFundingCliPage } from './app.po';

describe('crowd-funding-cli App', () => {
  let page: CrowdFundingCliPage;

  beforeEach(() => {
    page = new CrowdFundingCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
