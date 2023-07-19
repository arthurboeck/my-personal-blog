import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ProfileHeader from './profile-header';

beforeEach(() => {
  render(<ProfileHeader />);
});

describe('ProfileHeader', () => {
  test('renders profile header', () => {
    const profileHeader = screen.getByTestId('profile-header');
    expect(profileHeader).toBeInTheDocument();
  });

  test('renders profile image', () => {
    const profileImage = screen.getByRole(
        'img',
        { name: /Arthur Guterres Boeck/u },
    );

    expect(profileImage).toBeInTheDocument();
  });

  test('renders profile name', () => {
    const data = {
      level: 1,
      name: /Arthur Guterres Boeck/u,
    };

    const profileName = screen.getByRole(
        'heading',
        data,
    );

    expect(profileName).toBeInTheDocument();
  });
});
