import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function Movies() {
  return (
    <div>
      <SearchForm />
      <MoviesCardList />
      <Preloader />
    </div>
  );
}
export default Movies;
