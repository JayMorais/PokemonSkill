import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import { HeaderContainer, logoContainer, NavHeader } from '../styles';

const Navbar = () => {
  return (
    <HeaderContainer>
      <NavHeader>
        <img
          alt="logo"
          src={logo}
          style={{
            position: 'absolute',
            width: '159px',
            height: '60px',
            left: '157px',
            top: '14px',
          }}
        />
      </NavHeader>
      <div>
        <Link to="/">Home</Link>
        <Link to="/lista-pokemon">Pokémons</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </HeaderContainer>
  );
};
export default Navbar;
