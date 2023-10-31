function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (const magician of magicians) {
      greatMagicians.push(`Great ${magician}`);
    }
  
    return greatMagicians;
  }
  
  function show_magicians(magicians: string[], label: string): void {
    console.log(`Magicians ${label}:`);
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians: string[] = ["ATIF", "BABAR", "ASLAM"];
  const greatMagicians = make_great([...magicians]);
  
  show_magicians(magicians, "Original");
  show_magicians(greatMagicians, "Modified");
  