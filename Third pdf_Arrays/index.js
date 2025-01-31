console.log("1.Create an array of numbers and use the forEach() method to print each element to the console");
let arr1 =[1, 2, 3, 4, 5]
arr1.forEach((e)=>{
    console.log(e);
    
})

console.log("2.Use the map() method to square each element in an array of numbers and return a new array.");
console.log(arr1.map((e)=>{return  e*e}) );


console.log("3.Use the filter() method to create a new array containing only even numbers from an original array. ");
console.log(arr1.filter((e)=>{return e%2==0}));

console.log("4.Use the reduce() method to sum up all elements in an array of numbers.");
console.log(arr1.reduce((acc,e)=>{return acc+e},0));


console.log("5.Use the sort() method to sort an array of strings alphabetically");
let fruits = ["banana", "apple", "orange", "kiwi", "mango"];
console.log(fruits.sort());

console.log("6.Use the built in method to apply the following");

console.log("A. reverse() method to reverse the order of elements in an array.");
console.log(fruits.reverse());


console.log("B. Use the concat() method to combine two arrays into a single array.");
let concatArr = arr1.concat(fruits)


console.log("C. Use the slice() method to extract a portion of an array.");

let arr2 = [1, 2, 3, 4, 5, 6];
let sliced = arr2.slice(0, 2).concat(arr2.slice(4));
console.log(arr2);


console.log("E. Use the indexOf() method to find the index of a specific element in an array.");
let arr3 =[1, 2, 3, 4, 5]
console.log(`indexOf returns the index:  ${arr3.indexOf(2)}`);
console.log(`and return: ${arr3.indexOf(6)} if not founded`);


console.log("F. Use the join() method to convert an array to a string.");
let numbers = [1, 2, 3, 4, 5]
numbers = numbers.join(",")
console.log(numbers);

console.log("G. Use the split() method to convert a string to an array");
let myName="Basil"
console.log(myName.split(""));
 

console.log("7.Use the length property to find the number of elements in an array");
console.log(`my name is ${myName.length} character`);


console.log("8.Use the for...of loop to iterate through an array.");
for (let fruit of fruits) {
    console.log(fruit);
    }

console.log("9.Use the for...in loop to iterate through the indexes of an array");
    
    for (let index in fruits) {
        console.log(index, fruits[index]);
    }

console.log("10.Use the Array.isArray() method to check if an object is an array");
    console.log(Array.isArray(fruits));
    

    let array = Array.of(10, 20, 30, 40);

console.log(array);