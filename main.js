function sandwish() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwish other");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your sandwish mehak alamgir");
sandwish('capsicum', 'tomato', 'chicken');
sandwish('beef', 'chees');
sandwish('garlic chicken', 'mayo sauce');
