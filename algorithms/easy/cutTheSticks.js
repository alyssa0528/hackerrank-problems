// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.

// For example, there are n = 3 sticks of lengths arr = [1, 2, 3]. The shortest stick length is 1, so we cut that length from the longer two and discard the pieces of length 1. Now our lengths are arr = [1, 2]. Again, the shortest stick is of length 1, so we cut that amount from the longer stick and discard those pieces. There is only one stick left, arr = [1], so we discard that stick. Our lengths are answer = [3, 2, 1].

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

// Complete the cutTheSticks function below.
function cutTheSticks(arr) { 
    arr.sort((a, b) => a - b);
    let remainingSticks = [arr.length];

    while ([...new Set(arr)].length > 1) {
        let shortest = arr[0]
        let newArray = arr.filter(value => value !== shortest).map(stick => stick - shortest);
        remainingSticks.push(newArray.length);
        arr = newArray;
    }
    return remainingSticks;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = cutTheSticks(arr);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
