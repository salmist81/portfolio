let display = document.getElementById('display');

// let box = document.getElementsByClassName('box');
// console.log(box);

let box = Array.from(document.getElementsByClassName('box'));

box.map( box => {
    box.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});