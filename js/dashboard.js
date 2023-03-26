const carDashboard = {
    speedometer: {
      value: 0,
      max: 220,
      unit: 'km/h',
      updateValue: function(newValue) {
        if (newValue > this.max) {
          this.value = this.max;
        } else {
          this.value = newValue;
        }
      }
    },
    temperatureGauge: {
      value: 0,
      min: -20,
      max: 120,
      unit: '°C',
      updateValue(newValue) {
        if (newValue > this.max) {
          this.value = this.max;
        } else if (newValue < this.min) {
          this.value = this.min;
        } else {
          this.value = newValue; 
        }
      }
    },
    fuelGauge: {
      value: 0,
      max: 100,
      unit: '%',
      updateValue(newValue) {
        if (newValue > this.max) {
          this.value = this.max;
        } else {
          this.value = newValue;
        }
      }
    },
    odometer: {
      value: 0,
      max: 999999,
      unit: 'km',
      updateValue(newValue) {
        if (newValue > this.max) {
          this.value = this.max;
        } else {
          this.value = newValue;
        }
      }
    }, 
      
      cruiseControl: {
          value:0,
          on:true,
          off:false,
          updateValue(newValue){
              if (newValue == 0) {
                  this.value = this.off;
              } else {
                  this.value = this.on;
              }
          }
      },
      
      warningLights: {
          value:0,
      signals:["Break System Alert","ABS Warning","Oil Pressure","Front Airbag"],
          updateValue(newValue,input){
              if (newValue == input){
                  this.value = this.signals[input];
              } else {
                  this.value = 0;
              }
          }
      },
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
  
    updateAll: function(speed, temperature, fuel, odometer, cruiseControl, warningLights) {
      this.speedometer.updateValue(speed);
      this.temperatureGauge.updateValue(temperature);
      this.fuelGauge.updateValue(fuel);
      this.odometer.updateValue(odometer);
          this.cruiseControl.updateValue(cruise);
          this.warningLights.updateValue(lamp,signal);
    }
  };
