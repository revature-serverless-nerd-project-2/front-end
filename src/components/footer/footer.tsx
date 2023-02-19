import react from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          We are here to help with anything electronic!
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about-us'>About Us</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Orders</h2>
            <Link to='/previous-orders'>Previous Orders</Link>
            <Link to='/'>Cart</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              RevBuy
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>RevBuy © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;