import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';

function BurgerButton() {
  const location = useLocation();
  const isMoviesRoute = location.pathname === '/movies';
  const isSavedMoviesRoute = location.pathname === '/saved-movies';
  const isProfileRoute = location.pathname === '/profile';

  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const lineStyles = {
    backgroundColor:
      isMoviesRoute || isSavedMoviesRoute || isProfileRoute ? '#000000' : '',
  };

  return (
    <div>
      <button
        type="button"
        className={`burgerButton ${isOpen ? 'open' : ''}`}
        onClick={toggleButton}
      >
        <span className="burgerButton-line" style={lineStyles}></span>
        <span className="burgerButton-line" style={lineStyles}></span>
        <span className="burgerButton-line" style={lineStyles}></span>
      </button>
      {isOpen && <BurgerMenu />}
    </div>
  );
}

export default BurgerButton;
