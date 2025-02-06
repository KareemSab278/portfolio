
const concat = (...args) =>{ return args.reduce((a, b) => a + b); }

console.log(concat(2,4,5,3))
console.log(concat('my name is: ', 'kareem'))
//=======================================================
const maxNumber = (...args) =>{ return Math.max(...args); }

console.log(maxNumber(547,7567,3,535353,242,10000))
//=======================================================
const multiply = (...args) =>{ return args.reduce((a, b) => a * b); }

console.log(multiply(2,4,5,3))