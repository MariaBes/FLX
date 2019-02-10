var login = prompt('Enter your login, please', "");
var isAdmin=false;
var isUser=false;
var pass;
var currentHours=new Date().getHours();
if(!login){
    alert("Canceled")
}else if(login&&login.length<4){
    alert("I don't know any users having name length less than 4 symbols")
}else if(login&&login.length>=4&&login!=="User"&&login!=="Admin"){
    alert("I don’t know you")
}else {
    if(login&&login.length>=4&&login==="User"){
    pass=prompt('User your password, please',"");
    isUser=true;
}else if(login&&login.length>=4&&login==="Admin"){
    pass=prompt('Admin your password, please',"");
    isAdmin=true;
}
if(!pass){
    alert("Canceled")
}else if(pass&&pass.length!==0&&isUser&&pass==="UserPass"){
    currentHours<20? alert("Good day, dear User!"):alert("Good evening, dear User!")
}else if(pass&&pass.length!==0&&isAdmin&&pass==="RootPass"){
    currentHours<20? alert("Good day, dear Admin!"):alert("Good evening, dear Admin!")
}else{
    alert ("Wrong password!")
}
}