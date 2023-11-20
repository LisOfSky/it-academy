const {Airplane} = require('./airplane.js');

class PassangerAirplane extends Airplane {
    constructor(name, year, cost, range, pass, load) {
      super(name, year, cost, range, load);
      this.pass = pass;
      this.type = 'Passanger Airplane';
     }
  }

module.exports = {PassangerAirplane};