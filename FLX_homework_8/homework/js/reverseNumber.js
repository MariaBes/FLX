function reverseNumber(number){
    if(number<0){
        var min=true;
        number=-number;
    }
    var numberString=number+'';
    var reverse='';
    for(var i=numberString.length-1;i>=0;i--){
        reverse+=numberString[i];
    }
    return min?-reverse:+reverse;
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);