
 /* Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    let level = 0;
    let valleyCount = 0;
    let inValley = false;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            level++;
        } else if (path[i] === 'D') {
            level--;
        }

        if (level < 0 && !inValley) {
            inValley = true;
        }

        if (level === 0 && inValley) {
            valleyCount++;
            inValley = false;
        }
    }

    return valleyCount;
}




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
