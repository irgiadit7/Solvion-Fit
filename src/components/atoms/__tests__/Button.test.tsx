import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button'; 

describe('Button Component', () => {

  it('should render the button with the correct text', () => {

    render(<Button>Daftar</Button>);

    const buttonElement = screen.getByRole('button', { name: /Daftar/i });

    expect(buttonElement).toBeInTheDocument();
  });

  it('should have the primary variant style by default', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /Click Me/i });

    expect(buttonElement).toHaveClass('bg-blue-600');
  });

  it('should have the secondary variant style when specified', () => {
    render(<Button variant="secondary">Login</Button>);
    const buttonElement = screen.getByRole('button', { name: /Login/i });

    expect(buttonElement).toHaveClass('bg-transparent border');
  });

});