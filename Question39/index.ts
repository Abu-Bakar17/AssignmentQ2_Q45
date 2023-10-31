function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("New York", "USA");
const city3 = city_country("Tokyo", "Japan");

console.log(city1);
console.log(city2);
console.log(city3);
