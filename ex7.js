let passCheck = /(?=\w{8})(?=\D*\d{2})/
let passCheck2 = /\w{6}\d{2}/
let password = 'password22c1heck12'
console.log(passCheck.test(password))