//Byt ut minst ett foto

//selected the parent element
let art2Element = document.querySelector('.art-2');
//created a new button.

//selected all the element -button.
let allButton = document.querySelectorAll('button');
//
for (let i = 0; i<allButton.length;i++){
    allButton[i].style.margin = 'auto';
}

let imgButton = document.createElement('button');
//added attributes - class and class name.
imgButton.setAttribute('class','btn-class');
//changed the style for the created button.
imgButton.style.backgroundColor = 'blue';
imgButton.style.padding = '.5rem 1.2rem';
imgButton.style.marginTop = '0.8rem';
imgButton.style. width = '10rem'; 
imgButton.innerText = 'change picture';
art2Element.insertAdjacentElement('beforeend',imgButton);
//when you click on the created button ===> 3 photos are replaced.
imgButton.addEventListener('click', function(event){
    let img1Element = document.querySelector('.art-1  img');
    let img2Element = document.querySelector('.art-2  img');
    let img3Element = document.querySelector('.art-3  img');
    img1Element.src= 'img/hoodie-ocean.png';
    img2Element.src= 'img/hoodie-ash.png';
    img3Element.src= 'img/hoodie-fire.png'; 
});



//Ändra bakgrundsfärg på minst ett element


//selected the parent element
let navElement = document.querySelector('#header-navigation');
//created a new button.
let headerButton = document.createElement('button');
//changed the style for the created button.
headerButton.style.backgroundColor = 'red';
headerButton.style.padding = '.3rem .5rem';
headerButton.style. width = '18rem'; 
headerButton.innerText = 'change background for some elements';
navElement.insertAdjacentElement('afterBegin',headerButton);
//when you click on the red created button ===> change background for all a -element, all p -elements and first button (blue), witch I creaced
headerButton.addEventListener('click', function(event){
    let aElement = document.querySelectorAll('a');
    for (let i = 0; i<aElement.length; i++ ){
        aElement[i].style.backgroundColor = 'red';
    }
    let pElement = document.querySelectorAll('p');
    for (let i = 0; i<pElement.length; i++ ){
        pElement[i].style.backgroundColor = 'blue';
    }
    imgButton.style.backgroundColor = 'green';
    
});