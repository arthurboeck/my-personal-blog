import { render } from '@testing-library/react';
import Home, { getStaticProps } from './index.js';
import { getPostsData } from '../data/posts.js';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../data/posts.js', () => ({
    getPostsData: jest.fn().mockResolvedValue([
        {
            subTitle: 'Dicas para ajudar na sua carreira de desenvolvedor front-end.',
            title: '5 dicas para sua carreira profissional',
        },
        {
            subTitle: 'Como melhorar o desempenho do seu aplicativo React.',
            title: 'Melhores práticas de otimização em React',
        },
    ]),
}));

describe('Home', () => {
    test('calls getPostsData and passes the returned data to LastPostsSection', async () => {
        await getStaticProps({});
        render(<Home allPostsData={[]} />);
        expect(getPostsData).toHaveBeenCalledTimes(1);
    });
});

describe('getStaticProps', () => {
    test('returns the correct props for the Home component', async () => {
        const { props } = await getStaticProps();
        expect(props).toHaveProperty('allPostsData');
        expect(Array.isArray(props.allPostsData)).toBe(true);
    });
});