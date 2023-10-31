"use strict";
const current_users = ["ABUBAKAR", "ATIF", "BABAR", "ASLAM", "AFRIDI"];
const new_users = ["ATIF", "SAUD", "ZER", "KAIF", "ABUBAKAR"];
function isUsernameTaken(username) {
    return current_users.some((user) => user.toLowerCase() === username.toLowerCase());
}
for (const username of new_users) {
    if (isUsernameTaken(username)) {
        console.log(`Username '${username}' is already in use. Please choose a different one.`);
    }
    else {
        console.log(`Username '${username}' is available.`);
    }
}
