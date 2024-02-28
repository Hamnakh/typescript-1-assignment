let users : string [] = ["hamna", "amna", "aijaz", "night", "arshad"]
for(let user of users) {
   if (user === "hamna") {
    console.log('Hello hamna, would you like to see a status report?')
 } else {
     console.log('Hello ${user}, thank you for loggin in again') 
 }
}