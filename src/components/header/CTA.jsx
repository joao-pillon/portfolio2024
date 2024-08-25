import React from 'react';
import CV_JOAO_PILLON_DEV from '../../assets/CV-JOAO-PILLON-DEV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV_JOAO_PILLON_DEV} download className="btn">Currículo</a>
      <a href="https://whatsa.me/5555997105911/?t=Ol%C3%A1.%20tudo%20bem%20Jo%C3%A3o?" className="btn btn-primary">Contato</a>
    </div>
  )
}

export default CTA