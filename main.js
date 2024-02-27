var guestList = ["hamna", "fiz", "minhaj", "aijaz"];
var dontCome = guestList[0];
// console.log(dontCome, "nh ahh skti");
guestList.splice(0, 1, "yousof");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me/")); });
guestList.unshift("amna", "iqra", "warda");
// guestList.splice(0, 1, "yousof");
// guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me/`));
console.log("\nUnortunately we can not arrange big table , Onlytwo people allow.");
while (guestList.length > 2) { }
var remove_guest = guestList.pop();
console.log("sorryy sir/madam.".concat(remove_guest, " you are not invited for dinner."));
// guestList.splice(0, 1, "yousof");
// guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me/`));
guestList.splice(0, 2);
console.log(guestList);
