import blackСross from '../../images/black-cross.svg';

function MovieLikeButton({ handleClick, isLiked, location }) {
  return (
    <button type="button" className="movieLikeButton" onClick={handleClick}>
      {location === 'savedMovies' ? (
        <img src={blackСross} alt="Черный крест повернутый под 45 градусов" />
      ) : (
        <div
          className={`movieLikeButton__inner ${
            isLiked ? 'movieLikeButton__inner_liked' : ''
          }`}
        ></div>
      )}
    </button>
  );
}

export default MovieLikeButton;
