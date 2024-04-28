const accountId = 23432
let accountEmail = "abc@gmail.com"
var accountPassword = "dwfvef"
let accountState

accountCity = "jaipur"

/*
Prefer Not to use var because of the issue in block scope and functional scope

*/


accountEmail = "xyz@gmail.com"
accountPassword = "poiuyg"

accountCity = "delhi"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])