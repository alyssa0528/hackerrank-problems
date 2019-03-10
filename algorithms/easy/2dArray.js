// Given a 6 x 6 2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation

// a b c
//   d
// e f g
// There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

// For example, given the 2D array:

// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// We calculate the following 16 hourglass values:

// -63, -34, -9, 12, 
// -10, 0, 28, 23, 
// -27, -11, -2, 10, 
// 9, 17, 25, 18
// Our highest hourglass value is 28 from the hourglass:

// 0 4 3
//   1
// 8 6 6

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let sums = [];
    for (let i = 0; i <= arr.length - 3; i++) {
        let row1 = arr[i];
        let row2 = arr[i + 1];
        let row3 = arr[i + 2];
        for (let j = 0; j <= arr[0].length - 3; j++) {
            let reducer = (accumulator, currentValue) => accumulator + currentValue;
            let line1 = row1.slice(j, j + 3);
            let line2 = row2.slice(j + 1, j + 2);
            let line3 = row3.slice(j, j + 3);
            sums.push(line1.reduce(reducer) + line2[0] + line3.reduce(reducer))
        }
    }
    return Math.max(...sums);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
