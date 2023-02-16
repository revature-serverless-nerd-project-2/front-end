import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import NavbarComponent from '../NavbarComponent';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

afterEach(cleanup);

describe('Navbar Component', ()=> {
    test('Navbar Component works as intended', () => {
    render(<Provider store={store}>
            <BrowserRouter>
                <NavbarComponent/>
            </BrowserRouter>
        </Provider>);
    const linkElement = screen.getByText(/RevBuy/i);
    expect(linkElement).toBeInTheDocument();
});

test('Login is shown when token is valid', () => {
    render(<Provider store={store}>
            <BrowserRouter>
                <NavbarComponent/>
            </BrowserRouter>
        </Provider>);
    const linkElement = screen.getByRole("authlink");
    expect(linkElement).toHaveTextContent('Login');
});

})

