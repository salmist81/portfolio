// console.log(todoList);
const ul = document.querySelector('#todo-list');

// Create a repeatable function that adds a list element, accepting label and category as arguments
function appendListElement(label, category){
   // create the list element
   const li = document.createElement('li');

   // Add the label to the list item
   li.innerHTML = label;

   // Add a class to the list item (from the category)
   li.classList.add(category);

   // Append the li to the ul element
   ul.appendChild(li);
}

for (let i = 0; i < todoList.length; i++){
    appendListElement(todoList[i].label, todoList[i].category);
}

function filter(){
    // return an array filtered by the category that has been clicked
    // replace the list that is displayed on the page
 
    const chosenCategory = this.innerHTML.toLowerCase();

    const newArray = todoList.filter(function(item, i){
        return item.category === chosenCategory;
    })
    console.log(newArray);

    ul.innerHTML = '';

    for(let i = 0; i < newArray.length; i++){  
        appendListElement(newArray[i].label, newArray[i].category);
    }
}

// event listener
const buttons = document.querySelectorAll('.filter');
console.log(buttons);

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', filter );
}