console.log(`1-Check if a variable named "age" is greater than 18 and display a message "You are an adult" if it is.`);
let age =19
age > 18 && console.log("You are an adult");



console.log(`2- Check if a variable named "num" is divisible by 2 and display a message "The number is even" if it is.`);
let num = 6;
age > 18 && console.log("The number is even");



console.log(`3- Check if a variable named "char" is a letter and display a message "It's a letter" if it is.`);
let char = "a";
/^[a-zA-Z]$/.test(char) &&  console.log("It's a letter");




console.log(`4-Check if a variable named "list" is an array and display a message "It's an array" if it is.`);
let list = [1, 2, 3]
Array.isArray(list) && console.log("It's an array");




console.log(`5-Check if a variable named "x" is a positive number and display a message "x is a positive number"`);
let x=1
x>0 && console.log("x is a positive number");



console.log(`9-Check if a variable named "z" is a multiple of 3 and display a message "z is a multiple of 3" if it is.`);
z = 9;
z%3===0 && console.log(`z is a multiple of 3`);



console.log(`10- Check if a variable named "password" is at least 8 characters long and display a message "Your password is strong" if it is.`);
let password = "mypassword123";
password.length>8 && console.log(`Your password is strong`);


console.log(`11-Check if a variable named "age" is between 18 and 65 (inclusive) and display a message "You are of working age" if it is.`);
let age2 = 26
age2<65 && age2>18 && console.log(`You are of working age`);



console.log(`12- Check if a variable named "color" is either "red", "green", or "blue" and display a message "color is a primary color" if it is.`);

let color = "red";

(color === "red" || color === "green" || color=== "blue") && console.log(`The color: "${color}" is a primary color`);

function isValidNumber(input) {
    return !isNaN(input) && input !== "" ? 
        `${input} is a valid number` : 
        `${input} is not a number`;
}
console.log(isValidNumber(11));     
console.log(isValidNumber("19"));    
console.log(isValidNumber("xyz"));   
 