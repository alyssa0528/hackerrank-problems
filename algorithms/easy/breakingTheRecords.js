// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// For example, assume her scores for the season are represented in the array scores = [12, 24, 10, 24]. Scores are in the same order as the games played. She would tabulate her results as follows:

//                                  Count
// Game  Score  Minimum  Maximum   Min Max
//  0      12     12       12       0   0
//  1      24     12       24       0   1
//  2      10     10       24       1   1
//  3      24     10       24       1   1
// Given Maria's scores for a season, find and print the number of times she breaks her records for most and least points scored during the season.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let highestScores = [];
    let lowestScores = [];
    scores.forEach(s => {
        if (s > max) {
            max = s;
            highestScores.push(s);
        } else if (s < min) {
            min = s;
            lowestScores.push(s);
        }
    })
    return [highestScores.length, lowestScores.length]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
