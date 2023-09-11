import portfolioLinkImg from '../../images/portfolio-link-img.svg'

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__link-container">
          <a
            className="portfolio__title-link"
            href="https://vladiskharchenko.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="portfolio__link-title">Статичный сайт</h3>
          </a>
          <a
            href="https://vladiskharchenko.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={portfolioLinkImg}
              className="portfolio__link-img"
              alt="Изображение черной стрелки повернутой направо вверх под 45 градусов"
            />
          </a>
        </div>
        <div className="portfolio__line"></div>
        <div className="portfolio__link-container">
          <a
            className="portfolio__title-link"
            href="https://vladiskharchenko.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="portfolio__link-title">Адаптивный сайт</h3>
          </a>
          <a
            href="https://vladiskharchenko.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={portfolioLinkImg}
              className="portfolio__link-img"
              alt="Изображение черной стрелки повернутой направо вверх под 45 градусов"
            />
          </a>
        </div>
        <div className="portfolio__line"></div>
        <div className="portfolio__link-container">
          <a
            className="portfolio__title-link"
            href="https://ciganru.nomoreparties.co/sign-in"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="portfolio__link-title">Одностраничное приложение</h3>
          </a>
          <a
            href="https://ciganru.nomoreparties.co/sign-in"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={portfolioLinkImg}
              className="portfolio__link-img"
              alt="Изображение черной стрелки повернутой направо вверх под 45 градусов"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
