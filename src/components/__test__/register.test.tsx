import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../register/register";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Form, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import '@testing-library/jest-dom/extend-expect';


describe('Registration', () => {
    test('renders the registration page form', () => {
      render(
        <BrowserRouter>
        <Provider store={store}>
            <Register />
        </Provider>
        </BrowserRouter>
      );

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Re-enter Password');
    const nameInput = screen.getByPlaceholderText('Name');
    const addressInput = screen.getByPlaceholderText('Address');
    const registerButton = screen.getByRole('button', { name: 'Create Account' });
 
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
      })
    });

