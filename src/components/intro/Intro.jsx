import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">

      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>3 anos de experiencia</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>50+ Projetos Completados</small>
            </article>
          </div>
          <p>
            Sou um desenvolvedor com 3 anos de experiência, desenvolvendo sites, landing pages, marketplaces, APIs. 
            Estou constantemente aprendendo e desenvolvendo minhas habilidades. 
            Sou comunicativo e prezo por uma boa relação com as pessoas. Já morei no exterior e tenho inglês fluente. 
           Tenho facilidade em lidar com ambientes de alta pressão.
            Procuro deixar uma marca positiva no mundo através da tecnologia.
            </p>
          <a href="#contact" className="btn btn-primary">Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default Intro