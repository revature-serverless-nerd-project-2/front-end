import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsComponent from '../ProductsComponent';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

test('renders product card', () => {
  const product = {
    product_id: 1,
    name: 'Product 1',
    price: 9.99,
    quantity: 5,
    imageUrl: 'product1.jpg',
  };
  render(<BrowserRouter><ProductsComponent product={product} /> </BrowserRouter>);

  const productName = screen.getByText(product.name);
  const productPrice = screen.getByText(`$${product.price}`);
  const addToCartButton = screen.getByRole('button');

  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
  expect(addToCartButton).toBeInTheDocument();

  const link = screen.getByTestId('product-link');
  expect(link).toHaveAttribute('href', `/product/${product.product_id}`);

  const link2 = screen.getByTestId('product-link2');
  expect(link2).toHaveAttribute('href', `/product/${product.product_id}`);
});