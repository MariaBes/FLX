let rootNode = document.getElementById('root');

function addElement(tag,text='',elementClass=''){
    let newElement=document.createElement(tag);
    let contextElement=document.createTextNode(text);
    newElement.appendChild(contextElement);
    if(elementClass){
        newElement.classList.add(elementClass);
    }
    return newElement;
}

function generatorBtn(value,id=''){
     let createdBtn = addElement('button');
     let insideBtn=createIcon(value);
     createdBtn.appendChild(insideBtn);
     createdBtn.setAttribute('id', id);

     return createdBtn;
}

function createIcon(text='',iconClass=''){
   let icon = addElement('i',text);
   iconClass!==''? icon.classList.add('material-icons',iconClass) : icon.classList.add('material-icons');
   return icon;
}

let mainContainer= addElement('div','','wrapper');
rootNode.appendChild(mainContainer);

let title=addElement('h1','TODO Cat List');
mainContainer.appendChild(title);

let message=addElement('p','Maximum item per list are created','warning');
mainContainer.appendChild(message);

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

let submit = generatorBtn('add_box','add');
submit.addEventListener('click',addItem);
submit.disabled=true;
form.appendChild(submit);


function stopType(){
    submit.disabled=!this.value.trim().length;
}

let counter=0;
function addItem(e){
    e.preventDefault();
    let inputData=input.value;

    let listItem=addElement('li','','list_item');
    listItem.setAttribute('draggable','true' );
    listItem.addEventListener('dragend',drop);
    listItem.addEventListener('dragover',dragOver);
    listItem.addEventListener('dragstart',drag);
    listUl.appendChild(listItem);

    let checkBox = createIcon('check_box_outline_blank','check');
    checkBox.addEventListener('click',check);
    listItem.appendChild(checkBox);

    let listItemText = addElement('p',inputData,'list_item_content');
    listItem.appendChild(listItemText);

    let remove = createIcon('delete');
    remove.addEventListener('click',removeEl);
    listItem.appendChild(remove);

    input.value='';
    submit.disabled=true;

    counter++;
    checkCounter();

}

let decorLine=addElement('div','','decor_line');
mainContainer.appendChild(decorLine);

let listBox=addElement('div');
mainContainer.appendChild(listBox);

let listUl=addElement('ul');
listBox.appendChild(listUl);

let petSign=createIcon('pets','footer_icon');
mainContainer.appendChild(petSign);

function check(){
    this.innerHTML='check_box';
}

function removeEl(){
    this.parentNode.remove();
    counter--;
    checkCounter();
}

let maxCounter=10;
function checkCounter(){
    if(counter<maxCounter){
        message.classList.remove('show');

        input.disabled=false;
    }else{
        message.classList.add('show');
        input.disabled=true;
    }
    input.value='';
    submit.disabled=true;
}

let choosedEl;

function drag(e){
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', null);
    choosedEl = e.target;
}

function isBefore(el1, el2){
    if (el2.parentNode === el1.parentNode){
        for (let current = el1.previousSibling; current; current = current.previousSibling) {
            if (current === el2){
                return true;
            }
        }
    }

    return false;
}

function dragOver(e) {
    if (isBefore(choosedEl, e.target)) {
        e.target.parentNode.insertBefore(choosedEl, e.target);
    }else{
        e.target.parentNode.insertBefore(choosedEl, e.target.nextSibling);
    }
}

function drop() {
    choosedEl = null;
}











