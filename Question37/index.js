"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "TypeScript is awesome!");
