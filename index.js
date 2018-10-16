let store = { drivers: [],passengers:[],trips:[]};
let Did=0;
class Driver {
  
  constructor(name){
    this.id=++Did;
    this.name=name;
    store.drivers.push(this);
  
  }

  
  trips() {
        return store.trips.filter(
            function(tri) {
                return tri.driverId === this.id;
            }.bind(this)
        );
    }
    
     passengers(){
   return this.trips().map(
            function(passenger) {
                return passenger.passenger();
            }
        );
 }
}
let pid=0;
class Passenger {
   constructor(name){
    this.id=++pid;
    this.name=name;
    store.passengers.push(this);
  }
  trips(){
     return store.trips.filter(
            function(tri) {
                return tri.passengerId === this.id;
            }.bind(this)
        );
  }
 drivers(){
    return this.trips().map(
            function(dri) {
                return dri.driver();
            }
        );
 }
}
let tid=0;
class Trip  {
   constructor(driverId,passengerId){
    this.id=++tid;
   
    if(driverId){
      this.setDriver(driverId);
    }
   if(passengerId){
      this.setPassenger(passengerId);
    }
    
  
   
    store.trips.push(this);
    
   
  }
   setDriver(driverId){
     this.driverId = driverId.id;
    }
    setPassenger(passengerId){
     this.passengerId=passengerId.id;
    }
  driver(){
    return store.drivers.find(
            function(dri) {
                return dri.id === this.driverId;
            }.bind(this)
        );}
 passenger(){
   
   return store.passengers.find(
            function(pass) {
                return pass.id === this.passengerId;
            }.bind(this)
        );}
 
}