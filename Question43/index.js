"use strict";
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magicians, label) {
    console.log(`Magicians ${label}:`);
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicians = ["ATIF", "BABAR", "ASLAM"];
const greatMagicians = make_great([...magicians]);
show_magicians(magicians, "Original");
show_magicians(greatMagicians, "Modified");
