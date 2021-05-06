import React from 'react';
import './Header.css';
import Menu from '../menu/Menu';
import Logo from '../logo/logo';


const Header = () => {
  return ( 
    <>
    <header className="top-header">
      <Logo/>
        <Menu/>
    </header>
    </>
  )
}
    


export default Header;