// An integer d is a divisor of an integer n if the remainder of n / d = 0.

// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

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

// Complete the findDigits function below.
function findDigits(n) {
    let divisor = 0;
    const numbers = Array.from(n.toString()).map(Number)
    numbers.forEach(num => {
        if (n % num === 0) {
            divisor++;
        }
    })
    return divisor;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = findDigits(n);

        ws.write(result + "\n");
    }

    ws.end();
}
