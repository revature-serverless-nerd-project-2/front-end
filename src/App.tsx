import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import ProductComponent from './components/ProductComponent';
import { RootState } from './redux/store';



function App() {

  const token: string = useSelector((state: RootState) => state.token)
  console.log(token)

  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar className="color-nav" variant='light'>
            <Container fluid>
              <Link style={{textDecoration:'none'}} to="/">
                <Navbar.Brand>RevBuy</Navbar.Brand>
              </Link>
              {
                token ? <Link style={{textDecoration:'none', color:'black'}} to='/'>Logout</Link> :
                <Link style={{textDecoration:'none', color:'black'}} to='/login'>Login</Link>
              }
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomeComponent/>}/>
              <Route path='/product/:id' element={<ProductComponent/>}/>
              <Route path='/login' element={<LoginComponent/>}/>
            </Routes>
          </Container>
            
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
