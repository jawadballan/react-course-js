//3.1
import { loadData } from "./load.js";
import * as service from "./movies-service.js";

const { movies } = loadData(); //we get from json file only movies array
//3.2 
console.log(service.getTitles(movies));

//3.3
const available = service.getAvailable(movies);
console.log(service.getTitles(available));

//3.4
console.log(service.getById(movies, 4).title);
console.log(service.getById(movies, 99));

//3.5
console.log(service.getTitles(service.getByGenre(movies, "Drama")));

//3.6
console.log(service.getTitles(service.searchByTitle(movies, "the")));

//3.7
console.log(`Before 1990: ${service.hasMoviesBefore(movies, 1990)}, Before 2000: ${service.hasMoviesBefore(movies, 2000)}`);
console.log(service.allHaveDirector(movies));

//3.8
const interstellar = service.getById(movies, 3);
console.log(service.getCastNames(interstellar));