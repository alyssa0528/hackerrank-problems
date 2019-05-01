// Sami's spaceship crashed on Mars! She sends a series of SOS messages to Earth for help.

// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s, determine how many letters of Sami's SOS have been changed by radiation.

// For example, Earth receives SOSTOT. Sami's original message was SOSSOS. Two of the message characters were changed in transit.

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

// Complete the marsExploration function below.
function marsExploration(s) {
    let count = 0;
    const segments = s / 3;

    for (let i = 0; i < s.length; i += 3) {
        let segment = s.slice(i, i + 3)
        for (let j = 0; j < segment.length; j++) {
            if (j === 0 || j === 2) {
                if (segment[j] !== 'S') {
                    count++;
                }
            } else if (j === 1 && segment[j] !== 'O') {
                count++;
            }
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = marsExploration(s);

    ws.write(result + "\n");

    ws.end();
}
