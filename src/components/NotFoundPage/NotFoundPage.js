import { Link } from 'react-router-dom';

function NotFoundPage({ onBack }) {
  return (
    <main>
      <section className="notFoundPage">
        <h1 className="notFoundPage__title">404</h1>
        <p className="notFoundPage__text">Страница не найдена</p>
        <button type="button" onClick={onBack} className="notFoundPage__link">
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFoundPage;
