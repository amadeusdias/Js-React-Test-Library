import React from 'react';
import { screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About', () => {
  test('Verificando Tags simmples', () => {
    renderWithRouter(<About />);
    const theUrl = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const title = screen.getByRole('heading', { name: 'About Pokédex' });
    const img = screen.getByRole('img', { src: theUrl });
    expect(title).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
