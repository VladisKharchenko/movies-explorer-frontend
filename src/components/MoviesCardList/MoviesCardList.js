import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
  const location = useLocation();

  const isMoviesRoute = location.pathname === '/movies';
  const isSavedMoviesRoute = location.pathname === '/saved-movies';

  const paddingBottomStyle = isSavedMoviesRoute ? { paddingBottom: '170px' } : {};

  return (
    <div className="moviesCardList" style={paddingBottomStyle}>
      {isMoviesRoute && (
        <>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </>
      )}
      {isSavedMoviesRoute && (
        <>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
