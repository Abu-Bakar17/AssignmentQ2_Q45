"use strict";
function make_great(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicians = ["ATIF", "ASLAM", "SAUD"];
console.log("Original list:");
show_magicians(magicians);
const greatMagicians = make_great(magicians);
console.log("\nModified list:");
show_magicians(greatMagicians);
