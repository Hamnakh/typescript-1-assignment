//let users : string [] = ["hamna", "amna", "aijaz", "night", "arshad"]
//for(let user of users) {
//   if (user === "hamna") {
//     console.log('Hello hamna, would you like to see a status report?')
// } else {
//     console.log('Hello ${user}, thank you for loggin in again') 
// }
//}
//Q.31
var users = ["hamna", "amna", "aijaz", "night", "arshad"];
if (users.length === 0) {
 console.log ("we need to find users some users!")   
} else {
  for (let user of users){
     if ( user === "hamna") {
          console.log('Hello hamna, would you like to see a status report?') 
         } else {
        console.log('Hello ${user}, thank you for loggin in again')
          }
     }
  }
users = []
if (users.length === 0) {
  console.log ("we need to find some users!")
}
//Q.32
//var current_users = ["admin", "Eric", "Ali", "Hamza", "fatima"];
//var new_users = ["admin", "fatima", "Aliza", "Hasseb", "Noor"];
//var current_user_lower = current_users.map(function (user) { return user.toLowerCase(); });
//for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
 //   var new_user = new_users_1[_i];
 //   if (current_user_lower.includes(new_user.toLowerCase())) {
 //       console.log("Sorry ".concat(new_user, ", that name is taken"));
 //   }
 //   else {
 //       console.log("yes ".concat(new_user, ", is still in avaliable list"));
 //   }
//}
