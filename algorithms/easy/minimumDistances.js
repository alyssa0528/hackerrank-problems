// We define the distance between two array values as the number of indices between the two values. Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, print -1.

// For example, if a = [3, 2, 1, 2, 3], there are two matching pairs of values: 3 and 2. The indices of the 3's are i = 0 and j = 4, so their distance is d[i, j] = |j - i| = 4. The indices of the 2's are i = 1 and j = 3, so their distance is d[i, j] = |j - i|= 2.

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

// Complete the minimumDistances function below.
function minimumDistances(a) {
    let indexA = [];
    let indexB = [];
    let difference;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                indexA.push(i);
                indexB.push(j);
            }
        }
    }
    if (indexA.length === 0) {
        return -1;
    } else {
        difference = Math.abs(indexA[0] - indexB[0])
        for (let i = 1; i < indexA.length; i++) {
            let indices = Math.abs(indexA[i] - indexB[i])
            if (indices < difference) {
                difference = indices;
            }
        }
    }
    return difference;
}   

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    ws.write(result + "\n");

    ws.end();
}
