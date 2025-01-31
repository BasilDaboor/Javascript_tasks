console.log("1. Use a while loop to print numbers from 1 to 10 using while.");


let i=1;
while(i<=10){
    console.log(i);       
    i++;
}

console.log("2. Use a for loop to iterate through an array and print each element");
let arr = [1, 2, 3, 4, 5];
for (let i=0 ;i<arr.length;i++)
       console.log(arr[i]);       

console.log("3. Use a for loop to print even numbers from 0 to 10.");
for (let i=1 ;i<=10;i++)
    {if(i%2==0)
            console.log(i);       
    }

console.log("4. Use a for loop to print the sum of numbers from 1 to 10. ");
let sum = 0;
for (let i=1 ;i<=10;i++)
    sum+=i;
console.log(`sum is ${sum}`);


console.log("5. Use a for loop to find the largest number in an array");
let largest =arr[0]
for (let i=1 ;i<arr.length;i++)
{
    if (largest<arr[i])
        largest=arr[i]
}
console.log(`The largest number is ${largest}`);


console.log("6. Use a for loop to find the average of numbers in an array");
let sum2 = 0;
let arr2 = [10, 20, 30, 40, 50];
for (let i=0 ;i<=arr2.length-1;i++)
    sum2+=arr2[i];
console.log(`The average is ${sum2/arr2.length}`);


console.log("7. Use a for loop to find the factorial of a number");
let number = 5; 
let factorial = 1; 
for (let i = 1; i <= number; i++) {
    factorial *= i; 
}
console.log(`The factorial of ${number} is ${factorial}`);


console.log("9. Use a for loop to print the prime numbers up to a given number");
let limit = 20; 
for (let num = 2; num <= limit; num++) {
    let isPrime = true; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false; 
            break; 
        }
    }
    if (isPrime) {
        console.log(num);
    }
}


console.log("10. Use a for loop to print the elements of a 2D array");
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
for (let i = 0; i < 9; i++) {
    console.log(array2D[Math.floor(i / 3)][i % 3]);// Sorry for this but it works🥱
}


console.log("11.Use a for loop to print the elements of an array in reverse order. ");
for (let i = arr.length-1;i>=0;i--)
    console.log(arr[i]);
    


console.log("12. Use a for loop to print the elements of an array with a specific step");
let step = 2; 
for (let i = 0; i < arr.length; i += step) {
    console.log(arr[i]); 
}



console.log("13. Use a for loop to find the frequency of a number in an array");

let array = [1, 2, 1, 3, 2, 1]; 
let numberToFind = 1; 
let frequency = 0; 
for (let i = 0; i < array.length; i++) {
    if (array[i] === numberToFind) {
        frequency++;
    }
}
console.log(`The frequency of ${numberToFind} is ${frequency}`);




// 14.Use the .map() method on the heroes array to return a new array.
// ● The new array should rename the 'name' key to 'hero'.
// ● The 'name' key should not appear in the new array.
// ● The new array should have a new key added called (id).
// ● The key 'id' should be based on the index

const heroes = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
    ]
    
    const heroesWithId = heroes.map((hero,index)=>{return {hero:hero.name,power:hero.power,id:index}})
    console.log(heroesWithId);
    
    
// 15.Write a JavaScript function that takes in the array "input Words" as an argument, and
// using the filter method, it returns a new array containing only the elements that have more
// than 7 characters and return the new Array
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const filteredInputWords = inputWords.filter((e)=>{return e.length>=7})
console.log(filteredInputWords);



// 16. Starting with an array containing the numbers 1 through 10, use reduce to produce for the
// following. Use console.log to display the results.
// ● The sum of the following: square the numbers divisible by 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumSquaredDivisibleBy5 = numbers.reduce((acc,num)=>
                             num%5 === 0 ? acc+Math.pow(num,2) : acc , 0);
console.log(sumSquaredDivisibleBy5);
