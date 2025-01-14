import { LinkpreviewMiddleware } from './linkpreview.middleware';

describe('LinkpreviewMiddleware', () => {
  it('should be defined', () => {
    expect(new LinkpreviewMiddleware()).toBeDefined();
  });
});
