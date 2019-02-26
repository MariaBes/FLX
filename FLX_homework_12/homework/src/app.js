const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];


let listBox;

function getMainPage(){


    listBox=addElement('div');
    mainContainer.appendChild(listBox);

    let addLink=addElement('a','Add task','linkAdd');
    addLink.setAttribute('href','#/add');
    listBox.appendChild(addLink);


    let todoItems=JSON.parse(localStorage.getItem('todoItems'));
    console.log('todoItemsM',todoItems);

    let listUl=addElement('ul');
    listBox.appendChild(listUl);

    todoItems.forEach((item) => {




        let listItem=addElement('li','','list_item');
        listItem.setAttribute('id',item.id);
        listItem.addEventListener('click',goToEdit)
        listUl.appendChild(listItem);

        let icon=addElement('IMG');
        icon.setAttribute('src', item.isDone?'./assets/img/done-s.png':'./assets/img/todo-s.png');
        icon.setAttribute('alt', item.isDone?'checked' :'not checked');
        icon.setAttribute('height', '20');
        icon.addEventListener('click',check);
        listItem.appendChild(icon);

        let listItemText = addElement('p',item.description,'list_item_content');
        listItem.appendChild(listItemText);

        let remove=addElement('IMG');
        remove.setAttribute('src','./assets/img/remove-s.jpg');
        remove.setAttribute('alt', 'delete');
        remove.setAttribute('height', '20');
        remove.addEventListener('click',removeEl);
        listItem.appendChild(remove);

    });

    function check(e){
        e.stopPropagation();
        let id= +this.parentNode.id;
        console.log(id);

        let el = todoItems.find((item) => item.id===id);

       if(!el.isDone){
           el.isDone=true;
           let arrWithoutTargetEl=todoItems.filter((item) => item.id!==id);
           arrWithoutTargetEl.push(el);
           localStorage.setItem('todoItems',JSON.stringify(arrWithoutTargetEl));
           listBox.innerHTML='';
           getMainPage();
       }
    }

    function removeEl(e){
        e.stopPropagation();
        let id= +this.parentNode.id;
        let arrWithoutTargetEl=todoItems.filter((item) => item.id!==id);
        localStorage.setItem('todoItems',JSON.stringify(arrWithoutTargetEl));
        listBox.innerHTML='';
        getMainPage();
    }

    function goToEdit(){
        let id= this.id;
        listBox.innerHTML='';
        location.hash='#/modify/'+id;
    }
}

function addElement(tag,text='',elementClass=''){
    let newElement=document.createElement(tag);
    let contextElement=document.createTextNode(text);
    newElement.appendChild(contextElement);
    if(elementClass){
        newElement.classList.add(elementClass);
    }
    return newElement;
}

let mainContainer= addElement('div','','wrapper');
rootNode.appendChild(mainContainer);

let title=addElement('h1','TODO List');
mainContainer.appendChild(title);

let decorLine=addElement('div','','decor_line');
mainContainer.appendChild(decorLine);


function addItemList(){
    if(listBox){
        listBox.innerHTML=''
    }
    let inputBox=addElement('div');
    mainContainer.appendChild(inputBox);

    let form= addElement('form','','form_box');
    inputBox.appendChild(form);

    let input=addElement('input','','input_field');
    input.setAttribute('placeholder', 'Add new action');
    input.setAttribute('value','');
    input.setAttribute('type','text');
    form.appendChild(input);
    input.addEventListener('keyup',stopType);

    let submit = addElement('button','Save changes','btnAdd');
    submit.setAttribute('type','submit');
    submit.addEventListener('click',newItem);
    form.addEventListener('submit',newItem);
    submit.disabled=true;
    form.appendChild(submit);


    let cancel = addElement('button','Cancel','linkCancel');
    cancel.setAttribute('type','button');
    cancel.addEventListener('click',cancelAdding);
    form.appendChild(cancel);

    function cancelAdding(){
        inputBox.innerHTML='';
        location.hash='#/';
    }

    function stopType(){
        submit.disabled=!this.value.trim().length;
    }


    function newItem(e){
        e.preventDefault();
        let todoItems= JSON.parse(localStorage.getItem('todoItems'));
        let minRandom=0;
        let maxRandom=9999;
        function generateId(min=minRandom, max=maxRandom) {
            let rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return todoItems.some((item) => item.id===rand)?generateId(): rand;
        }

        let itemObj={
            id:generateId(),
            description:input.value,
            isDone:false
        };
        let startPoint=0;
        let firstCheckedEl=todoItems.findIndex((item) => item.isDone===true);
        todoItems=[...todoItems.slice(startPoint,firstCheckedEl),itemObj,...todoItems.slice(firstCheckedEl)];
        localStorage.setItem('todoItems',JSON.stringify(todoItems));
        inputBox.innerHTML='';
        location.hash='#/';

    }

    console.log('todoItems',todoItems);
}



function modifyItemList(){
 console.log(location.hash);
 let hashArray=location.hash.split('/');
 let id=+hashArray[hashArray.length-1];
 console.log(id,'iddddddddd');
 let allList=JSON.parse(localStorage.getItem('todoItems'));
 console.log('allList',allList);
let elIndex;
 let editedEl=allList.find((item,index) => {
     elIndex=index; return item.id===id
 });
    console.log('editedEl',editedEl);
    console.log('elIndex',elIndex);

    let inputBox=addElement('div');
    mainContainer.appendChild(inputBox);

    let form= addElement('form','','form_box');
    inputBox.appendChild(form);


    let input=addElement('input','','input_field');
    input.setAttribute('placeholder', 'Add new action');
    input.setAttribute('value',editedEl.description);
    input.setAttribute('type','text');
    form.appendChild(input);
    input.addEventListener('keyup',stopType);

    let submit = addElement('button','Save changes','btnAdd');
    submit.setAttribute('type','submit');
    submit.addEventListener('click',editedItem);
    form.addEventListener('submit',editedItem);
    form.appendChild(submit);


    let cancel = addElement('button','Cancel','linkCancel');
    cancel.setAttribute('type','button');
    cancel.addEventListener('click',cancelAdding);
    form.appendChild(cancel);

    function stopType(){
        submit.disabled=!this.value.trim().length;
    }

    function cancelAdding(){
        inputBox.innerHTML='';
        location.hash='#/';
    }

    function editedItem(e){
        e.preventDefault();
        editedEl.description=input.value;
        let startPoint=0;
        let editedArray=[...allList.slice(startPoint,elIndex),editedEl,...allList.slice(elIndex+1)];
        localStorage.setItem('todoItems',JSON.stringify(editedArray));
        inputBox.innerHTML='';
        location.hash='#/';
    }
}


if(!location.hash){
    location.hash='/';
}else{
    locationHashChanged();
}

function locationHashChanged() {
    // inputBox.innerHTML='';

    if(location.hash==='#/'){
        getMainPage();
    }else if(location.hash==='#/add'){
        addItemList();
    }else if(location.hash.startsWith('#/modify/')){
        modifyItemList();
    }
}
window.onhashchange = locationHashChanged;


// rootNode.appendChild(/* Append your list item node*/);
