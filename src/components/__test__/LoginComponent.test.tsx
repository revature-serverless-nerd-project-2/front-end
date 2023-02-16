import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginComponent from '../LoginComponent';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'


describe('LoginComponent', () => {
  test('renders the login form', () => {
    render(
      <BrowserRouter>
        <LoginComponent />
      </BrowserRouter>
    );
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const signInButton = screen.getByRole('button', { name: 'Sign In' });
    const registerLink = screen.getByRole('link', { name: 'Register' });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });
});