import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/joao-pillon" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://www.github.com/joao-pillon" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://whatsa.me/5555997105911" target="_blank" rel="noreferrer" ><FaWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials