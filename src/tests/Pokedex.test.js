import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pokedex } from '../pages';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('Testando a Pokedex', () => {
  test('testa os botões', () => {
    renderWithRouter(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ {
        [pokemons[0].id]: false,
        [pokemons[1].id]: false,
      } }
    />);
    const seven = 2;
    const button1 = screen.getByRole('button', { name: /electric/i });
    expect(button1).toBeInTheDocument();
    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons).toHaveLength(seven);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);
  });
});
