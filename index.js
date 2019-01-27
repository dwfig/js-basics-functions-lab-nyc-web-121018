// Code your solution in this file!

function distanceFromHqInBlocks(street){
  return Math.abs(street-42);
};

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street)*264;
};

function distanceTravelledInFeet(startingBlock, endingBlock){
  return (Math.abs(startingBlock - endingBlock) * 264);
};

function calculatesFarePrice(startingBlock, endingBlock){
  let distance = distanceTravelledInFeet(startingBlock, endingBlock);
  if (distance > 2500){
    return 'cannot travel that far';
  } else if (distance > 2000){
    return 25;
  } else if (distance > 400){
    return (distance-400) * 0.02;
  }  else {
    return 0;
  }
};
