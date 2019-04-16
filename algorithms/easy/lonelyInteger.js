// You will be given an array of integers. All of the integers except one occur twice. That one is unique in the array.

// Given an array of integers, find and print the unique element.

// For example, a = [1, 2, 3, 4, 3, 2, 1], the unique element is 4.

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

// Complete the lonelyinteger function below.
function lonelyinteger(a) {
    const sorted = a.sort();
    if (sorted.length === 1) {
        return sorted[0];
    } else {
        for (let i = 0; i < a.length; i += 2) {
            if (i + 1 === sorted.length || sorted[i] !== sorted[i + 1]) {
                return sorted[i]
            }
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = lonelyinteger(a);

    ws.write(result + "\n");

    ws.end();
}
