var users = ["hamna", "amna", "aijaz", "night", "arshad"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "hamna") {
        console.log('Hello hamna, would you like to see a status report?');
    }
    else {
        console.log('Hello ${user}, thank you for loggin in again');
    }
}
