console.log("1. Use the Object.keys() method to get an array of an object's properties. ");
const person = {
    name: "Basil",
    age: 26,
    gender: "Male"
};

const keys = Object.keys(person);
console.log(keys);



console.log("2. Use the Object.values() method to get an array of an object's values. ");
const values = Object.values(person)
console.log(values);


console.log("3. Use the Object.entries() method to get an array of key-value pairs for an object. ");
const entries = Object.entries(person);
console.log(entries);


console.log("4. Use the Object.assign() method to merge two objects");
const skills = {skills:["Html","Css","Javascript","React"] }
Object.assign(person,skills)
console.log(person);


console.log("5. Use the Object.freeze() method to prevent changes to an object");
Object.freeze(person)
person.age=10
console.log(person);



console.log("6. Use the Object.seal() method to prevent changes to an object's properties but allows changes to its values.");
Object.seal(skills)
skills.skills= [...skills.skills,"MySQL"]
skills.age=6;
console.log(skills);
