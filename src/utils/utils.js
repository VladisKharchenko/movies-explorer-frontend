export function getFilterMovies(movies, searchText) {
  const lowercaseSearchText = searchText.toLowerCase();

  return movies.filter((movie) => {
    const nameRU = movie.nameRU.toLowerCase();
    const nameEN = movie.nameEN.toLowerCase();
    return (
      nameRU.includes(lowercaseSearchText) ||
      nameEN.includes(lowercaseSearchText)
    );
  });
}

export function getShortMovies(movies) {
  return movies.filter((movie) => movie.duration <= 40);
}


