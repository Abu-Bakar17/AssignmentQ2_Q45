"use strict";
const users = ["User1", "User2", "User3"];
if (users.length > 0) {
    users.length = 0;
    console.log("All usernames have been removed.");
}
else {
    console.log("We need to find some users!");
}
