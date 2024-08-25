import React from "react";
import IMG1 from "../../assets/jetbov.png";
import IMG2 from "../../assets/opt.png";
import "./twocards.css";

const TwoCards = () => {
  const twoProjects = [
    {
      id: 1,
      title: "Jetbov",
      img: IMG1,
      description:
        "Trabalhei por quase 2 anos como desenvolvedor frontend para uma das startups mais promissoras do agrotech.",
      technologies: "Vue, Nuxt.js, HTML, CSS, SASS, BEM, Javascript",
      link: "https://jetbov.com/",
    },
    {
      id: 2,
      title: "Option Growth",
      img: IMG2,
      description:
        "Prestei serviços de automações com chatbots de inteligência artificial voltados para o marketing digital",
      technologies: "",
      link: "https://optiongrowth.com.br/",
    },
  ];

  return (
    <section id="portfolio-two-cards">
      <h5>Meus trabalhos recentes</h5>
      <h2>Experiências de trabalho</h2>

      <div className="container portfolio__container-two-cards">
        {twoProjects.map((pro) => (
          <article className="portfolio__item-two-cards" key={pro.id}>
            <div className="portfolio__item-image-two-cards">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content-two-cards">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta-two-cards">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Site
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TwoCards;