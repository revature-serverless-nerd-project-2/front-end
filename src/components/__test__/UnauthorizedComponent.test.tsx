import React from 'react';
import { render, screen } from '@testing-library/react';
import UnauthorizedComponent from '../UnauthorizedComponent';
import '@testing-library/jest-dom'

describe('UnauthorizedComponent', () => {
  test('renders the unauthorized alert', () => {
    render(<UnauthorizedComponent />);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('You are not authorized!');
    expect(alert).toHaveClass('alert-danger');
  });
});