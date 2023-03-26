class Dashboard {
  constructor(speed, fuelLevel, engineStatus) {
    this.speed = speed;
    this.fuelLevel = fuelLevel;
    this.engineStatus = engineStatus;
  }
  
  displaySpeed() {
    console.log(`Current speed: ${this.speed} mph`);
  }
  
  displayFuelLevel() {
    console.log(`Fuel level: ${this.fuelLevel}%`);
  }
  
  displayEngineStatus() {
    if (this.engineStatus) {
      console.log("Engine is running.");
    } else {
      console.log("Engine is stopped.");
    }
  }
}

let carDashboard = new Dashboard(0, 100, false);
