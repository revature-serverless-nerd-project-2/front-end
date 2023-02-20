import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TokenType } from '../redux/token';

function NavbarComponent() {

    const token: TokenType = useSelector((state: RootState) => state.token)

  return (
    <>
        <Navbar className="color-nav" variant='light'>
            <Container fluid>
            
              <Link style={{textDecoration:'none'}} to="/">
                <Navbar.Brand>RevBuy</Navbar.Brand>
              </Link>
              <Link style={{textDecoration:'none'}} to="/carts">
                <Navbar.Brand>Cart</Navbar.Brand>
              </Link>
              {
                token.role === 'Admin' ? <><Link style={{textDecoration:'none', color:'black'}} to='/logout' role='authlink'>Logout</Link>
                                          <Link style={{textDecoration:'none', color:'black'}} to='/add-product' role='authlink'>Add Product</Link> </>:
                token.role === 'Customer' ? <Link style={{textDecoration:'none', color:'black'}} to='/logout' role='authlink'>Logout</Link> :
                <Link style={{textDecoration:'none', color:'black'}} to='/login' role='authlink'>Login</Link>
              }
              {
                (token.role === "Admin" || token.role === "Customer") ?
                <Link style={{textDecoration:'none', color:'black'}} to='/profile'>Profile</Link> :
                null
              }
                <Link style={{textDecoration:'none', color:'black'}} to='/register'>Sign Up</Link>
            </Container>
        </Navbar>
    </>
  )
}

export default NavbarComponent