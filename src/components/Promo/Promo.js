import promoImg from '../../images/promo-img.png';

function Promo() {
  return (
    <section className="promo">
      <div className='promo__container'>
        <img
          src={promoImg}
          className="promo__img"
          alt="Полупрозрачная буква П на фоне которой сетка из полупрозрачных линий и полупрозрачный круг"
        />
        <h1 className="promo__text">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
