const current_users: string[] = ["ABUBAKAR", "ATIF", "BABAR", "ASLAM", "AFRIDI"];

const new_users: string[] = ["ATIF", "SAUD", "ZER", "KAIF", "ABUBAKAR"];

function isUsernameTaken(username: string): boolean {
  return current_users.some((user) => user.toLowerCase() === username.toLowerCase());
}

for (const username of new_users) {
  if (isUsernameTaken(username)) {
    console.log(`Username '${username}' is already in use. Please choose a different one.`);
  } else {
    console.log(`Username '${username}' is available.`);
  }
}
