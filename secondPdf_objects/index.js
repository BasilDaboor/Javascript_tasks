console.log("1. Create an object with properties name, age, and gender and print its values to the console. ");
let obj1 = {name:"basil",age:26,gender:"male"}
console.log("Output :",obj1.name,obj1.age,obj1.gender);


console.log("2. Create an object and add a new property to it using dot notation.");
let obj2 = {name:"basil",age:26}
obj2.gender="male";
console.log("Output :",obj2);


console.log("3. Create an object and add a new property to it using bracket notation.");
let obj3 = {name:"basil",age:26}
obj3["gender"]="male";
console.log("Output :",obj3);


console.log("4. Access the value of a property in an object using dot notation.");
let obj4 ={name:"basil",age:26,gender:"male",Status: "Bored"};
console.log(`I feel ${obj4.Status}`);

console.log("5. Access the value of a property in an object using bracket notation. ");
let obj5 ={name:"basil",age:26,gender:"male",Status: "Bored"};
console.log(`I feel ${obj5["Status"]}`);