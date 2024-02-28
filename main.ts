function sandwish(...items: string[]): void {
     console.log("sandwish other");
 
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
     }
    }
    console.log("enjoy your sandwish mehak alamgir")
 
    sandwish('capsicum', 'tomato', 'chicken')
    sandwish('beef', 'chees')
    sandwish('garlic chicken', 'mayo sauce')