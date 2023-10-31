// Initial list of dinner guests
let dinnerGuests: string[] = ["ABU BAKAR", "BABAR", "RIZWAN", "SAUD", "HASSAN"];

console.log("You can invite only two people for dinner.");

while (dinnerGuests.length > 2) {
  const removedGuest = dinnerGuests.pop();
  console.log(`Sorry, ${removedGuest}, you can't be invited to dinner.`);
}

dinnerGuests.forEach((guest) => {
  console.log(`${guest} You're still invited to dinner.`);
});

dinnerGuests.splice(0, 2);

console.log("Final list of dinner guests:", dinnerGuests);
