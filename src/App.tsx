import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import NavbarComponent from './components/NavbarComponent';
import ProductComponent from './components/ProductComponent';
import AddProductComponent from './components/AddProductComponent';
import CartComponent from './components/CartComponent';




function App() {

  return (
    <BrowserRouter>
      <div>
        <header>
          <NavbarComponent/>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomeComponent/>}/>
              <Route path='/product/:id' element={<ProductComponent/>}/>
              <Route path='/login' element={<LoginComponent/>}/>
              <Route path='/add-product' element={<AddProductComponent/>}/>
              <Route path='/carts' element={<CartComponent/>}/>
            </Routes>
          </Container>
            
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
