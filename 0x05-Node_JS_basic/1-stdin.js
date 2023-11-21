const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('welcome to Holberton school, what is your name?');

r1.on('line', (line) => {
  console.log(`Your name is: ${line}`);
});

r1.on('close', () => {
  console.log('This important software is now closing');
});
