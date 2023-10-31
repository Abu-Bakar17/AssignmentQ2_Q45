"use strict";
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const index = 7;
const fruit = fruits[index];
if (fruit) {
    console.log(`Fruit at index ${index} is: ${fruit}`);
}
else {
    console.log(`Index ${index} is out of range.`);
}
