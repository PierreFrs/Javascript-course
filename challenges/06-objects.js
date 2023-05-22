const car = {
    make: 'Toyota',
    model: 'Yaris',
    year: 2012,
    colors: ['blue', 'red', 'black'],
    hybrid: true,
    drive: function () {
        console.log("Let's go");
    },
    stop: function () {
        console.log("Let's stop");
    }
}

console.log(car);

console.log(car.make);
console.log((car.colors[0]));
car.drive();
car.stop();