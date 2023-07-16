import { render, screen } from '@testing-library/react';
import LastPostsSection from './last-posts';

const simpleDataList = [
  {
    subTitle: 'Sub Title 1',
    title: 'Post 1',
  },
];

const completeDataList = [
  {
    subTitle: 'Sub Title 1',
    title: 'Post 1',
  },
  {
    subTitle: 'Sub Title 2',
    title: 'Post 2',
  },
  {
    subTitle: 'Sub Title 3',
    title: 'Post 3',
  },
];

describe('LastPostsSection', () => {
  test('renders section with correct heading', () => {
    render(<LastPostsSection dataList={simpleDataList} />);

    const heading = screen.getByTestId('last-posts-section').firstChild;
    expect(heading.textContent).toBe('Últimas do blog');
  });

  test('renders list of post titles', () => {
    render(<LastPostsSection dataList={completeDataList} />);

    const post1Title = screen.getByText('Post 1');
    const post2Title = screen.getByText('Post 2');
    const post3Title = screen.getByText('Post 3');
    expect(post1Title).toBeTruthy();
    expect(post2Title).toBeTruthy();
    expect(post3Title).toBeTruthy();
  });

  test('renders "Ver tudo" link', () => {
    render(<LastPostsSection dataList={simpleDataList} />);

    const link = screen.getByTestId('list-all');
    expect(link).not.toBeNull();
  });
});
