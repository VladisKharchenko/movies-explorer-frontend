import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.js';

function Register() {
  return (
    <main>
      <section className="register">
        <Logo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <p className="register__form-input-name">Имя</p>
          <fieldset className="fieldset">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="register__form-name-input"
              minLength="2"
              maxLength="40"
              required
            />
          </fieldset>
          <p className="register__form-input-name">E-mail</p>
          <fieldset className="fieldset">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="register__form-email-input"
              minLength="2"
              maxLength="40"
              required
            />
          </fieldset>
          <p className="register__form-input-name">Пароль</p>
          <fieldset className="fieldset">
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              className="register__form-password-input"
              minLength="2"
              maxLength="200"
              required
            />
            {/*{registerError && <p className="error-message">{registerError}</p>}*/}
          </fieldset>
          <button type="submit" className="register__form-submit">
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
