const fs = require("fs");
const path = require("path");
const inputOne = fs.readFileSync(path.join(__dirname, "day-3.1.txt"), "utf8");
const inputTwo = fs.readFileSync(path.join(__dirname, "day-3.2.txt"), "utf8");
const mayusAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const minAlphabet = mayusAlphabet.map((letter) => letter.toLowerCase());
const prio = [null, ...minAlphabet, ...mayusAlphabet];
let resultOne = partOne(inputOne);
let resultTwo = partTwo(inputTwo);

console.log(resultOne);
console.log(resultTwo);

function partOne(input) {
  let lines = input.split("\n");
  let result = 0;
  lines.forEach((line) => {
    const checked = [];
    let letters = {};
    line.split("").forEach((letter, index) => {
      if (index < line.length / 2) {
        // First half
        letters[letter] = true;
      } else if (letters[letter] && checked.indexOf(letter) === -1) {
        // Second half
        result += prio.indexOf(letter);
        checked.push(letter);
      }
    });
  });
  return result;
}

function partTwo(input) {
  let result = 0;
  let lines = input.split("\n");
  let groups = [],
    size = 3;
  while (lines.length > 0) groups.push(lines.splice(0, size));

  groups.forEach((elves) => {
    let itemCount = {};
    let badge = null;
    elves.forEach((elf) => {
      let inventory = elf.split('');
      let checked = [];
      inventory.forEach((item) => {
        if (checked.indexOf(item) === -1) {
          checked.push(item);
          if (!itemCount[item]) itemCount[item] = 0;
          itemCount[item] += 1;
          if (itemCount[item] === 3) {
            badge = item;
            result += prio.indexOf(item);
          };
        }
      });
    });
  });

  return result;
}
