"use strict";
function buildSandwichSummary(...ingredients) {
    if (ingredients.length === 0) {
        console.log("You ordered an empty sandwich. Please add some ingredients.");
    }
    else {
        console.log("You ordered a sandwich with the following ingredients:");
        ingredients.forEach((ingredient, index) => {
            console.log(`${index + 1}. ${ingredient}`);
        });
        console.log("Enjoy your sandwich!");
    }
}
buildSandwichSummary("Ham", "Cheese", "Lettuce", "Tomato");
buildSandwichSummary("Peanut Butter", "Jelly");
buildSandwichSummary();
