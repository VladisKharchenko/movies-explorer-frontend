import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const isHomeRoute = location.pathname === '/';
  const isMoviesRoute = location.pathname === '/movies';
  const isSavedMoviesRoute = location.pathname === '/saved-movies';

  const textClass = isHomeRoute
    ? 'navigation__item-white'
    : 'navigation__item-black';

  return (
    <div className="navigation">
      <nav>
        <ul className="navigation__list">
          <Link
            to="/movies"
            className={`navigation__item ${
              isMoviesRoute ? 'active' : ''
            } ${textClass}`}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`navigation__item ${
              isSavedMoviesRoute ? 'active' : ''
            } ${textClass}`}
          >
            Сохранённые фильмы
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
