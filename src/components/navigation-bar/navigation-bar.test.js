import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import NavigationBar from './navigation-bar';

describe('NavigationBar', () => {
  test('renders links correctly', () => {
    render(<NavigationBar />);
    const blogLink = screen.getByText('Blog');
    const aboutLink = screen.getByText('Sobre');
    const descriptionLink = screen.getByText('Descrição');

    expect(blogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(descriptionLink).toBeInTheDocument();
  });
});
