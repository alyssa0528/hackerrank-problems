// Dan is playing a video game in which his character competes in a hurdle race. Hurdles are of varying heights, and Dan has a maximum height he can jump. There is a magic potion he can take that will increase his maximum height by 1 unit for each dose. How many doses of the potion must he take to be able to jump all of the hurdles.

// Given an array of hurdle heights height, and an initial maximum height Dan can jump, k, determine the minimum number of doses Dan must take to be able to clear all the hurdles in the race.

// For example, if height = [1, 2, 3, 3, 2] and Dan can jump 1 unit high naturally, he must take 3 - 1 = 2 doses of potion to be able to jump all of the hurdles.

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

// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    const dose = Math.max(...height) - k;
    return (dose > 0 ? dose : 0)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const height = readLine().split(' ').map(heightTemp => parseInt(heightTemp, 10));

    let result = hurdleRace(k, height);

    ws.write(result + "\n");

    ws.end();
}
