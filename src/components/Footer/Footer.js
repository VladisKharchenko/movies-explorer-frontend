function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__line"></div>
        <div className="footer__main-part">
          <p className="footer__copyright">© 2023</p>
          <nav>
            <ul className="footer__navigation-list">
              <li className="footer__navigation-item">
                <a
                  href="https://practicum.yandex.ru/"
                  className="footer__navigation-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__navigation-item">
                <a
                  href="https://github.com/VladisKharchenko"
                  className="footer__navigation-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
