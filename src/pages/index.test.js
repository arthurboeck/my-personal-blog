import '@testing-library/jest-dom/extend-expect';
import Home, {getStaticProps} from './index.js';
import {getPostsData} from '../data/posts.js';
import {render} from '@testing-library/react';

const dicasCarreira = {
  subTitle: 'Dicas para ajudar na sua carreira de desenvolvedor front-end.',
  title: '5 dicas para sua carreira profissional',
};

const melhoresPraticas = {
  subTitle: 'Como melhorar o desempenho do seu aplicativo React.',
  title: 'Melhores práticas de otimização em React',
};

jest.mock('../data/posts.js', () => ({
  getPostsData: jest.fn().mockResolvedValue([
    dicasCarreira,
    melhoresPraticas,
  ]),
}));

describe('Home', () => {
  test('calls getPostsData and passes the returned data to LastPostsSection', async () => {
    await getStaticProps({});
    render(<Home allPostsData={[]} />);
    expect(getPostsData).toHaveBeenCalled();
  });
});

describe('getStaticProps', () => {
  test('returns the correct props for the Home component', async () => {
    const {props} = await getStaticProps();
    expect(props).toHaveProperty('allPostsData');
    expect(Array.isArray(props.allPostsData)).toBe(true);
  });
});
