// let total = 0;

//       function addTree() {
//         total += 1;
//        //console.log(total); updates result in the console
//         document.getElementById("total").innerHTML = total;
//       }

let total = 0;

function addSubscriber() {
  total += 1;
  document.getElementById("total").innerHTML = total;

  if(total >5) {
    document.getElementById("total").innerHTML = "1k";
  }
}

//BMI -CALCULATION TASK

//declare variables at the beginning
const calculateButton = document.getElementById("calculate-button");
const display = document.getElementById("display");

//when user clicksthe calculate button - capture the click event
//run function that divides weight value by height value squared
//output the answer into the display

function calculateButton (){

}