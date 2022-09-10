let sentence = 'The 11 Quick 65 brown 7210 fox_ 654 jumps 32 over 205 the 51 lazy 903 dog really @ The && %% () [] {}'

//Example 9 (Getting the matched numbers or alphabets using [] match method)
// let regX9 = /[1-3x-z]/ig
// console.log(sentence.match(regX9))

//Example 10 (Getting NOT the matched numbers and characters with [] match method)
// let regX10 = /[^1-9a-v ]/ig
// console.log(sentence.match(regX10))

//Example 11 (Getting the matched numbers and characters that occur zero or more times)
// let regX11 = /l+/g
// let regX11 = /l/g
// console.log(sentence.match(regX11))

//Example 12 (Getting the matched character that occur zero or more times)
// let sentence2 = 'goooooooooogle'
// let regX12 = /go*/
// console.log(sentence2.match(regX12))

//Example 13 (Getting the matched characters with lazy matching ?)
// let regX13 = /T.*/
// let regX13 = /T.*?/
// console.log(sentence.match(regX13))

//Example 14 (Matching the beginning string patterns)
// let regX14 = /^The/i
// console.log(sentence.match(regX14))

//Example 15 (Matching the ending string patterns)
// let regX15 = /The$/i
// console.log(sentence.match(regX15))

//Example 16 (Matching all letters, numbers and underscore)
let regX16 = /\w/g
console.log(sentence.match(regX16))
