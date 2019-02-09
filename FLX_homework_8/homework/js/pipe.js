function pipe(num){
    for(var i=1;i<arguments.length;i++){
           num = arguments[i](num);
    }
    return num;
}
function addOne(x) {
    return x + 1;
}
pipe(1, addOne);
pipe(1, addOne, addOne);
