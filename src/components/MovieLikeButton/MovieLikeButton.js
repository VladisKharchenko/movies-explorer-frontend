import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import blackСross from '../../images/black-cross.svg';

function MovieLikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  const isSavedMoviesRoute = location.pathname === '/saved-movies';

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  let buttonContent;
  if (isSavedMoviesRoute) {
    buttonContent = (
      <img src={blackСross} alt="Черный крест повернутый под 45 градусов" />
    );
  } else {
    const innerButtonStyle = {
      backgroundColor: isLiked ? '#2BE080' : '#F9F9F9',
    };
    buttonContent = (
      <div className="movieLikeButton__inner" style={innerButtonStyle}></div>
    );
  }

  return (
    <button type="button" className="movieLikeButton" onClick={handleClick}>
      {buttonContent}
    </button>
  );
}

export default MovieLikeButton;
