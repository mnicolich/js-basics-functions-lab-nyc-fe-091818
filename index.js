const feetInBlock = 264
const hq = 42

// currentBlock=43rd street -- hq=42nd street

function distanceFromHqInBlocks (currentBlock) {
 if (currentBlock > hq) {
   return currentBlock - hq
 }
 else {
   return hq - currentBlock
 }
}

function distanceFromHqInFeet(currentBlock) {
 // figure out how many blocks away and then convert that into feet
let numberOfBlocks
 if (currentBlock > hq) {
   numberOfBlocks = currentBlock - hq
 }
 else {
   numberOfBlocks = hq - currentBlock
 }
 return numberOfBlocks * feetInBlock
}
function distanceTravelledInFeet(block1, block2) {
  // 43     48 
  // 1360
  // 1. Want to get the distance between blocks//
  const numberOfBlocks = math.abs(block1 - block2)
  // 2. Convert that to feet 
  return numberOfBlocks * feetInBlock
}
function calculatesFarePrice(startingBlock, destinationBlock) {
  // how far are they going>
  // 42 --> 32 
  const numberOfBlocks = math.abs(startingBlock - destinationBlock)
  const numberofFeet = numberOfBlocks * feetInBlock
  // First four hundred feet are calculatesFarePrice
  if (numberOfFeet <= 400) {
    return 0 
  }
  // If the distance is between 400 and 2000 ft, the price is $0.02 per footm and the first 400 are still free 
  // if more than 400 and less than or equal to 2000 
  else if (numberOfFeet > 400 & numberOfFeet <= 2000) {
    // first 400 free
    // 600 ft -> 200 
    (numberOfFeet - 400) * 0.02
  }
}