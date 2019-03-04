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

// Complete the serviceLane function below.
function serviceLane(width, cases) {
    let results = []

    for (let i = 0; i < cases.length; i++) {
        results.push(Math.min(...width.slice(cases[i][0], (cases[i][1] + 1))))
    }
    return results
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const [n, t] = [...readLine().split(' ')].map(x => parseInt(x, 10))
    const width = readLine().split(' ').map(x => parseInt(x, 10))
    const cases = Array(t).fill(0).map(x => readLine().split(' ').map(y => parseInt(y, 10)))
    let result = serviceLane(width, cases)

    ws.write(result.join("\n") + "\n")
    ws.end()
}
