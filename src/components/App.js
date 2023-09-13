import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import Movies from './Movies/Movies.js';
import SavedMovies from './SavedMovies/SavedMovies.js';
import Profile from './Profile/Profile.js';
import Register from './Register/Register.js';
import Login from './Login/Login.js';
import NotFoundPage from './NotFoundPage/NotFoundPage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <NotFoundPage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
