// 1. If someone is applying to the academy’s website, create the conditional to cover these situations:

// ● If the candidate is older than 30, print out: “You are not eligible. You may join other programs.”

// ● If the candidate is between 18 and 30, print out: “You are eligible. Start your application.”

// ● If the candidate is younger than 18, print out: “You may join the kids' program.”

// ● If the candidate is older than 60, print out: “You may join the seniors’ program.”

// ● Calculate the age using the year of birth dynamically.

let candidateAge =30;

if (candidateAge>=60)
    console.log("You may join the seniors’ program.");

else if (candidateAge>=30)

    console.log("You are not eligible. You may join other programs");

    else if (candidateAge>=18 && candidateAge<30)
    console.log("You are eligible. Start your application.");
else if (candidateAge<18)
    console.log("You may join the kids' program. 😂");


// Write a function that takes a string and switches the letters' case from upper to lower and vice
// versa.
// Sample Input: “OrAnGe”
// Sample Output: “oRaNgE

function switchCase(str) {
    return str
        .split("")
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join("");
}
console.log(switchCase("OrAnGe")); 

// 3. Write a function that takes a string, capitalizes each word's rst letter, and removes all spaces
// (Camel Case).

function toCamelCase(str) {
    return str
        .split(" ")  
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(""); 
}

console.log(toCamelCase("Coding Academy by Orange"));  



//4. Write a function that removes a specific element in an array.


function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}

console.log(removeElement(["Coding", "Academy", "By", "Orange"],"By"));  


// 5. Write a function that checks if a number is odd or even.
function oddOrEven(num){
    return num%2==0?`number: ${num} is even`:`number: ${num} is odd`;
}
console.log(oddOrEven(6));


//6. Write a function that checks whether an input variable is a number.

function isNumber(value){
    return typeof value === "number" 
}
console.log(isNumber("5"));

// 7. Write a function that finds the largest of two numbers.

function largestNumber (number1,number2){
return `the largest number is ${Math.max(number1,number2)}`
}
console.log(largestNumber(5,6));


//8. Write a function that checks if a triangle is equilateral, scalene, or isosceles.
