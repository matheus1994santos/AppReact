import React from 'react';
import './Header.css';
import Button from '../buttom/Button';
import Logo from '../logo/logo';


const Header = () => {
  return ( 
    <>
    <header className="top-header">
      <Logo/>
        <Button/>
    </header>
    </>
  )
}
    


export default Header;