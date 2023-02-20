import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import store from '../../redux/store';
import CheckoutComponent from '../CheckoutComponent';


describe('CheckoutComponent', () => {
  test('renders the checkout form', () => {
    render(
      <BrowserRouter>
      <Provider store={store}>
          <CheckoutComponent />
      </Provider>
      </BrowserRouter>
      
    );
    const FirstnameInput = screen.getByLabelText('Firstname');
    const LastnameInput = screen.getByLabelText('Lastname');
    // const usernameInput = screen.getByLabelText('username');
    const EmailInput = screen.getByLabelText('Email');
    const AddressInput = screen.getByLabelText('Address');
    const Address2Input = screen.getByLabelText('Address2');
    const CityInput = screen.getByLabelText('City');
    const StateInput = screen.getByLabelText('State');
    const ZipInput = screen.getByLabelText('Zip');
    const PlaceOrderButton = screen.getByRole('button', { name: 'Place Order' });
    
    expect(FirstnameInput).toBeInTheDocument();
    expect(LastnameInput).toBeInTheDocument();
    // expect(usernameInput).toBeInTheDocument();
    expect(EmailInput).toBeInTheDocument();
    expect(LastnameInput).toBeInTheDocument();
    expect(AddressInput).toBeInTheDocument();
    expect(Address2Input).toBeInTheDocument();
    expect(CityInput).toBeInTheDocument();
    expect(StateInput).toBeInTheDocument();
    expect(ZipInput).toBeInTheDocument();
    expect(PlaceOrderButton).toBeInTheDocument();
   
  });
});