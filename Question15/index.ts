const guests : string[] = ["ABU BAKAR", "ASLAM", "ATIF"]

console.log(guests[0] + ", Please come to dinner.")

console.log(guests[1] + ", Please come to dinner.")

console.log(guests[2] + ", Please come to dinner.")

console.log("\nSorry, " + guests[1] + " can't make it to dinner.")

const guestWhoCantMakeIt: string = "ASLAM"; 
const newInvitee: string = "ZER";

const indexOfGuestWhoCantMakeIt: number = guests.indexOf(guestWhoCantMakeIt);

if (indexOfGuestWhoCantMakeIt !== -1) {
guests[indexOfGuestWhoCantMakeIt] = newInvitee;
}

console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

console.log("Updated Guest List:");
guests.forEach((guestName) => {
  console.log(`Dear ${guestName}, You are invited to the dinner at my place on Saturday.`);
});
