// You are given an array of n integers, ar = [ar[0], ar[1], ... ar[n-1]], and a positive integer, k. Find and print the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

// For example, ar = [1, 2, 3, 4, 5, 6] and k = 5. Our three pairs meeting the criteria are [1, 4], [2, 3] and [4, 6].

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

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let pairs = [];
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            let sum = ar[i] + ar[j];
            if (sum % k === 0) {
                pairs.push(sum)
            }
        }
    }
    return pairs.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = divisibleSumPairs(n, k, ar);

    ws.write(result + "\n");

    ws.end();
}
