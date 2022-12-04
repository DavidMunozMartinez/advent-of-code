const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "day-4.txt"), "utf8");

console.log(partOne(input));
console.log(partTwo(input));

function partOne (input) {
  let result = 0;

  let lines = input.split('\n');
  lines.forEach((line) => {
    let pairs = line.split(',');
    let firstRange = pairs[0].split('-');
    let secondRange = pairs[1].split('-');

    // Check if first range is contained in second range
    if (parseInt(firstRange[0]) >= parseInt(secondRange[0]) && parseInt(firstRange[1]) <= parseInt(secondRange[1])) {
      result++;
    // Check if second range is contained in first range
    } else if (parseInt(secondRange[0]) >= parseInt(firstRange[0]) && parseInt(secondRange[1]) <= parseInt(firstRange[1])) {
      result++;
    }
  });

  return result;
}

function partTwo(input) {
  let result = 0;
  let lines = input.split('\n');

  lines.forEach((line) => {
    let pairs = line.split(',');
    let numbers = [];
    let overlaps = false;
    [pairs[0],pairs[1]].forEach((range) => {
      let values = range.split('-');
      let start = parseInt(values[0]);
      let end = parseInt(values[1]);
      // iterate both ranges and if a number repeats, it overlaps
      while (start <= end && !overlaps) {
        if (numbers.indexOf(start) > -1) {
          overlaps = true;
        } else {
          numbers.push(start);
        }
        start++;
      }
    });
    if (overlaps) result++;
  });

  return result;
}
