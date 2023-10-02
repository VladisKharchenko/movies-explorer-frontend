import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.js';

function Login({ handleLogin, submitMessage, isLoading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      email
    );
    const isPasswordValid = password.length >= 8;

    setIsFormValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    const email = e.target.querySelector('input[name="email-login"]').value;
    const password = e.target.querySelector(
      'input[name="password-login"]'
    ).value;

    handleLogin(email, password);
  };

  return (
    <main>
      <section className="login">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleLoginSubmit}>
          <p className="login__form-input-name">E-mail</p>
          <fieldset className="fieldset-login">
            <input
              type="email"
              name="email-login"
              placeholder="E-mail"
              className="login__form-email-input"
              required
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="error-message-login">{emailError}</p>}
          </fieldset>
          <p className="login__form-input-name">Пароль</p>
          <fieldset className="fieldset-login">
            <input
              type="password"
              name="password-login"
              placeholder="Пароль"
              className="login__form-password-input"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="error-message-login">{passwordError}</p>
            )}
          </fieldset>
          <fieldset className="fieldset-for-submit-login-error">
            {submitMessage && (
              <p className="error-server-message-login">{submitMessage}</p>
            )}
          </fieldset>
          <button
            type="submit"
            className={`login__form-submit ${
              isFormValid ? 'active' : 'disabled'
            }`}
            disabled={!isFormValid || isLoading}
          >
            Войти
          </button>
        </form>
        <div className="login__ask-container">
          <p className="login__ask-container-text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__ask-container-link">
            Регистрация
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;
