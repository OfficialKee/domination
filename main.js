//1
function strikeThrough(){
    let listOne = document.querySelector('li')
    listOne.style.textDecoration = 'line-through'

 }
//2
 strikeThrough();

 //3
function  setImage(id, url){
    let image = document.querySelector(`#${id}`);
    image.src=url;
    image.style.height = '300px'
}
//4
setImage('image-1','https://static.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg');

setImage('image-2','https://static.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg');

setImage('image-3','https://static.pexels.com/photos/213399/pexels-photo-213399.jpeg');
//5
function removeArgument(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();
}
//6
removeArgument();
removeArgument();
//7
function sizeFont(fSize, id){
    let textSize = document.querySelector(`#${id}`);
    textSize.style.fontSize = fSize
};
//8
sizeFont('100px','thing-2');

//1
function addElementToList(element){
    let arguments = document.querySelector('#arguments');
    arguments.appendChild(element);
};
//2
let newImage = document.createElement('img');
newImage.src = 'https://static.pexels.com/photos/158471/ibis-bird-red-animals-158471.jpeg';
newImage.style.height = '250px';
addElementToList(newImage);

//3
function imageHeight(img){
    img.style.height='30px';
};

let newImage2 = document.createElement('img');
newImage2.src ='https://static.pexels.com/photos/50988/ape-berber-monkeys-mammal-affchen-50988.jpeg';
//4
addElementToList(newImage2);
imageHeight(newImage2);



//5
function makeInvisible(element){
 element.className = 'invisible';
}
//6
let bigH1 = document.querySelector('h1')

//6  bigH1.className = 'invisible'
makeInvisible(bigH1)

//1

function inputText(strings){
    let newText = document.createElement('li');
    newText.innerText=strings;
    return newText;
}
//2

let newLi = inputText('Well Hello There')
addElementToList(newLi)


//3
function newHeader(size,text){
    let newHeader = document.createElement(`h${size}`);
    newHeader.innerText = text;
    return newHeader
}

let newestHeader = newHeader(1,'The Big bang');

addElementToList(newestHeader)