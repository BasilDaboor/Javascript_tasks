// without DOM 

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// a. Remove the last item from the vegetable array.
console.log(`vegetables array:   ${vegetables}`);

vegetables.pop();
console.log(`vegetables without last item:    ${vegetables}`);


//b. Remove the first item from the fruit array.
console.log(`fruit array:   ${fruit}`);

fruit.shift();
console.log(`fruit without first item:    ${fruit}`);

//c. Find the index of "orange."
console.log(`The index of orange is ${fruit.indexOf("orange")} cuz we removed first item`);

//d. Add that number to the end of the fruit array.
fruit.push(`index of orange:${fruit.indexOf("orange")}`)
console.log(`${fruit}`);

//e. Find the length of the vegetable array
console.log(`the length of the vegetable array is ${vegetables.length} `);

//f. Add that number to the end of the vegetable array.
vegetables.push(`length of vegetable is :${vegetables.length}`)
console.log(`${vegetables}`);

// g. Put the two arrays together into one array.
//  Fruit first. Call the new Array "food".
let food = [...fruit,...vegetables]
console.log(food);

// Remove 2 elements from your new array starting at index 4.
food.splice(4, 2); 
console.log(food);

//i. Reverse your array.
food.reverse();
console.log(food);
//j. Turn the array into a string.

//I wanna do it this way 😐
let string = food.reduce((acc, curr) => acc + " " + curr); 
console.log(string);  