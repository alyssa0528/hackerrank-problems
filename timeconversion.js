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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    const ampm = s.slice(-2) //will equal AM or PM
    const hour = s.slice(0, 2) //will equal the hour
    if (ampm === "AM") {
        if (hour === "12") { 
            return "00" + s.substr(2).slice(0, -2);
        } else { //for 1 AM - 11 AM 
            return s.substring(0, 8);
        }
    } else { // in PM cases  
        const militaryHour = Number(hour) + 12;
        if (hour === "12") { //for 12 PM hour
            return s.slice(0, -2);
        } else { //for 1 PM - 11:59 PM
            return militaryHour.toString() + s.substr(2).slice(0, -2);
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
