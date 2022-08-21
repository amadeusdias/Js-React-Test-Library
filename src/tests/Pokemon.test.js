import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Pokemon } from '../components';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('Testando o componente Pokemon', () => {
  test('a imagem do pokemon', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite
    />);
    const imagem = screen.getByAltText('Pikachu sprite');
    expect(imagem).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  test('imagem de favorito', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite
    />);
    const imagem2 = screen.getByAltText('Pikachu is marked as favorite');
    expect(imagem2).toHaveAttribute('src', '/star-icon.svg');
  });
  test('se é exibido o tipo de pokemon', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite
    />);
    const typeText = screen.getByText('Electric');
    expect(typeText).toBeInTheDocument();
  });
  test('testa se o link certo é renderizado na tela', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite
    />);
    const lin = screen.getByRole('link', { name: /more details/i });
    expect(lin).toHaveAttribute('href', '/pokemons/25');
  });
});
