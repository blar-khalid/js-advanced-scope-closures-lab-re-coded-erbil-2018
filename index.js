function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){

    let aa = parseInt(startingBlock);
    let bb = parseInt(endingBlock);
    let cc= Math.abs(bb -aa);
    let difference = blockRange - cc;

    if( difference > 0){
      return "within range by "+difference
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}  

function produceTipCalculator(b){
  return function(a){
    return a*b;
  }
}