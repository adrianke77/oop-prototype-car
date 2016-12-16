function Car (make, model, year, color, seats, passengers) {
  this.make = make
  this.model = model
  this.year = year
  this.color = color
  this.seats = seats
  this.previousOwners = []
  this.owner = "manufacturer"
  this.running = false
  this.sell = function (newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  }
  this.paint = function (newColor) {
    this.color = newColor
  }
  this.start = function () {
    this.running = true
  }
  this.off = function () {
    this.running = false
  }
  this.driveTo = function (destination) {
    if (this.running === true) {
      console.log("driving to " + destination)
      return true
    }
    return false
  }
  this.park = function () {
    if (this.running === false) {
      console.log("parked")
      return true
    }
    return false
  }

  console.log(typeof passengers)
  if (typeof passengers === "undefined") this.passengers = []
    else this.passengers = passengers

    
  this.pickUp = function (name) {
    if (this.running === true && passengers.length < seats -1 ) {
      passengers.push(name)
      return true
    }
    return false
  }  
  this.dropOff = function (name) {
    if (this.passengers.indexOf(name) > -1 && this.running === true) {
      passengers.splice(passengers.indexOf(name),1)
      console.log("driving to drop off " + name)
      return true
    }
    return false
  }
  this.passengerCount = function () {
    return passengers.length
  }
} 



module.exports = Car