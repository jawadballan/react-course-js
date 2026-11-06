//4
import { writeFileSync } from "node:fs";
import { loadData } from "./load.js";
import * as service from "./movies-service.js";

const data = loadData();
const { movies } = data;

//4.2 הוספת סרט
const coco = {
  id: 7,
  title: "Coco",
  year: 2017,
  genres: ["Animation", "Family"],
  rating: 8.4,
  duration: 105,
  available: true,
  director: { name: "Lee Unkrich", country: "USA" },
  cast: [{ name: "Anthony Gonzalez", role: "Miguel" }],
  reviews: [],
};

const withCoco = service.addMovie(movies, coco); //add coco to the movies array and return a new array with the new movie added
console.log(movies.length, withCoco.length); //original movies array length and new array length with coco added

//4.3 מחיקת סרט
const withoutInception = service.removeMovie(movies, 1); // return array with no movie id 1
console.log(service.getTitles(withoutInception)); //print new array titles without id 1
console.log(movies.length);

//4.4 עדכון דירוג
const rated = service.updateRating(movies, 5, 8.9); // return new array with movie id 5 rating updated to 8.9
console.log(
  service.getById(movies, 5).rating, //original movies array rating of movie id 5
  service.getById(rated, 5).rating, //new array rating of movie id 5
);
console.log(movies[0] === rated[0], movies[4] === rated[4]); //just showing that only movie 4 changed

//4.5 הפוך זמינות
const toggled = service.toggleAvailable(movies, 3); // return new array with movie id 3 available property toggled
console.log(
  service.getById(movies, 3).available, //original movies array available of movie id 3
  service.getById(toggled, 3).available, //new array available of movie id 3
);

//4.6 עדכון בתוך אובייקט פנימי
const moved = service.updateDirectorCountry(movies, 2, "Canada");
console.log(
  service.getById(movies, 2).director.country, //original movies array director country of movie id 2
  service.getById(moved, 2).director.country, //new array director country of movie id 2
);

//4.7 הוספת תגובה למערך פנימי
const review = {
  score: 9,
  text: "So funny",
  author: { username: "maya_r", country: "IL" },
};
const reviewed = service.addReview(movies, 5, review);
console.log(
  service.getById(movies, 5).reviews.length, //original movies array reviews length of movie id 5
  service.getById(reviewed, 5).reviews.length, //new array reviews length of movie id 5
);

//4.8.1 כמה שינויים ברצף — ושמירה לקובץ
let result = service.addMovie(movies, coco);
result = service.updateRating(result, 7, 8.6);
result = service.addReview(result, 7, review);

//4.8.2 שמירה לקובץ
const newData = { ...data, updatedAt: "2026-10-24", movies: result }; //create a new object with the updatedAt property and the new movies array
writeFileSync("movies-updated.json", JSON.stringify(newData, null, 2)); //write the new object to a new file with 2 spaces indentation
console.log("Saved", newData.movies.length, "movies"); //print the number of movies in the new file
