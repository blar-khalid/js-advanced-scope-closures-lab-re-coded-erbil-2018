function produceDrivingRange(){
  return function(startingBlock, endingBlock){
     var start = parseInt(startingBlock);
    var end = parseInt(endingBlock);
      var distanceToTravel = Math.abs(end - start);
    var difference = blockRange - distanceToTravel;

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}