const hours = new Date().getDate();
let greeting;
console.log(hours);

//check if hours are less than 18:00, say good day and if not say good evening

if (hours < 18){
    greeting = "good day";
} else {
    greeting = "good evening";
}

document.getElementById("demo").innerHTML = greeting;

//check to see how many letters are in the name
//if there are more than 5 letters,output "name has more than 5 letters"
const myString = "abcde"
const nameLength = document.querySelector("#demos span").innerHTML.length;
console.log(nameLength);

if(nameLength > 5){
    //code to run
    document.getElementById("output").innerHTML = "Name has more than 5 letters";
} else {
    //code to run if false
    document.getElementById("output").innerHTML = "Name has less than 5 letters";
}
