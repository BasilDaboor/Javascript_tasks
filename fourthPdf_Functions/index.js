console.log("1.Create a function that will display the smallest value in the array");

 function smallest (...numbers){
return Math.min(...numbers)
 }
 console.log(smallest(10,2,3,4));


 console.log("2. Function that will return your string in Alphabetical order");
 function alphabeticalOrder(str){
    return [...str].sort()
 }
 console.log(alphabeticalOrder("basil"));
 

 console.log("3. In mathematics, the factorial of a non-negative integer n, denoted by n! is the product of all positive integers less than or equal to n. In simple terms, the Factorial of 8 is solved like this:");
 
 function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return "Enter a positive integer 🤨";
    }

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

 console.log(factorial(-1));

 console.log("4. A Write a function that lets you know if a number is Even or Odd .");
 
 function oddOrEven(n){
return n%2==0? "even": "odd"
 }
 console.log(oddOrEven(0));
 

 console.log("5. Return the sum of a number going back to it's root. In other words, the function will work like this:");
 function sumToRoot(n){
    if(n===1)
        return 1
    return n+ sumToRoot(n-1)
 }
 console.log(sumToRoot(8));
 

//  6. Create a function that will accept an array and do the following:
//  ● Get the lowest element
//  ● Get the highest element
//  ● Get the length of array
//  ● Get the Average of all element;
//  ● Store these criteria in a new array

function minMaxLengthAverage(arr){
return [ Math.min(...arr),
        Math.max(...arr),
        arr.length,
        arr.reduce((acc,num)=>{return acc+num},0)/arr.length
        ];


}
console.log(minMaxLengthAverage(([7, 13, 3, 77, 100])));



console.log("7. Return how many words was given");
function countWords(str) {
    return str.trim().split(/\s+/).length
}
console.log( countWords("  I used  to love   codding "));



console.log("8.Create function to Multiply all elements in an array by it's length");
function multiplyByLength(arr) {
    return arr.map((e)=>{return e*arr.length})
}
console.log(multiplyByLength([4,2,5]));


console.log("9. Create a function that will check if str1 ends with the characters in str2");

function endsWith(str1, str2) {
    return str1.endsWith(str2);
}
console.log(endsWith("Basil Daboor", "Daboor"));


console.log("10. Create a function that will repeat each string character two times");

function repeatCharacter(str){
    return  str.split('').map(char => char.repeat(2)).join('');
}
console.log(repeatCharacter("basil"));
