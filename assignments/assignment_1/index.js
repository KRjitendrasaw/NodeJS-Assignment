function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const input = process.argv
    return input[input.length - 1]
}

function getNameFromEnv() {
    // Write your code here
    process.env.name = "Yash"
    return process.env.name

}

function getNameFromReadLine() {
    // Write your code here
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout

    });
    rl.question("name", (name) => {
        n = name
    });
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}