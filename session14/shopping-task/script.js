// user puts a shopping item

// add eventlistener for when item is add

// function to add item when button is clicked

// where to display item add

const addButton = document.getElementById('btn');

addButton.addEventListener('click', () =>{

   //get the value of the input element
   const addItem = document.getElementById("input-list").value;
   console.log(addItem)

   // clear input field once added when button is clicked
   document.getElementById("input-list").value = "";
   
   //write it in the div element shopping list
   const addList = document.getElementById("shopping-list");
   console.log(addList)

   // to use append child we need to create a html element
   let li = document.createElement("li");
   console.log(li)
   li.innerText = addItem;
   addList.appendChild(li); 

})

