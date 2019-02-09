function getMin(){
    var min=arguments[0];
  for(var i=0;i<arguments.length;i++){
      if(min>arguments[i+1]){
          min=arguments[i+1];
      }
  }
  return min;
}
getMin(3, 0, -3);