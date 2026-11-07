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
export const sortByYear = (movies) =>
  [...movies].sort((a, b) => a.year - b.year);

//#6
export const markAsWatched = (movies, id) => {
  return movies.map((movie) =>
    movie.id === id ? { ...movie, watched: true } : movie,
  );
};

//#7
export const renameActor = (movie, index, newName) => {
  const copy = { ...movie, cast: movie.cast.map((actor) => ({ ...actor })) }; //chaneg pointing of cast and the actors to new objects so we can change the name of the actor without changing the original movie object
  copy.cast[index].name = newName;
  return copy;
};

//changing nothing only checking if now i push from my user
