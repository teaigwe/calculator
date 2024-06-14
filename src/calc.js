let displayInput = document.querySelector('.input');
let displayOutput = document.querySelector('.output');
/* let clearAll = document.querySelector('[data-for="AC"]');
let del = document.querySelector('[data-for="DEL"]');
let divide = document.querySelector('[data-for="/"]');
let one = document.querySelector('[data-for="1"]');
let two = document.querySelector('[data-for="2"]');
let three = document.querySelector('[data-for="3"]');
let multiply = document.querySelector('[data-for="*"]');
let four = document.querySelector('[data-for="4"]');
let five = document.querySelector('[data-for="5"]');
let six = document.querySelector('[data-for="6"]');
let plus = document.querySelector('[data-for="+"]');
let seven = document.querySelector('[data-for="7"]');
let eight = document.querySelector('[data-for="8"]');
let nine = document.querySelector('[data-for="9"]');
let subtract = document.querySelector('[data-for="-"]');
let decimal = document.querySelector('[data-for="."]');
let zero = document.querySelector('[data-for="0"]');
let equals = document.querySelector('[data-for="="]'); */

function appendElement(character) {
    let inputtedFig = document.createElement('p');
    inputtedFig.textContent = character;
    displayInput.appendChild(inputtedFig);
    }

function clear(){
    displayInput.innerHTML= ""
    displayOutput.innerHTML=""
    }

function clearLast(){
if (displayInput.lastChild){
    displayInput.removeChild(displayInput.lastChild)
}
}

function evaluateExpression() {
try{
    let result = math.evaluate(displayInput.textContent);
    displayOutput.textContent = result
}
catch(error){
displayOutput.textContent = "error"
}

}

document.querySelectorAll('.btns button').forEach(button => {
    let value = button.getAttribute('data-for');

button.addEventListener('click',()=>{
    if(value === "AC"){
        clear()
    } else if (value === "DEL"){
clearLast()
    } else if (value === "="){
        evaluateExpression()
    }
    else {appendElement(value)}
})
   });

   document.addEventListener('keydown',(event)=>{
    if(event.key === "Backspace"){
        clearLast()
   } else if (event.key === "Enter"){
    evaluateExpression()
   }
   })
