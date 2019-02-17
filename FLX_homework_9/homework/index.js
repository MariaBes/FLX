var people=[
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

function findTypes(){
    var arg=[];
    for (var i=0;i<arguments.length;i++){
        arg.push(typeof(arguments[i]));
    }
    return arg;
}
findTypes("number");
findTypes(null, 5,"hello");


function executeforEach(array,func){
    var arr2=[];
    for(var i=0;i<array.length;i++){
        arr2.push(func(array[i]));
    }
    return arr2;
}
executeforEach([1,2,3], function(el){
    console.log(el)
});


function mapArray(arr,func){
    return executeforEach(arr,func)
}
mapArray([2, 5, 8], function(el){
    return el + 3
});


function filterArray(arr,func){
    var filterBools= executeforEach(arr,func);
    var filteredArray=[];
    for(var j=0;j<filterBools.length;j++){
        if(filterBools[j]){
            filteredArray.push(arr[j])
        }
    }
    return filteredArray;
}
filterArray([2, 5, 8], function(el){
    return el > 3
});


function getAmountOfAdultPeople(data){
    var ageArray=[];
    for(var i=0;i<data.length;i++){
        ageArray.push(data[i].age);
    }
    function adult(el){
        return el > 18
    }
    var adultPersons = filterArray(ageArray,adult);
    return adultPersons.length;
}
getAmountOfAdultPeople(people);


function getGreenAdultBananaLovers(data){
    function getItemWithCathegory(el){
        return el.age>18&&el.eyeColor==="green"&&el.favoriteFruit==="banana";
    }
    var successItems = filterArray(data,getItemWithCathegory);
    function getName(el){
        return el.name
    }
   return mapArray(successItems,getName);
}
getGreenAdultBananaLovers(people);



function keys(obj){
    var keysArr=[];
    for (var key in obj) {
        keysArr.push(key);
    }
    return keysArr;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});


function values(obj){
    var valuesArr=[];
    for (var key in obj) {
        valuesArr.push(obj[key]);
    }
    return valuesArr;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});



function showFormattedDate(date){
var months=["Jan","Fer","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return "Date: "+date.getDate() +" of "+months[date.getMonth()]+", "+ date.getFullYear()
}
showFormattedDate(new Date('2019-01-27T01:10:00'));


function isEvenYear(date){
    return !(date.getFullYear()%2)
}
isEvenYear(new Date('2019-01-27T01:10:00'));



function isEvenMonth(date){
    var monthNum=date.getMonth()+1;
    return !(monthNum%2)
}
isEvenMonth(new Date('2019-02-27T01:10:00'));






