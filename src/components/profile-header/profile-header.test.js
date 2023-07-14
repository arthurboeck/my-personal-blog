import { render, screen } from '@testing-library/react';
import ProfileHeader from './profile-header';
import '@testing-library/jest-dom/extend-expect';

describe('ProfileHeader', () => {
  test('renders profile header for home', () => {
    render(<ProfileHeader home={true} />);

    // Assert that the image is rendered
    const image = screen.getByRole('img', { name: /Arthur Guterres Boeck/i });
    expect(image).toBeTruthy();

    // Assert that the heading is rendered
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /Arthur Guterres Boeck/i,
    });
    expect(heading).toBeTruthy();
  });
});
