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