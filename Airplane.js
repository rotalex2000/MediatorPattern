class Airplane {
  constructor(name) {
    this.name = name;
    this.controlTower = null;
  }

  requestTakeOff() {
    if (this.controlTower.caneTakeOff(this)) {
      console.log(`Take off request for airplane ${this.name} approved.`);
    }
  }

  completeTakeOff() {
    this.controlTower.hasTakenOff(this);
  }

  requestLanding() {
    if (this.controlTower.canLand(this)) {
      console.log(`Land request for airplane ${this.name} approved.`);
    }
  }

  completeLanding() {
    this.controlTower.hasLanded(this);
  }
}

// Airplane.prototype = {

// };

export default Airplane;
