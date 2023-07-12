//this includes the vehicle class as a module
//what is this?

const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.
//add constructor
//add the super keyword to call the parent class constructor.
//add the properties listed in the properties chart above.
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenggers = 0
        this.numberOfWheels = 4
        super.maximumSpeed = 160
        super.fuel = 10
        super.scheduleService = false
    }

    loadPassanger = num
    start() {
        if (this.fuel > 0) {
            return this.started = true
        } else {
            return this.started = false
        }
    }
    scheduleService(mileage) {
        if (this.mileage > 30000) {
            this.scheduleSerice = true
            return this.scheduleSerice
        }
    }
}



//Note: You can code your derived Car class here or make a file named index.js and do it there.

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here: