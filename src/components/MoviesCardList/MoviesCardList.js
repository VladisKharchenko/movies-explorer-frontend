import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({
  displayedMovies,
  onAddMovie,
  onDeleteMovie,
  isLiked,
  location,
}) {
  return (
    <section>
      <ul
        className={`moviesCardList ${
          location === 'savedMovies' ? 'moviesCardList_type_savedMovies' : ''
        }`}
      >
        {displayedMovies.map((movie) => (
          <li
            className="moviesCardList__item"
            key={movie.id ? movie.id : movie.movieId}
          >
            <MoviesCard
              movie={movie}
              onAddMovie={onAddMovie}
              onDeleteMovie={onDeleteMovie}
              isLiked={isLiked}
              location={location}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
