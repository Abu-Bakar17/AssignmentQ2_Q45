const randomNumber = Math.floor(Math.random() * 3);

let alien_color: string;

if (randomNumber === 0) {
    alien_color = 'green';
} else if (randomNumber === 1) {
    alien_color = 'yellow';
} else {
    alien_color = 'red';
}

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
} else {
    console.log("You missed the green alien. Try again!");
}
