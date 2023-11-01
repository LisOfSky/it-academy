// Авиакомпания. Определить иерархию самолетов. Создать авиакомпанию.
// Посчитать общую вместимость и грузоподъемность. Провести сортировку
// самолетов компании по дальности полета. Найти самолет в компании,
// соответствующий заданному диапазону параметров.


const {Aviacompany} = require('./aviacompany.js');
const {CargoAirplane} = require('./cargoAirplane.js');
const {PassangerAirplane} = require('./passangerAirplane.js');

let myAviacompany = new Aviacompany();

//name, year, cost, range, pass, load
let cargoOne = new CargoAirplane('Boeing 747-8 Freighter', 2009, 199999, 8130, 0, 140);
let cargoTwo = new CargoAirplane('Airbus A330-200F', 2017, 155000, 5400, 0, 65);
let passOne = new PassangerAirplane('Boeing 777-200', 2023, 345000, 6020, 400, 0);
let passTwo = new PassangerAirplane('Embraer E-195', 2020, 270000, 3350, 124, 0);

myAviacompany.addPlane(cargoOne);
myAviacompany.addPlane(cargoTwo);
myAviacompany.addPlane(passOne);
myAviacompany.addPlane(passTwo);

console.log(`Кол-во самолетов авиакомпании; общая вместимость и грузоподъемность; список:`);
console.log(myAviacompany);

console.log(`==================================================`);
console.log('Сортировка самолетов компании по дальности полета:');
console.log(myAviacompany.sortPlane('range'));

console.log(`================================================================`);
console.log(`Результаты поиска самолета(-ов) компании по заданным параметрам:`); 
let planes = myAviacompany.getPlane(); 
let planesSortByPass = myAviacompany.getPlaneByParam(planes, 'pass', 100, 500);
console.log(myAviacompany.getPlaneByParam(planesSortByPass, 'cost', 250000, 300000));