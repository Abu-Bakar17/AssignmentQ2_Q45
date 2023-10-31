function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `The Great ${magician}`);
  }
  
  function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians: string[] = ["ATIF", "ASLAM", "SAUD"];
  
  console.log("Original list:");
  show_magicians(magicians);
  
  const greatMagicians: string[] = make_great(magicians);
  
  console.log("\nModified list:");
  show_magicians(greatMagicians);
  