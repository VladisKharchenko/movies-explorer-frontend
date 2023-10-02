function ButtonMore({ onClick }) {
  return (
    <div className="buttonMore">
      <button type="button" className="buttonMore__button" onClick={onClick}>
        Ещё
      </button>
    </div>
  );
}

export default ButtonMore;
