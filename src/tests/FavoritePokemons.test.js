import React from 'react';
import { screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Favorites', () => {
  test('Exibe a mensagem na tela', () => {
    renderWithRouter(<FavoritePokemons />);
    const menssage = screen.getByText('No favorite pokemon found');
    expect(menssage).toBeInTheDocument();
  });
});
