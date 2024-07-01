// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distance = Math.abs(pickupLocation - hqLocation);
  
    return distance;
}

function distanceFromHqInFeet(pickupLocation) {
    const blockInFeet = 264;
    const hqLocation = 42;
    const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
    const distanceInFeet = distanceInBlocks * blockInFeet;
    
    return distanceInFeet;
  }
  
  module.exports = {
    distanceFromHqInFeet
  };
  

function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264; 
    
    const distanceInBlocks = Math.abs(destination - start);
    
    const distanceInFeet = distanceInBlocks * blockInFeet;
    
    return distanceInFeet;
  }
  
  module.exports = {
    distanceTravelledInFeet
  };
    

function calculatesFarePrice(start, destination) {
    const blockInFeet = 264; 
    
    const distanceInFeet = Math.abs(destination - start) * blockInFeet;
    
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const farePrice = (distanceInFeet - 400) * 0.02; 
      return parseFloat(farePrice.toFixed(2)); 
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
  
  module.exports = {
    calculatesFarePrice
  };
  