const magicianNames: string[] = ["talha", "taha", "aijaz"]



function showMaagicians(magicians: string[]): void {
    for (const magician of magicians) {
    console.log(magician);
    }
}



function make_great(magicians: string[]): string[] {
      const greatMagicians: string[] = magicians.map(magician => `the
       Great ${magician}`);
      return greatMagicians;
     }
      
  
      const greatMagiciansNames: string[] = make_great(magicianNames);
      console.log("original Magicians:");
      showMaagicians(magicianNames);


      console.log("\nGreat Magicians:");
      showMaagicians(greatMagiciansNames);
