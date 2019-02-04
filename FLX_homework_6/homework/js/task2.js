let price = prompt('Enter price. Only number','');
let discount = prompt('Enter discount.Only number','');
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
if(isNumeric(price) && price>0 && price<=9999999 && isNumeric(discount) && discount>=0 && discount<=99){
    let saved = Math.round((price*discount/100) * 100) / 100;
    let discountPrice=Math.round((price-saved)*100)/100;
    let result=`
    Price without discount:${price} 
    Discount: ${discount}% 
    Price with discount: ${discountPrice} 
    Saved:${saved}`;
    alert(result);
}else{
    alert('Invalid input data');
}

