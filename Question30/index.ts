const usernames: string[] = ['ABUBAKAR', 'ATIF', 'ASLAM', 'AFRIDI', 'ABU BAKAR'];

for (const username of usernames) {
  if (username === 'ADMIN') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
