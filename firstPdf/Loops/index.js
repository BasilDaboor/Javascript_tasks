// 1. Write a script to print out all even numbers between 1 and 50,
//  twice.Use 1 for loop and 1 while loop.
console.log("1. Write a script to print out all even numbers between 1 and 50, twice.Use 1 for loop and 1 while loop.");

for (let i=1 ;i<50;i++)
{if(i%2==0)
        console.log(i);       
}

let i=1;
while(i<50){
    if(i%2==0)
    console.log(i);       
    i++;
}

// 4. Fizz-Buzz! Write a script that does the following: 
// ● Counts from 1 to 100 and prints out something for each number: 
// ○ If the number is divisible by 3, print "Fizz" 
// ○ If the number is divisible by 5, print "Buzz" 
// ○ If the number is divisible by both 3 and 5, print "FizzBuzz" 
// ○ If the number does not meet any of the above conditions, just print the number 

console.log("FizzBuzz Start here:");

for (let i=1;i<=100;i++){
if(i%3==0&&i%5==0)
console.log("FizzBuzz");
else if (i%3==0)
    console.log("Fizz");
else if (i%5==0)
    console.log("Buzz");
else
console.log(i);

}



// 5. Rewrite the script with a function 
// so that each iteration will trigger a function call. 
// Sample Input: fizzBuzz(1) 
// Sample Output: 1 
// Sample Input: fizzBuzz(15) 
// Sample Output: FizzBuzz 
console.log("FizzBuzz Function");

function fizzBuzz(num) {
    return num % 5 === 0 && num % 3 === 0 ? "FizzBuzz" :
           num % 3 === 0 ? "Fizz" :
           num % 5 === 0 ? "Buzz" :
           num;
}
console.log(fizzBuzz(5));



// 6. Create a recursive solution. A FizzBuzz 
// function calls itself to continue the series.
console.log("recursive solution for FizzBuzz");

function fizzBuzzRecursive(n, current = 1) {
    if (current > n) return;
    let output = current % 3 === 0 && current % 5 === 0 ? "FizzBuzz" :
                 current % 3 === 0 ? "Fizz" :
                 current % 5 === 0 ? "Buzz" :
                 current;

    console.log(output); 

    fizzBuzzRecursive(n, current + 1);
}
fizzBuzzRecursive(100)



// 7. Write a function that takes a number and converts it to certain banknotes. 
// Sample Input: (57, [25, 10, 5, 1]) 
// Sample Output: 25, 25, 5, 1, 1 

console.log("banknotes");


function getBanknotes(amount, notes) {
    let result = [];

    for (let note of notes) {
        while (amount >= note) {
            result.push(note);
            amount -= note;
        }
    }

    return result;
}


console.log(getBanknotes(57, [25, 10, 5, 1]));  



// 8. Write a function that counts the existence of a specific character
//  within a string, despite the case. 
// Sample Input: (“Coding Academy by Orange”, “o”) 
// Sample Output: 2 

console.log("countsCharacter");

function countsCharacter(str){
   return str.split("").reduce((acc, e)=> e==="o"||e==="O" ?acc+1:acc ,  0)
}

console.log(countsCharacter("Coding Academy by Orange"));

