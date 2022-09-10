let digits = '321 321 321 678'
// let pattern = /^\d+\1\1$/
let pattern = /^(\d+)\s\1\s\1/
console.log(pattern.test(digits))