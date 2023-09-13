import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main>
      <section className="notFoundPage">
        <h1 className="notFoundPage__title">404</h1>
        <p className="notFoundPage__text">Страница не найдена</p>
        <Link to="/" className="notFoundPage__link">
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
