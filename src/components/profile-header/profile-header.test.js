import { render, screen } from '@testing-library/react';
import ProfileHeader from './profile-header';
import '@testing-library/jest-dom/extend-expect';

describe('ProfileHeader', () => {
  describe('ProfileHeader', () => {
    test('renders profile header', () => {
      render(<ProfileHeader />);
      const profileHeader = screen.getByTestId('profile-header');
      expect(profileHeader).toBeInTheDocument();
    });

    test('renders profile image', () => {
      render(<ProfileHeader />);
      const profileImage = screen.getByRole('img', { name: /Arthur Guterres Boeck/i });
      expect(profileImage).toBeInTheDocument();
    });

    test('renders profile name', () => {
      render(<ProfileHeader />);
      const profileName = screen.getByRole('heading', { level: 1, name: /Arthur Guterres Boeck/i });
      expect(profileName).toBeInTheDocument();
    });
  });
});