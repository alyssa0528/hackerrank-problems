// Marc loves cupcakes, but he also likes to stay fit. Each cupcake has a calorie count, and Marc can walk a distance to expend those calories. If Marc has eaten j cupcakes so far, after eating a cupcake with c calories he must walk at least 2^j * c miles to maintain his weight.

// For example, if he eats 3 cupcakes with calorie counts in the following order: [5, 10, 7], the miles he will need to walk are (2^0 * 5) + (2^1 * 10) + (2^2 * 7) = 5 + 20 + 28 = 53. This is not the minimum, though, so we need to test other orders of consumption. In this case, our minimum miles is calculated as (2^0 * 10) + (2^1 * 7) + (2^2 * 5) = 10 + 14 + 20 = 44.

// Given the individual calorie counts for each of the cupcakes, determine the minimum number of miles Marc must walk to maintain his weight. Note that he can eat the cupcakes in any order.

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

// Complete the marcsCakewalk function below.
function marcsCakewalk(calorie) {
    let miles = 0;

    calorie.sort((a, b) => b - a);

    for (let i = 0; i < calorie.length; i++) {
        miles += ((2 ** i) * calorie[i]);
    }
    return miles;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const calorie = readLine().split(' ').map(calorieTemp => parseInt(calorieTemp, 10));

    let result = marcsCakewalk(calorie);

    ws.write(result + "\n");

    ws.end();
}
