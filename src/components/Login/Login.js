import { Link } from 'react-router-dom';
import HeaderLogo from '../HeaderLogo/HeaderLogo.js';

function Login() {
  return (
    <div className="login">
      <HeaderLogo />
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
      <div className="ask__container-login">
        <p className="ask__container-text-login">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="ask__container-link-login">
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Login;
