



const item1 = document.getElementById('second');

console.log(item1, 'item1');


const item2 = document.getElementsByClassName('box');

console.log(item2, 'item2');

const item3 = document.querySelector('.two'); //you can use an id if thats what you what it to get

console.log(item3,'item3');


const item4 = document.querySelectorAll('.three');

console.log(item4, 'item4');


// event listener
item1.addEventListener('click',() => {

item1.style.backgroundColor = 'red'
});

let boxes = Object.entries(item2)
console.log(boxes, 'boxes')


boxes.forEach