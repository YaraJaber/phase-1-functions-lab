function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); 
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; 
  }

  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance < 2500) {
      return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Over 2500 feet
    }
  }