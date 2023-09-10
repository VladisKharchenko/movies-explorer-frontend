function AboutProject() {
  return (
    <section className="aboutProject" id="1">
      <div className="aboutProject__title-container">
        <h2 className="aboutProject__title">О проекте</h2>
        <div className="aboutProject__line"></div>
      </div>
      <div className="aboutProject__discription">
        <div className="aboutProject__subtitle-container">
          <h3 className="aboutProject__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__subtitle-container">
          <h3 className="aboutProject__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__progress-bar">
        <div className="aboutProject__progress-bar-green">
          <p className="aboutProject__progress-bar-green-weeks">1 неделя</p>
          <p className="aboutProject__progress-bar-green-part">Back-end</p>
        </div>
        <div className="aboutProject__progress-bar-gray">
          <p className="aboutProject__progress-bar-gray-weeks">4 недели</p>
          <p className="aboutProject__progress-bar-gray-part">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
