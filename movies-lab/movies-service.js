//3.2
export const getTitles = (movies) => movies.map((movie) => movie.title);

//3.3 רק סרטים זמינים
export const getAvailable = (movies) =>
  movies.filter((movie) => movie.available); //filter checks if true adds the index to array

//3.4 סרט לפי מזהה id
export const getById = (movies, id) => movies.find((movie) => movie.id === id);

//3.5 סינון לפי ז’אנר
export const getByGenre = (movies, genre) =>
  movies.filter((movie) => movie.genres.includes(genre)); // includes checks if true or not if genre there return true and after filter adds to new array

//3.6 חיפוש לפי שם
export const searchByTitle = (movies, text) =>
  movies.filter((movie) =>
    movie.title.toLowerCase().includes(text.toLowerCase()),
  );

//3.7 שאלות של כן או לא
export const hasMoviesBefore = (movies, year) =>
  movies.some((movie) => movie.year < year); //האם יש לפחות סרט אחד שיצא לפני השנה הזו

export const allHaveDirector = (movies) =>
  movies.every((movie) => movie.director?.name);

//3.8 על מערך פנימי — שמות השחקנים
export const getCastNames = (movie) => movie.cast.map((actor) => actor.name);

//3.9
export const getDirectorTitles = (movies, directorName) =>
  movies
    .filter((movie) => movie.director.name === directorName) //filter movies that has directorName in temp array
    .map((movie) => movie.title); //return array of the movie titles of the temp array from fillter

//3.10
export const getTopRated = (movies, count) =>
  [...movies]
    .sort((a, b) => b.rating - a.rating) //make a copy of movies sort it from top rate to lower
    .slice(0, count); //return slise from 0 to a count first 3 or first 2 or any

//4.2  הוספת סרט
export const addMovie = (movies, movie) => [...movies, movie]; //add a new movie to the end of the movies array and return a new array with the new movie added

//4.3 מחיקת סרט
export const removeMovie = (movies, id) =>
  movies.filter((movie) => movie.id !== id); //return a new array with all the movies except the one with the given id

//4.4 עדכון דירוג
export const updateRating = (movies, id, rating) =>
  movies.map((movie) => (movie.id === id ? { ...movie, rating } : movie)); //

//4.5 הפוך זמינות
export const toggleAvailable = (movies, id) =>
  movies.map((movie) =>
    movie.id === id ? { ...movie, available: !movie.available } : movie,
  );

//4.6 עדכון בתוך אובייקט פנימי
export const updateDirectorCountry = (movies, id, country) =>
  movies.map(
    (movie) =>
      movie.id === id
        ? { ...movie, director: { ...movie.director, country } } //if id match return a new movie object with the director country updated to the new country
        : movie, //if id not match return the movie object as is
  );

//4.7 הוספת תגובה למערך פנימי
export const addReview = (movies, id, review) =>
  movies.map(
    (movie) =>
      movie.id === id
        ? { ...movie, reviews: [...movie.reviews, review] } //if id match return a new movie object with the reviews array updated to include the new review
        : movie, //if id not match return the movie object as is
  );
