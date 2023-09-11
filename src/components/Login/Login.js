import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.js';

function Login() {
  return (
    <main>
      <section className="login">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <p className="login__form-input-name">E-mail</p>
          <fieldset className="fieldset-login">
            <input
              type="email"
              name="email-login"
              placeholder="E-mail"
              className="login__form-email-input"
              minLength="2"
              maxLength="40"
              required
            />
          </fieldset>
          <p className="login__form-input-name">Пароль</p>
          <fieldset className="fieldset-login">
            <input
              type="password"
              name="password-login"
              placeholder="Пароль"
              className="login__form-password-input"
              minLength="2"
              maxLength="200"
              required
            />
            {/*{registerError && <p className="error-message-login">{registerError}</p>}*/}
          </fieldset>
          <button type="submit" className="login__form-submit">
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
