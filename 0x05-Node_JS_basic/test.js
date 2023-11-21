console.log(process.pid);
const [,, fname, last] = process.argv;
console.log(`name is ${fname} ${last}`);