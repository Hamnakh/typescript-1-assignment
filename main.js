var magicianNames = ["talha", "taha", "aijaz"];
function showMaagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the\n       Great ".concat(magician); });
    return greatMagicians;
}
var greatMagiciansNames = make_great(magicianNames);
console.log("original Magicians:");
showMaagicians(magicianNames);
console.log("\nGreat Magicians:");
showMaagicians(greatMagiciansNames);
