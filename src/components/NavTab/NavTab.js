function NavTab() {
  return (
    <section className="navtab">
      <div className="navtab__container">
        <nav>
          <ul className="navtab__list">
            <li>
              <a href="#1" className="navtab__link">
                О проекте
              </a>
            </li>
            <li>
              <a href="#2" className="navtab__link">
                Технологии
              </a>
            </li>
            <li>
              <a href="#3" className="navtab__link">
                Студент
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default NavTab;
