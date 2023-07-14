import { render, screen } from '@testing-library/react';
import ProfileInfo from './profile-info';
import '@testing-library/jest-dom/extend-expect';

describe('ProfileInfo', () => {
    test('renders profile information correctly', () => {
        render(<ProfileInfo />);

        // Seleciona o elemento usando getByTestId
        const section = screen.getByTestId('profile-info');

        // Realize asserções no elemento selecionado
        expect(section).toBeInTheDocument();
        expect(section.tagName).toBe('SECTION');

        // Seleciona os parágrafos dentro do elemento section usando getByText
        const paragraphs = screen.getAllByText(/.+/);

        // Realize asserções nos parágrafos selecionados
        expect(paragraphs.length).toBe(2);
        expect(paragraphs[0]).toHaveTextContent('Formado em Sistemas de Informação em 2019');
        expect(paragraphs[1]).toHaveTextContent('Gosto de aprender novos conhecimentos e realizar experimentos com novas tecnologias.');
    });
});