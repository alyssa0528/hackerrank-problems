// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.

// Function Description

// Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

// birthdayCakeCandles has the following parameter(s):

// ar: an array of integers representing candle heights

// The first line contains a single integer, , denoting the number of candles on the cake. 
// The second line contains  space-separated integers, where each integer  describes the height of candle .
// Print the number of candles that can be blown out on a new line.

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

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    const tallestCandle = Math.max(...ar)
    const candleCount = ar.filter(candle => candle === tallestCandle)
    return candleCount.length
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}

