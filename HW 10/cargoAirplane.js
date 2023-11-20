const {Airplane} = require('./airplane.js');

class CargoAirplane extends Airplane {
    constructor(name, year, cost, range, pass, load) {
      super(name, year, cost, range, pass);
      this.load = load;
      this.type = 'Cargo Airplane';
     }
  }
  
module.exports = {CargoAirplane};