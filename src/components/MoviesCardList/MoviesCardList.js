import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
  const location = useLocation();

  const isMoviesRoute = location.pathname === '/movies';
  const isSavedMoviesRoute = location.pathname === '/saved-movies';

  const paddingBottomStyle = isSavedMoviesRoute
    ? { paddingBottom: '170px' }
    : {};

  return (
    <ul className="moviesCardList" style={paddingBottomStyle}>
      {isMoviesRoute && (
        <>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
        </>
      )}
      {isSavedMoviesRoute && (
        <>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
          <li className="moviesCardList__item">
            <MoviesCard />
          </li>
        </>
      )}
    </ul>
  );
}

export default MoviesCardList;
