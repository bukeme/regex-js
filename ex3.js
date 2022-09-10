let sentence = 'The 11 Quick 65 brown 7210 fox_ 654 jumps 32 over 205 the 51 lazy 903 dog really @ The && %% () [] {}'


//Example 17 (Matcing NOT all letters, alphabets and underscore)
// let regX17 = /\W/g
// console.log(sentence.match(regX17))
// console.log(sentence.match(regX17).length)

//Example 18 (Matching all numbers)
// let regX18 = /\d/g
// console.log(sentence.match(regX18))
// console.log(sentence.match(regX18).length)

//Example 19 (Matching all non-numbers)
// let regX19 = /\D/g
// console.log(sentence.match(regX19))
// console.log(sentence.match(regX19).length)

//Example 20 (Matching all the whitespace)
let regX20 = /\s/g
console.log(sentence.match(regX20))
console.log(sentence.match(regX20).length)
