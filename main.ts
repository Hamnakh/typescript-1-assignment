let guestList = ["hamna", "fiz", "minhaj", "aijaz"];
let dontCome = guestList[0];
console.log(dontCome, "nh ahh skti");
guestList.splice(0, 1, "yousof");
guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me/`));

guestList.unshift("amna", "iqra", "warda");
guestList.splice(0, 1, "yousof");
guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me/`));