let displayInput = document.querySelector('.input');
let displayOutput = document.querySelector('.output');
let clearAll = document.querySelector('[data-for="AC"]');
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
let equals = document.querySelector('[data-for="="]');

function appendOne() {
    let no1 = document.createElement('p');
    no1.textContent = "1"
    displayInput.appendChild(no1);
    }
    one.addEventListener('click', ()=>{
        appendOne()
    })
document.addEventListener('keydown',(event)=>{
    if(event.key === "1"){
        appendOne()
    }
})