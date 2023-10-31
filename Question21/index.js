"use strict";
const countries = [
    {
        name: "Pakistan",
        capital: "Islamanad",
        population: 250000000,
        officialLanguage: "Urdu",
    },
    {
        name: "Canada",
        capital: "Ottawa",
        officialLanguage: "English and French",
    },
    {
        name: "United Kingdom",
        capital: "London",
        officialLanguage: "English",
    },
    {
        name: "New Zealand",
        capital: "Wellington",
        officialLanguage: "English",
    },
];
console.log("Information about Countries:");
countries.forEach((country, index) => {
    console.log(`Country #${index + 1}`);
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Official Language: ${country.officialLanguage}`);
    console.log("------------------------------");
});
