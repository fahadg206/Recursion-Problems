// Write a JavaScript function to compute the sum of an array of integers.

function sumArray(arr) {

    if(arr.length === 1) {
        return arr[0]
    } else {

        return arr.pop() + sumArray(arr)
    }
    

}

let myArray = [2, 2, 2, 2]

console.log(sumArray(myArray)) 

