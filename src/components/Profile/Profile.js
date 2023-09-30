import { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Header from '../Header/Header.js';

function Profile({ handleLogout, handleUpdateProfile, registrationError }) {
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(() => {
    setUserName(currentUser?.name);
    setUserEmail(currentUser?.email);
  }, [currentUser.name, currentUser.email]);

  useEffect(() => {
    const isNameValid = userName.length >= 2 && userName.length <= 30;
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      userEmail
    );
    setIsFormValid(isNameValid && isEmailValid);
  }, [userName, userEmail]);

  useEffect(() => {
    setIsDataChanged(
      userEmail !== currentUser.email || userName !== currentUser.name
    );
  }, [userName, userEmail, currentUser]);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);

    if (value.length < 2 || value.length > 30) {
      setNameError('Имя должно содержать от 2 до 30 символов');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setUserEmail(value);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailPattern.test(value)) {
      setEmailError('Введите корректный адрес электронной почты');
    } else {
      setEmailError('');
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    const name = userName;
    const email = userEmail;

    handleUpdateProfile(name, email);
    setIsEditing(false);
  };

  const handleLogoutSubmit = (e) => {
    handleLogout();
  };

  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form onSubmit={handleSubmit}>
            <div className="profile__inputs-container">
              <fieldset className="profile__fieldset">
                <div className="profile__input-container">
                  <p className="profile__input-text">Имя</p>
                  <input
                    type="text"
                    className="profile__input"
                    placeholder="Владислав"
                    minLength="2"
                    maxLength="30"
                    required
                    value={userName}
                    onChange={handleNameChange}
                    disabled={!isEditing}
                  />
                </div>
                {nameError && <p className="error-message">{nameError}</p>}
              </fieldset>
              <div className="profile__line"></div>
              <fieldset className="profile__fieldset">
                <div className="profile__input-container">
                  <p className="profile__input-text">E-mail</p>
                  <input
                    type="email"
                    className="profile__input"
                    placeholder="pochta@yandex.ru"
                    required
                    value={userEmail}
                    onChange={handleEmailChange}
                    disabled={!isEditing}
                  />
                </div>
                {emailError && <p className="error-message">{emailError}</p>}
              </fieldset>
            </div>
            <fieldset className="fieldset-for-change-avatar-error">
              {registrationError && (
                <p className="profile-error-server-message">
                  {registrationError}
                </p>
              )}
            </fieldset>
            {isEditing ? (
              <div className="profile__submit-container">
                <button
                  type="submit"
                  className={`profile__save-button ${
                    isDataChanged && isFormValid ? 'active' : 'disabled'
                  }`}
                  disabled={!isDataChanged || !isFormValid}
                >
                  Сохранить
                </button>
              </div>
            ) : null}
          </form>
        </section>
        {isEditing ? null : (
          <div className="profile__links-container">
            <button
              type="button"
              onClick={handleEditClick}
              className="profile__edit-button"
            >
              Редактировать
            </button>

            <button
              type="button"
              className="profile__out-button"
              onClick={handleLogoutSubmit}
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default Profile;
