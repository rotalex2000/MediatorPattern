class ControlTower {
  constructor() {
    this.airplanes = [];
    this.isTrackFree = true;
  }

  registerAirplane(airplane) {
    if (!this.airplanes.includes(airplane)) {
      this.airplanes.push(airplane);
      airplane.controlTower = this;
      console.log(`Airplane ${airplane.name} successfully registered.`);
    }
  }

  canTakeOff(airplane) {
    return this.isTrackFree();
  }

  canLand(airplane) {
    return this.isTrackFree();
  }

  hasLanded(airplane) {}

  hasTakenOff(airplane) {}
}

export default ControlTower;
