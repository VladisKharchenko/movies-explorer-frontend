import { Link } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton.js';

function BurgerMenu() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="burgerMenu">
        <div className="burgerMenu__container">
          <ul className="burgerMenu__list">
            <li className="burgerMenu__item">
              <Link to="/" className="burgerMenu__link">
                Главная
              </Link>
            </li>
            <li className="burgerMenu__item">
              <Link to="/movies" className="burgerMenu__link">
                Фильмы
              </Link>
            </li>
            <li className="burgerMenu__item">
              <Link to="/saved-movies" className="burgerMenu__link">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <AccountButton />
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
