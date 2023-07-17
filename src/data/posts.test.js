import {getPostsData} from './posts';

const defaultPost = {
  subTitle: 'Dicas para ajudar na sua carreira de desenvolvedor front-end.',
  title: '5 dicas para sua carreira profissional',
};
const zero = 0;

describe('getPostsData', () => {
  test('returns an array of posts', () => {
    const posts = getPostsData();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(zero);
  });

  test('each post in the array has the expected properties', () => {
    const posts = getPostsData();
    posts.forEach((post) => {
      expect(post).toHaveProperty('subTitle', defaultPost.subTitle);
      expect(post).toHaveProperty('title', defaultPost.title);
    });
  });
});
