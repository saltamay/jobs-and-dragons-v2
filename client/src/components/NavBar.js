import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';
import { useAuth0 } from '../react-auth0-spa';
import logo from '../assets/J&D_Logo_BG_K.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  useEffect(() => {
    if (isAuthenticated) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isAuthenticated]);

  return (
    <nav>
      <div className='nav-wrapper grey darken-4'>
        <a href='/' className='brand-logo left' style={{ maxWidth: '300px' }}>
          <img
            style={NavbarLogoStyle}
            className='responsive-img'
            src={logo}
            alt='logo'
          />
        </a>
        <ul className='right'>
          <li to='/'>
            <Link to='/'>
              <h5>HOME</h5>
            </Link>
          </li>
          {!isOpen ? (
            <li
              to='/'
              id='qsLoginBtn'
              onClick={() => {
                loginWithRedirect({});
              }}
            >
              <Link to='/'>
                <h5>LOGIN</h5>
              </Link>
            </li>
          ) : (
            <>
              <li to='/profile'>
                <Link to='/profile'>
                  <h5>PROFILE</h5>
                </Link>
              </li>
              <li
                to='/logout'
                id='qsLogoutBtn'
                onClick={() => {
                  logoutWithRedirect();
                }}
              >
                <Link to='/'>
                  <h5>LOGOUT</h5>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

const NavbarLogoStyle = {
  width: '70%',
  maxWidth: '100',
  marginTop: '10px',
  marginLeft: '10px',
};

export default NavBar;
