let sentence = 'The Quick brown fox jumps over the lazy dog'

//Example 1
// let regX1 = /fox/
// let regX1 = /cat/
// console.log(regX1.test(sentence))
// console.log(regX1.test(sentence))

//Example 2 (OR)
// let regX2 = /fox|cat|leopard/
// let regX2 = /cat|black|deer/
// console.log(regX2.test(sentence))

//Example 3 (Case insensitive)
// let regX3 = /quick/
// let regX3 = /quick/i
// let regX3 = /qui/i
// console.log(regX3.test(sentence))

//Example 4 (Matched word)
// let regX4 = /box/
// let regX4 = /fox/
// console.log(sentence.match(regX4))

//Example 5 (Getting the matched word using g)
// let regX5 = /the/ig
// let regX5 = /the/g
// console.log(sentence.match(regX5))

//Example 6 (Getting the matched word using the dot method)
// let regX6 = /.o./g
// let regX6 = /./g
// console.log(sentence.match(regX6))

//Example 7 (Getting the matched characters with [])
// let regX7 = /[bdh]/g
// console.log(sentence.match(regX7))

//Example 8 (Getting the matched characters of alphabets using [])
let regeX8 = /[a-z]/ig
console.log(sentence.match(regeX8))