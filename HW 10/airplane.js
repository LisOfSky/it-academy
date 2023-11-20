class Airplane {
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

module.exports = {Airplane};