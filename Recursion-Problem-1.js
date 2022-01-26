// Write a JavaScript function to calculate the factorial of a number.

function factorial(n) {

    if (n < 0) {
        return;
    }

    if (n < 2) {
        return 1;
    }

    return n * factorial(n - 1);

}

  console.log(factorial(10))