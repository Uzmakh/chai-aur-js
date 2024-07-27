const accountId = 144553;
let accountEmail = "helloworld@google.com";
var accountPassword = "12345";
var accountCity = "Multan";
let accountState; //declared not initialized

//accountId = 2 // not allowed - nodejs would not allow this(with const keyword, you can't change the value)

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Lahore";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
Prefer not to use var
because of the issues in block scope and functional scope i.e., {}
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

//  summary
/*
Lecture  # 1:
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

*/
