import { DiscussionPortalFrontEndPage } from './app.po';

describe('discussion-portal-front-end App', () => {
  let page: DiscussionPortalFrontEndPage;

  beforeEach(() => {
    page = new DiscussionPortalFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
