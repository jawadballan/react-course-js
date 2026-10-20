import { students } from "./data.js";
const describe = student => `${student.name} (${student.city}):${student.grade}`;
for(const student of students)
{
    console.log(describe(student));
    
}

/*import { students } from "./data.js";
const describe = student => `${student.name} (${student.city}):${student.grade}`;
for (const student of students) {
  console.log(describe(student));
}*/  //comparing code looking for errors i forgot to .js to data thats why the code didnot work first try