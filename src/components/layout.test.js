import { render, screen } from '@testing-library/react';
import Layout, { siteTitle } from './layout';
import '@testing-library/jest-dom/extend-expect';

describe('Layout', () => {
    test('renders navigation bar', () => {
        render(<Layout />);
        const navigationBar = screen.getByTestId('navigation-bar');
        expect(navigationBar).toBeInTheDocument();
    });

    test('renders profile header', () => {
        render(<Layout />);
        const profileHeader = screen.getByTestId('profile-header');
        expect(profileHeader).toBeInTheDocument();
    });

    test('renders profile info', () => {
        render(<Layout />);
        const profileInfo = screen.getByTestId('profile-info');
        expect(profileInfo).toBeInTheDocument();
    });

    test('renders main content', () => {
        render(<Layout>Content</Layout>);
        const mainContent = screen.getByText('Content');
        expect(mainContent).toBeInTheDocument();
    });
});
