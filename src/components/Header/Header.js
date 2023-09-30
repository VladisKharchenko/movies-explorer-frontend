import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo.js';
import AccountButton from '../AccountButton/AccountButton.js';
import Navigation from '../Navigation/Navigation.js';
import BurgerButton from '../BurgerButton/BurgerButton.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function Header({}) {
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const isHomeRoute = location.pathname === '/';

  const headerStyle = {
    backgroundColor: isHomeRoute ? '#465DFF' : '#FFFFFF',
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header" style={headerStyle}>
      <div className="header__container-first">
        <div className="header__container-second">
          <Logo />
          {currentUser.email && !isSmallScreen && <Navigation />}
          <div>
            {currentUser.email ? (
              isSmallScreen ? (
                <BurgerButton />
              ) : (
                <AccountButton />
              )
            ) : (
              <>
                <Link to="/signup" className="header__login">
                  Регистрация
                </Link>
                <Link to="/signin">
                  <button type="button" className="header__button">
                    Войти
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
