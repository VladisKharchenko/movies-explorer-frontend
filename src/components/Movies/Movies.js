import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ButtonMore from '../ButtonMore/ButtonMore';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { getShortMovies } from '../../utils/utils';

function Movies({
  onAddMovie,
  onDeleteMovie,
  isLiked,
  movies,
  isLoading,
  onSearch,
  displayedMovies,
  onMoreButton,
  notFoundMoviesText,
}) {
  const [shortMovies, setShortMovies] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    const shortMovies = getShortMovies(movies);
    setShortMovies(shortMovies);
  }, [movies]);

  useEffect(() => {
    const localToggle = localStorage.getItem('toggle');
    if (localToggle) {
      setIsToggle(true);
    }
  }, []);

  function handleChangeToggle() {
    if (isToggle) {
      setIsToggle(false);
      localStorage.removeItem('toggle');
    } else {
      setIsToggle(true);
      localStorage.setItem('toggle', 'true');
    }
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm
          onSearch={onSearch}
          onToggle={handleChangeToggle}
          isToggle={isToggle}
          name="movies"
        />
        {isLoading && <Preloader />}
        {notFoundMoviesText && (
          <p className="not-found-movies-text">{notFoundMoviesText}</p>
        )}
        <MoviesCardList
          displayedMovies={
            isToggle ? shortMovies : movies.slice(0, displayedMovies)
          }
          onAddMovie={onAddMovie}
          onDeleteMovie={onDeleteMovie}
          isLiked={isLiked}
          location="movies"
        />
        {displayedMovies !== movies.length && !isToggle && (
          <ButtonMore onClick={onMoreButton} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
