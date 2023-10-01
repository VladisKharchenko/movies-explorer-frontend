import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.js';

function Register({ handleRegister, submitMessage, isLoading }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length < 2 || value.length > 30) {
      setNameError('Имя должно содержать от 2 до 30 символов');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailPattern.test(value)) {
      setEmailError('Введите корректный адрес электронной почты');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError('Пароль должен содержать от 8 символов');
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    const isNameValid = name.length >= 2 && name.length <= 30;
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      email
    );
    const isPasswordValid = password.length >= 8;

    setIsFormValid(isNameValid && isEmailValid && isPasswordValid);
  }, [name, email, password]);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleRegister(name, email, password);
  };

  return (
    <main>
      <section className="register">
        <Logo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={handleRegisterSubmit}>
          <p className="register__form-input-name">Имя</p>
          <fieldset className="fieldset">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="register__form-name-input"
              minLength="2"
              maxLength="30"
              required
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <p className="error-message">{nameError}</p>}
          </fieldset>
          <p className="register__form-input-name">E-mail</p>
          <fieldset className="fieldset">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="register__form-email-input"
              required
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </fieldset>
          <p className="register__form-input-name">Пароль</p>
          <fieldset className="fieldset">
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              className="register__form-password-input"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </fieldset>
          <fieldset className="fieldset-for-submit-error">
            {submitMessage && (
              <p className="error-server-message">{submitMessage}</p>
            )}
          </fieldset>
          <button
            type="submit"
            className={`register__form-submit ${
              isFormValid ? 'active' : 'disabled'
            }`}
            disabled={!isFormValid || isLoading}
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="register__ask-container">
          <p className="register__ask-container-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__ask-container-link">
            Войти
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Register;
