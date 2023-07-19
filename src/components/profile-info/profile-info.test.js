import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ProfileInfo from './profile-info';

const paragraphSize = 2;
const firstParagraph = 0;
const secondParagraph = 1;
const firstParagraphContent = 'Formado em Sistemas de Informação em 2019';
const secondParagraphContent = 'Gosto de aprender novos conhecimentos e realizar experimentos com novas tecnologias.';

describe('ProfileInfo', () => {
  test('renders profile information correctly', () => {
    render(<ProfileInfo />);

    // Seleciona o elemento usando getByTestId
    const section = screen.getByTestId('profile-info');

    // Realize asserções no elemento selecionado
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');

    // Seleciona os parágrafos dentro do elemento section usando getByText
    const paragraphs = screen.getAllByText(/.+/u);

    // Realize asserções nos parágrafos selecionados
    expect(paragraphs).toHaveLength(paragraphSize);
    expect(paragraphs[firstParagraph]).toHaveTextContent(firstParagraphContent);
    expect(paragraphs[secondParagraph]).toHaveTextContent(secondParagraphContent);
  });
});
