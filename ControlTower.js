class ControlTower {
  constructor() {
    this.airplanes = [];
  }

  registerAirplane(airplane) {
    if (!this.airplanes.includes(airplane)) {
      this.airplanes.push(airplane);
      airplane.controlTower = this;
      console.log(`Airplane ${airplane.name} successfully registered.`);
    }
  }
}
