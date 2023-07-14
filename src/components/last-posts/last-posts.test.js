import { render, screen } from '@testing-library/react';
import LastPostsSection from './last-posts';

describe('LastPostsSection', () => {
  test('renders section with correct heading', () => {
    const dataList = [{ title: 'Post 1', subTitle: 'Sub Title 1' }];
    render(<LastPostsSection dataList={dataList} />);

    const heading = screen.getByTestId('last-posts-section').firstChild;
    expect(heading.textContent).toBe('Últimas do blog');
  });

  test('renders list of post titles', () => {
    const dataList = [
      { title: 'Post 1', subTitle: 'Sub Title 1' },
      { title: 'Post 2', subTitle: 'Sub Title 2' },
      { title: 'Post 3', subTitle: 'Sub Title 3' },
    ];
    render(<LastPostsSection dataList={dataList} />);

    const post1Title = screen.getByText('Post 1');
    const post2Title = screen.getByText('Post 2');
    const post3Title = screen.getByText('Post 3');
    expect(post1Title).toBeTruthy();
    expect(post2Title).toBeTruthy();
    expect(post3Title).toBeTruthy();
  });

  test('renders "Ver tudo" link', () => {
    const dataList = [{ title: 'Post 1', subTitle: 'Sub Title 1' }];
    render(<LastPostsSection dataList={dataList} />);

    const link = screen.getByTestId('list-all');
    expect(link).not.toBeNull();
  });
});
