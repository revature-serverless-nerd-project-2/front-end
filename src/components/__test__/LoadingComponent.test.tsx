import React from 'react';
import { render, screen} from '@testing-library/react';
import LoadingComponent from '../LoadingComponent';
import '@testing-library/jest-dom'

describe('LoadingComponent', () => {
  it('should render a card with a placeholder image', () => {
    render(<LoadingComponent />);
    const card = screen.getByRole('card');
    const image = screen.getByRole('img');

    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();

  });

  it('should render a placeholder button', () => {
    render(<LoadingComponent />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
