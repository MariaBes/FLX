let a = prompt('Enter number a','');
let b = prompt('Enter number b','');
let c = prompt('Enter number c','');
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
if(!isNumeric(a)||!isNumeric(b)||!isNumeric(c)){
    alert('Invalid input data');
}else{
    let discriminant=Math.pow(b,2)-4*a*c;
    if(discriminant<0){
        alert('No solution')
    }else{
        let x1=(-b+Math.sqrt(discriminant))/(2*a);
        let x2=(-b-Math.sqrt(discriminant))/(2*a);
        if(x1===x2){
            let xOneAlert=`x = ${x1}`;
            alert(xOneAlert)
        }else{
            let xTogetherAlert=`x1 = ${x1} and x2 = ${x2}`;
            alert(xTogetherAlert);
        }
    }
}