// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    const arrayLength = arr.length;
    let negatives = 0;
    let positives = 0;
    let zeroes = 0;
    arr.forEach(number => {
        if (Math.sign(number) === 1) {
            positives++;
        } else if (Math.sign(number) === -1) {
            negatives++;
        } else {
            zeroes++;
        }
    })
    console.log(positives / arrayLength + '\n' + negatives / arrayLength + '\n' + zeroes / arrayLength);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
