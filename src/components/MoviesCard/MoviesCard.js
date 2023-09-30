import { useContext } from 'react';
import MovieLikeButton from '../MovieLikeButton/MovieLikeButton.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function MoviesCard({ movie, onAddMovie, onDeleteMovie, isLiked, location }) {
  const imageUrl = `${
    location === 'movies'
      ? 'https://api.nomoreparties.co' + movie.image.url
      : movie.image
  }`;
  const duration = `${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`;
  const currentUser = useContext(CurrentUserContext);
  const movieId = movie.id ? movie.id : movie.movieId;
  const isLikedMovie = isLiked(movieId);

  const handleClick = () => {
    if (isLikedMovie) {
      onDeleteMovie(movieId);
    } else {
      onAddMovie({
        country: movie.country,
        director: movie.director,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        owner: currentUser._id,
        movieId: movie.id,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
    }
  };

  return (
    <div className="card">
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          className="card__img"
          alt={`Обложка фильма ${movie.nameRU}`}
        ></img>
      </a>
      <div className="card__heading-container">
        <h2 className="card__heading">{movie.nameRU}</h2>
        <MovieLikeButton
          movie={movie}
          handleClick={handleClick}
          isLiked={isLikedMovie}
          location={location}
        />
      </div>
      <p className="card__time">{duration}</p>
    </div>
  );
}

export default MoviesCard;
