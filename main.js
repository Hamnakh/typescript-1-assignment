var guestList = ["hamna", "fiz", "minhaj", "aijaz"];
var dontCome = guestList[0];
console.log(dontCome, "nh ahh skti");
guestList.splice(0, 1, "yousof");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me/")); });
guestList.unshift("amna", "iqra", "warda");
guestList.splice(0, 1, "yousof");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me/")); });
