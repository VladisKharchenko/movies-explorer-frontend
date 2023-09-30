import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import { useEffect, useState } from 'react';
import { getShortMovies } from '../../utils/utils.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function SavedMovies({ displayedMovies, onDeleteMovie, isLiked, onSearch }) {
  const [shortMovies, setShortMovies] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    const shortMovies = getShortMovies(displayedMovies);
    setShortMovies(shortMovies);
  }, [displayedMovies]);

  function handleChangeToggle() {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
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
        />
        {displayedMovies.length === 0 ? (
          <p className="savedMovies__nothing-text">Ничего не найдено</p>
        ) : (
          <MoviesCardList
            displayedMovies={isToggle ? shortMovies : displayedMovies}
            onDeleteMovie={onDeleteMovie}
            isLiked={isLiked}
            location="savedMovies"
          />
        )}
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
