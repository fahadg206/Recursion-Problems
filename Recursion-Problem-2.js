// Write a JavaScript function to compute the sum of an array of integers.

function sumArray(arr) {

    let sum = 0;

    for(let i=0; i < arr.length; i++) {

        sum += arr[i];
        
    }

    return sum
}

let myArray = [10, 15, 2, 19, 55]

console.log(sumArray(myArray))

