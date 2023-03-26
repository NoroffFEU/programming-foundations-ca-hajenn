const engine = {
	
	model:"Toyota Gr Supra (2021)",
  cylinders: 6,
  fuelType: "Premium Unleaded Petrol",
  isRunning: false,
	turboConnected:true,
	
	sensors: [{
	    name: "Oil Pressure",
		  doExists:true,
		  isRunning:false
	  },
	  {
	    name: "Air Pressure",
		  doExists:true,
			isRunning:false
	  },
	  {
	    name: "Heat Pressure",
		  doExists:true,
			isRunning:false
	  }],

  start(){
    if (!this.isRunning) {
      this.isRunning = true;
      console.log("Engine is running");
    } else {
      console.log("Engine is already running.");
    }
  },


  stop(){
    if (this.isRunning) {
      this.isRunning = false;
      console.log("Engine stopped.");
    } else {
      console.log("Engine is already stopped.");
    }
  }
};


const transmission = {
  gears:6,
  currentGear: 1,
  shiftUp() {
    if (this.currentGear < this.gears) {
      this.currentGear++;
      console.log(`Shifted up to gear ${this.currentGear}`);
    } else {
      console.log(`Already in highest gear (${this.gears})`);
    }
  },
  shiftDown(){
    if (this.currentGear > 1) {
      this.currentGear--;
      console.log(`Shifted down to gear ${this.currentGear}`);
    } else {
      console.log(`Already in lowest gear (1)`);
    }
  },
	gearForce(dp,b,atw){
		
		let ft = (2*t) / dp;
		let fr = (ft*Math.tan(atw));
		let fa = ft*Math.tan(b);
		let fn = Math.sqrt(fa^2+fr^2+ft^2);
		
		return fn;
		
	}
};

