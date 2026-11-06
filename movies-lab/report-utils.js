//#1
export const getDirectorLine = (movie) => `Director:${movie.director.name}`;

//#2
export const getShortMovies = (movies) =>
  movies.filter((movie) => movie.duration < 100);

//#3
export const findByTitle = (movies, title) =>
  movies.find((movie) => movie.title === title); //changing to find to return one object instead of an array of objects

//#4
export const getOscarsLine = (movie) => `Oscars:${movie.awards?.oscars ?? 0}`; //if movie.awards is undefined return 0

//#5
export const sortByYear = (movies) => [...movies].sort((a, b) => a.year - b.year);



export const markAsWatched = (movies, id) => {
  const movie = movies.find((movie) => movie.id === id);
  movie.watched = true;
  return movies;
};

export const renameActor = (movie, index, newName) => {
  const copy = { ...movie };
  copy.cast[index].name = newName;
  return copy;
};
