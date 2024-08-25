import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">@joao-pillon</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#portfolio">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/joao-pillon/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://www.github.com/joao-pillon" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://whatsa.me/5555997105911" target="_blank" rel="noreferrer" ><FaWhatsapp /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2022</small>
      </div>
    </footer>
  )
}

export default Footer