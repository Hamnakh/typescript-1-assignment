//let users : string [] = ["hamna", "amna", "aijaz", "night", "arshad"]
//for(let user of users) {
 //   if (user === "hamna") {
   //     console.log('Hello hamna, would you like to see a status report?')
   // } else {
   //     console.log('Hello ${user}, thank you for loggin in again') 
   // }
//}

//Q.31
let users : string [] = ["hamna", "amna", "aijaz", "night", "arshad"]

//if (users.length === 0) {
// console.log ("we need to find users some users!")   
//} else {
  //  for (let user of users){
  //      if ( user === "hamna") {
  //          console.log('Hello hamna, would you like to see a status report?') 
    
   //         } else {
   //         console.log('Hello ${user}, thank you for loggin in again')
  //          }
   //     }
  //  }
//users = []
//if (users.length === 0) {
  //  console.log ("we need to find some users!")
//}

//Q.32
let current_users : string [] = ["admin", "Eric", "Ali", "Hamza", "fatima"]
let new_users : string [] = ["admin", "fatima", "Aliza", "Hasseb", "Noor"]
let current_user_lower : string [] =current_users.map(user => user.toLowerCase())
for (let new_user of new_users) {
    if (current_user_lower.includes (new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)
    } else {
        console.log(`yes ${new_user}, is still in avaliable list`)
    }
}