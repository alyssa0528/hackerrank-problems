// In this challenge, you will be given a list of letter heights in the alphabet and a string. Using the letter heights given, determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm wide.

// For example, the highlighted word = torn. Assume the heights of the letters are t = 2, o = 1, r = 1 and n = 1. The tallest letter is 2 high and there are 4 letters. The hightlighted area will be 2 * 4 = 8mm^2 so the answer is 8.

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

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    let values = [];
    for (let i = 0; i < word.length; i++) {
        let hIndex = word.charCodeAt(i) - 97;
        values.push(h[hIndex])
    }
    return Math.max(...values) * word.length; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    let result = designerPdfViewer(h, word);

    ws.write(result + "\n");

    ws.end();
}
