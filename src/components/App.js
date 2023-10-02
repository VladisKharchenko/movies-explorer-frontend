import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import Main from './Main/Main.js';
import Movies from './Movies/Movies.js';
import SavedMovies from './SavedMovies/SavedMovies.js';
import Profile from './Profile/Profile.js';
import Register from './Register/Register.js';
import Login from './Login/Login.js';
import NotFoundPage from './NotFoundPage/NotFoundPage.js';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import {
  register,
  login,
  checkToken,
  logout,
  addMovie,
  deleteMovie,
  changeProfile,
  getSavedMovies,
} from '../utils/MainApi.js';
import { getMovies } from '../utils/MoviesApi.js';
import { getFilterMovies } from '../utils/utils.js';
import {
  NEXT_MOVIES_1280,
  NEXT_MOVIES_480,
  NEXT_MOVIES_768,
  START_MOVIES_1280,
  START_MOVIES_480,
  START_MOVIES_768,
  WINDOW_1280,
  WINDOW_480,
  initialCurrentUser,
} from '../utils/constants.js';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);
  const [notFoundSavedMoviesText, setNotFoundSavedMoviesText] = useState('');
  const [notFoundMoviesText, setNotFoundMoviesText] = useState('');
  const [isSearchedSavedMovies, setIsSearchedSavedMovies] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesCounter, setMoviesCounter] = useState(0);
  const [nextLoadingMoviesCounter, setNextLoadingMoviesCounter] = useState(0);
  const [displayedMoviesCounter, setDisplayedMoviesCounter] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const checkTokenAndSetUser = useCallback(() => {
    return checkToken()
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        navigate(location.pathname, { replace: true });
        return getSavedMovies();
      })
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
        const localMovies = JSON.parse(localStorage.getItem('searchedMovies'));
        if (localMovies) {
          setSearchedMovies(localMovies);
          const [startMovies] = getMoviesCounter();
          setDisplayedMoviesCounter(startMovies);
        }
      })
      .catch(console.error);
  }, [location.pathname, navigate]);

  useEffect(() => {
    resizeUserWindow();
    checkTokenAndSetUser();
    window.addEventListener('resize', resizeUserWindow);
    return () => {
      window.removeEventListener('resize', resizeUserWindow);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setIsSearchedSavedMovies(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (
      location.pathname === '/profile' ||
      location.pathname === '/signup' ||
      location.pathname === '/signin'
    ) {
      setSubmitMessage('');
    }
  }, [location.pathname]);

  const handleSubmitSearchedMovies = (keyword) => {
    let filteredMovies = [];
    if (allMovies.length === 0) {
      setIsLoading(true);
      getMovies()
        .then((data) => {
          setAllMovies(data);
          filteredMovies = getFilterMovies(data, keyword);
          setSearchedMovies(filteredMovies);
          localStorage.setItem(
            'searchedMovies',
            JSON.stringify(filteredMovies)
          );
          localStorage.setItem('keyword', keyword);
          setNotFoundMoviesText('');
          if (filteredMovies.length === 0) {
            setNotFoundMoviesText('Ничего не найдено');
          }
          if (filteredMovies.length <= moviesCounter) {
            setDisplayedMoviesCounter(filteredMovies.length);
          } else {
            setDisplayedMoviesCounter(moviesCounter);
          }
        })
        .catch((error) => {
          console.error('Ошибка при загрузке фильмов:', error);
          setNotFoundMoviesText(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
          );
          setSearchedMovies([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filteredMovies = getFilterMovies(allMovies, keyword);
      setSearchedMovies(filteredMovies);
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('keyword', keyword);
      setNotFoundMoviesText('');
      if (filteredMovies.length === 0) {
        setNotFoundMoviesText('Ничего не найдено');
      }
      if (filteredMovies.length <= moviesCounter) {
        setDisplayedMoviesCounter(filteredMovies.length);
      } else {
        setDisplayedMoviesCounter(moviesCounter);
      }
    }
  };

  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    register(name, email, password)
      .then(() => {
        handleLogin(email, password);
        setSubmitMessage('');
      })
      .catch((error) => {
        setSubmitMessage(error);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogin = (email, password) => {
    setIsLoading(true);
    login(email, password)
      .then(() => {
        setSubmitMessage('');
        return checkTokenAndSetUser();
      })
      .then(() => {
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        setSubmitMessage(error);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.clear();
        setIsLoggedIn(false);
        setCurrentUser(initialCurrentUser);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleEdit(state) {
    setIsEditing(state);
  }

  const isLiked = (movieId) => {
    return savedMovies.some((movie) => movie.movieId === movieId);
  };

  const handleAddLike = (movie) => {
    addMovie(movie)
      .then((newCard) => {
        setSavedMovies((state) => [...state, newCard]);
      })
      .catch((error) => {
        console.error(`Ошибка при добавлении лайка: ${error}`);
      });
  };

  const handleRemoveLike = (movieId) => {
    const movie = savedMovies.find((film) => film.movieId === movieId);
    deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((film) => film.movieId !== movieId)
        );
        setSearchedSavedMovies((state) =>
          state.filter((film) => film.movieId !== movieId)
        );
      })
      .catch((error) => {
        console.error(`Ошибка при удалении лайка: ${error}`);
      });
  };

  function handleSubmitSearchSavedMovies(text) {
    const filteredMovies = getFilterMovies(savedMovies, text);
    setIsSearchedSavedMovies(true);
    if (filteredMovies.length === 0) {
      setNotFoundSavedMoviesText('Ничего не найдено');
      setSearchedSavedMovies([]);
    } else {
      setSearchedSavedMovies(filteredMovies);
      setNotFoundSavedMoviesText('');
    }
  }

  const handleUpdateProfile = (name, email) => {
    setIsLoading(true);
    changeProfile(name, email)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setSubmitMessage('Профиль успешно изменен');
        setTimeout(() => setSubmitMessage(''), 1000);
        setIsEditing(false);
      })
      .catch((error) => {
        setSubmitMessage(error);
        console.log('Ошибка при обновлении профиля:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function resizeUserWindow() {
    const [startMovies, nextMovies] = getMoviesCounter();
    setNextLoadingMoviesCounter(nextMovies);
    setMoviesCounter(startMovies);
    if (
      displayedMoviesCounter < moviesCounter &&
      searchedMovies.length > moviesCounter
    ) {
      setDisplayedMoviesCounter(startMovies);
    }
  }

  function handleMoreButton() {
    if (
      searchedMovies.length <=
      displayedMoviesCounter + nextLoadingMoviesCounter
    ) {
      setDisplayedMoviesCounter(searchedMovies.length);
    } else {
      setDisplayedMoviesCounter((state) => state + nextLoadingMoviesCounter);
    }
  }

  function getMoviesCounter() {
    const windowScreenWidth = window.innerWidth;
    if (windowScreenWidth >= WINDOW_1280) {
      return [START_MOVIES_1280, NEXT_MOVIES_1280];
    }
    if (windowScreenWidth > WINDOW_480 && windowScreenWidth < WINDOW_1280) {
      return [START_MOVIES_768, NEXT_MOVIES_768];
    }
    if (windowScreenWidth <= WINDOW_480) {
      return [START_MOVIES_480, NEXT_MOVIES_480];
    }
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <Movies
                    onAddMovie={handleAddLike}
                    onDeleteMovie={handleRemoveLike}
                    isLiked={isLiked}
                    movies={searchedMovies}
                    onSearch={handleSubmitSearchedMovies}
                    isLoading={isLoading}
                    onMoreButton={handleMoreButton}
                    displayedMovies={displayedMoviesCounter}
                    notFoundMoviesText={notFoundMoviesText}
                  />
                }
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <SavedMovies
                    displayedMovies={
                      isSearchedSavedMovies ? searchedSavedMovies : savedMovies
                    }
                    onDeleteMovie={handleRemoveLike}
                    isLiked={isLiked}
                    onSearch={handleSubmitSearchSavedMovies}
                  />
                }
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <Profile
                    currentUser={currentUser}
                    handleLogout={handleLogout}
                    handleUpdateProfile={handleUpdateProfile}
                    submitMessage={submitMessage}
                    onEdit={handleEdit}
                    isEditing={isEditing}
                    isLoading={isLoading}
                  />
                }
              />
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                isLoggedIn={!isLoggedIn}
                element={
                  <Register
                    handleRegister={handleRegister}
                    submitMessage={submitMessage}
                    isLoading={isLoading}
                  />
                }
              />
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute
                isLoggedIn={!isLoggedIn}
                element={
                  <Login
                    handleLogin={handleLogin}
                    submitMessage={submitMessage}
                    isLoading={isLoading}
                  />
                }
              />
            }
          />
          <Route path="*" element={<NotFoundPage onBack={handleBack} />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
