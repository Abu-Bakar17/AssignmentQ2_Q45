const guests: string[] = ["ABU BAKAR", "ATIF", "ASLAM"];

for (const guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

console.log("Good news! We found a bigger dinner table!");

guests.unshift("AHAD");

const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "QASIM");

guests.push("ZER");

for (const guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
