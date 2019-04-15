// Aerith is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. Her character must jump from cloud to cloud until it reaches the start again.

// To play, Aerith is given an array of clouds, c and an energy level e = 100. She starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i + k) % n]. If Aerith lands on a thundercloud, c[i] = 1, her energy (e) decreases by 2 additional units. The game ends when Aerith lands back on cloud 0.

// Given the values of n, k, and the configuration of the clouds as an array c, can you determine the final value of e after the game ends?

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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    //c = array of clouds
    //k = jump distance
    //if c[i] = 0, then i is a cumulus cloud => energy - 1
    //if c[i] = 1, then i is a thunder cloud => energy - 3
    let energy = 100; 

    if (k === c.length) {
        c[0] === 0 ? energy -= 1 : energy -= 3;
    }

    for (let i = k; i <= c.length - 1; i += k) {
        if (i === c.length - 1 || i + k >= c.length) {
            c[i] === 0 ? energy -= 1 : energy -= 3;
            c[0] === 0 ? energy -= 1 : energy -= 3;
        } else if (i + k <= c.length) {
            c[i] === 0 ? energy -= 1 : energy -= 3;
        }
    }
    return energy;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, k);

    ws.write(result + "\n");

    ws.end();
}
