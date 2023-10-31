const countries: string[] = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "Japan",
    "India",
    "Brazil",
    "South Africa",
  ];
  
  console.log("List of Countries:");
  countries.forEach((country, index) => {
    console.log(`${index + 1}. ${country}`);
  });
  