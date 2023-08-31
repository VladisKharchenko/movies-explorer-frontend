import logo from '../../images/header-logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container-first">
        <div className="header__container-second">
          <img
            src={logo}
            className="header__logo"
            alt="Логотип в виде зеленого квадрата с закругленными углами внутри которого находиться белый улыбающийся смайлик без глаз"
          />
          <div>
            <Link to="/sign-up" className="header__login">
              Регистрация
            </Link>
            <Link to="/sign-in">
              <button className="header__button">Войти</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
