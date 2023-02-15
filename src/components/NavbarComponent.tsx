import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

function NavbarComponent() {

    const token: string = useSelector((state: RootState) => state.token)
    
  return (
    <>
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
    </>
  )
}

export default NavbarComponent