const favorite_fruits: string[] = ["banana", "strawberry", "apple"];

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("kiwi")) {
  console.log("You really like kiwis!");
} else {
  console.log("Kiwis are not in your list of favorite fruits.");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
} else {
  console.log("Oranges are not in your list of favorite fruits.");
}
