import { useState } from 'react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Владислав!</h1>
      <div className="profile__inputs-container">
        <div className="profile__input-container">
          <p className="profile__input-text">Имя</p>
          <input
            type="input"
            className="profile__input"
            placeholder="Владислав"
          />
        </div>
        <div className="profile__line"></div>
        <div className="profile__input-container">
          <p className="profile__input-text">E-mail</p>
          <input
            type="input"
            className="profile__input"
            placeholder="pochta@yandex.ru"
          />
        </div>
      </div>
      <div className="profile__links-container">
        {isEditing ? (
          <button className="profile__save-button">Сохранить</button>
        ) : (
          <>
            <button onClick={handleEditClick} className="profile__edit-button">
              Редактировать
            </button>
            <a href="/" className="profile__out-link">
              Выйти из аккаунта
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
