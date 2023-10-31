"use strict";
const animals = ["Dog", "Cat", "Rabbit"];
console.log("List of Animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("\nStatements about Animals:");
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    switch (animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat is a wonderful companion.");
            break;
        case "Rabbit":
            console.log("A rabbit is a cute and low-maintenance pet.");
            break;
        default:
            console.log(`I don't know much about ${animal}.`);
    }
}
console.log("\nAny of these animals would make a great pet!");
