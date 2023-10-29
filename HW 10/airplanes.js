//Конструктор самолетов

class Airplain {
  constructor(name, year, cost, range) {
    this.name = name;
    this.year = year;
    this.cost = cost;
    this.range = range;
    this.pass = 0;
    this.load = 0;
    this.type = 'Unknow';
  }
}

class PassangerAirplane extends Airplain {
  constructor(name, year, cost, range, pass, load) {
    super(name, year, cost, range, load);
    this.pass = pass;
    this.type = 'Passanger Airplane';
   }
}

class CargoAirplane extends Airplain {
  constructor(name, year, cost, range, pass, load) {
    super(name, year, cost, range, pass);
    this.load = load;
    this.type = 'Cargo Airplane';
   }
}

module.exports = {PassangerAirplane, CargoAirplane};