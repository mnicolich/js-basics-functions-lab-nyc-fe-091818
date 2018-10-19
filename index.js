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
function distanceTraveledInFeet(block1, block2){
  // 43     48 
  // 1360
  // 1. Want to get the distance between blocks//
  const numberOfBlocks = math.abs(block1 - block2)
  // 2. Convert that to feet 
  return numberOfBlocks * feetInBlock
}