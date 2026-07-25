// Week 2 - Hands on Exercise 03

for (let number = 1; number <= 20; number++) {

    if (number % 3 === 0 && number % 5 === 0) {
        console.log(number + " FizzBuzz");
    }
    else if (number % 3 === 0) {
        console.log(number + " Fizz");
    }
    else if (number % 5 === 0) {
        console.log(number + " Buzz");
    }
    else {
        console.log(number);
    }

}