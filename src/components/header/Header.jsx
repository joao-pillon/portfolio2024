import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Olá me chamo</h5>
        <h1>João Pedro Ferreira Pillon</h1>
        <h2 className="text-light">Desenvolvedor Frontend</h2>
        <CTA />
        <a href="#contact" className="scroll__down"> @joao-pillon </a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header