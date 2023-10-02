function SerchButton({ isLoading }) {
  return (
    <button type="submit" className="serchButton" disabled={isLoading}></button>
  );
}

export default SerchButton;
