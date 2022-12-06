const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "day-5.txt"), "utf8");

console.log(partOne(input));
console.log(partTwo(input));

function partOne(input) {
  let stacks = [
  ];
  let lines = input.split("\n");
  lines.forEach((line, index) => {
    if (index >= 10) {
      let instruction = line.split(' from ');
      let amount = parseInt(instruction[0].replace('move ', ''));
      let from = parseInt(instruction[1].split(' to ')[0]);
      let to = parseInt(instruction[1].split(' to ')[1]);

      let current = 0;
      while (current < amount && stacks[from - 1].length) {
        let crate = stacks[from - 1].shift();
        stacks[to - 1].unshift(crate);
        current++;
      }
    }
  });

  stacks.forEach((stack) => {
    console.log(stack.shift());
  });
}

function partTwo(input) {
  let stacks = [
  ];
  let lines = input.split("\n");
  lines.forEach((line, index) => {
    if (index >= 10) {
      let instruction = line.split(' from ');
      let amount = parseInt(instruction[0].replace('move ', ''));
      let from = parseInt(instruction[1].split(' to ')[0]);
      let to = parseInt(instruction[1].split(' to ')[1]);
      let crates = stacks[from - 1].splice(0, amount);
      stacks[to - 1] = [...crates, ...stacks[to - 1]];
    }
  });
  stacks.forEach((stack) => {
    console.log(stack.shift());
  });
}
