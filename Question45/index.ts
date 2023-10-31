function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): any {
    const carInfo = {
      manufacturer,
      model,
      ...options.reduce((acc, option) => ({ ...acc, ...option }), {}),
    };
  
    return carInfo;
  }
  
  const car = createCar("Toyota", "Camry", { color: "blue" }, { features: ["GPS", "Sunroof"] });
  
  console.log(car);
