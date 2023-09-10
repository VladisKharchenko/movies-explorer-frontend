import movieImage from '../../images/movie-img.png';
import MovieLikeButton from '../MovieLikeButton/MovieLikeButton.js';

function MoviesCard() {
  return (
    <div className="card">
      <img src={movieImage} className="card__img" alt="Обложка фильма"></img>
      <div className="card__heading-container">
        <p className="card__heading">33 слова о дизайне</p>
        <MovieLikeButton />
      </div>
      <p className="card__time">1ч42м</p>
    </div>
  );
}

export default MoviesCard;
