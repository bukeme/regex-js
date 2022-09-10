let sentence = 'The 11 Quick 65 brown 7210 fox_ 654 jumps 32 over 205 the 51 lazy 903 dog really @ The && %% () [] {} gooooooogle yeeeeeeah'


//Example 21 (Matching all the non whitespace)
// let regX21 = /\S/g
// console.log(sentence.match(regX21))
// console.log(sentence.match(regX21).length)

//Example 22 (Specifying upper & lower number of matches using the quantity specifiers)
// let regX22 = /o{2,4}/
// console.log(regX22.test(sentence))

// let regX22 = /e{2,4}/g
// console.log(sentence.match(regX22))


//Example 23 (Specifying only lower number of matches using the quantity specifier)
// let regX23 = /o{2,}/g
// console.log(regX23.test(sentence))


//Example 24 (Specifying only the exact number of matches using the quantity specifier)
let regX24 = /e{5}/
console.log(regX24.test(sentence))