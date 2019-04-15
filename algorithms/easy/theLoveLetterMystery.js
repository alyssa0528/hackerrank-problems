// James found a love letter that his friend Harry has written to his girlfriend. James is a prankster, so he decides to meddle with the letter. He changes all the words in the letter into palindromes.

// To do this, he follows two rules:

// 1. He can only reduce the value of a letter by , i.e. he can change d to c, but he cannot change c to d or d to b.
// 2. The letter a may not be reduced any further.

// Each reduction in the value of any letter is counted as a single operation. Find the minimum number of operations required to convert a given string into a palindrome.

// For example, given the string s = cde, the following two operations are performed: cde → cdd → cdc.

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

// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(s) {
    let count = 0;
    const midway = Math.floor(s.length / 2);
    let end = s.length - 1;

    for (let start = 0; start < midway; start++) {
        count += Math.abs(s.charCodeAt(start) - s.charCodeAt(end));
        end--;
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = theLoveLetterMystery(s);

        ws.write(result + "\n");
    }

    ws.end();
}
