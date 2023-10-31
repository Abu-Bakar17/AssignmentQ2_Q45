"use strict";
function createCar(manufacturer, model, ...options) {
    const carInfo = Object.assign({ manufacturer,
        model }, options.reduce((acc, option) => (Object.assign(Object.assign({}, acc), option)), {}));
    return carInfo;
}
const car = createCar("Toyota", "Camry", { color: "blue" }, { features: ["GPS", "Sunroof"] });
console.log(car);
