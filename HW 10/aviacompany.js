//Создаем авиакомпанию

class Aviacompany {
    constructor() {
      this.amount = 0;
      this.allPass = 0;
      this.allLoad = 0;
      this.plane = [];
    }
  
    addPlane(plane) {
      this.plane.push(plane);
      this.amount += 1;
      this.allPass += plane.pass;
      this.allLoad += plane.load;
    }
  
    getPlane() {
      return this.plane;
    }
  
    sortPlane(param) { 
      let plane = this.plane;
      return plane.sort((a, b) => b[param] - a[param]); 
    }
  
    getPlaneByParam(plane, param, lowParam, hiParam) {
      return plane.filter(item => (lowParam <= item[param] && item[param] <= hiParam));
    }
  }

  module.exports = {Aviacompany};