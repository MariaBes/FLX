var textConfirm='Do you want to play a game?';
var range=5, looseMsg='You did not become a millionaire, but can.';
while(window.confirm(textConfirm)) {
    var random= Math.floor(Math.random() * (range + 1));
    var userNum;
    var price=0;
    var i=0;
    var prise=[10,5,2];
    while(i<3){
        userNum = +prompt('Enter a number from 0 to '+range+'\nAttempts left '+(3-i)
            +'\nTotal Prize '+price
            +'\nPossible prize on current attempt '+prise[i], "");
        if(userNum === random){
            price+=prise[i];
            if(window.confirm('Congratulation!   Your prize is: '+price+' Do you want to continue?')){
               random= Math.floor(Math.random() * (range + 1));
               prise[0]*=3;
               prise[1]*=3;
               prise[2]*=3;
               range*=2;
               i=0;
           }else{
                i=3;
            }
        }else{
            i++;
        }
    }
    alert('Thank you for a game. Your prize is: '+price);
    textConfirm='Do you want to play again?';
}
    alert(looseMsg);
