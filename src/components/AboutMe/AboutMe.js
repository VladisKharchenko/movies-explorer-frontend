import photoMe from '../../images/photo-me.jpg';

function AboutMe() {
  return (
    <section className="aboutMe" id="3">
      <div className="aboutMe__title-container">
        <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__line"></div>
      </div>
      <div className="aboutMe__discription-container">
        <div className="aboutMe__discription-text-container">
          <h3 className="aboutMe__discription-title">Владислав</h3>
          <p className="aboutMe__discription-subtitle">
            Фронтенд-разработчик, 29 лет
          </p>
          <p className="aboutMe__discription-text">
            Я родился и живу в Самара, закончил факультет промышленного и
            гражданского строительства СГАСУ. У меня есть жена и сын. Я люблю
            смотреть сериалы, а ещё увлекаюсь игрой в футбол. Год назад я начал
            кодить. Имею большой опыт работы в строительных фирмах на разных
            должностях. После того, как прошёл курс по веб-разработке, я нашел
            постоянную работы в должности HTML-верстальщик.
          </p>
          <p className="aboutMe__discription-ghlink-text">
            <a
              href="https://github.com/VladisKharchenko"
              className="aboutMe__discription-ghlink"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </div>
        <img
          src={photoMe}
          className="aboutMe__discription-img"
          alt="Мое фото"
        />
      </div>
    </section>
  );
}

export default AboutMe;
