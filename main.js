//function makeshirt(size: string, text: string): void {
//    console.log(`you order a ${size} shirt that says ${text}`)
//}
//makeshirt ('large','"i love typescript"')
//makeshirt('medium','"i need a big shirt"')
//Q.37
//function makeshirt(size: string = 'large', text: string = ' I love typescript'): void {
//console.log(`you have order a ${size}, shirt that says ${text}`)
//}
//makeshirt();
//makeshirt('medium')
//different message
//makeshirt('small', 'I need a big shirt to wear')
//Q.38
//function describe_city(city: string, country: string = 'Pakistan'): void {
//   console.log(`${city}  ${country}`)
//}
//describe_city('Karachi')
//describe_city('France', 'Europe')
//describe_city('Lahore', 'punjab')
//Q.39
//function cityCountry(city: string, country: string):string { 
//    return `${city}, ${country}`
//}
//let c1 = cityCountry('lahore', 'pakistan')
//let c2 = cityCountry('tokyo', 'japan')
//let c3 = cityCountry('paris', 'france')
//console.log(c1)
//console.log(c2)
//console.log(c3)
//Q.40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("ali", "light");
console.log(album);
album = makeAlbum("bilal", "red wave");
console.log(album);
album = makeAlbum("hamza", "amna");
console.log(album);
