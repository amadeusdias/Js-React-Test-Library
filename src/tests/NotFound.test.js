import React from 'react';
import { screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About', () => {
  test('Verificando Tags simmples', () => {
    renderWithRouter(<NotFound />);
    // const theUrl = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const title = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji' });
    const img = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );
    expect(title).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
