const accountId = 144553
let accountEmail = "atishya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 1  // not allowed

accountEmail = "at@at.com"
accountPassword = "212121"
accountCity = "Bangaluru"

console.log(accountId);

/*
prefer not to use var
because of issue of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
