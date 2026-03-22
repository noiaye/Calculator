let operator = undefined
let indexTracker = 0
const equalsbutton = document.querySelector(".equals")
const display = document.querySelector(".display")
let inputTracker = []
let operaterEnabled = false

let tracker2 = ""
let clear = document.querySelector(".clear")
let tracker = "";

let operandsContainer = document.querySelector(".operands-container")


const threes = document.querySelector(".threes")
const calculatorScreen = document.querySelector(".screen")
const plusOperator = document.querySelector(".add") 
const minusOperator = document.querySelector(".subtract") 

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(operator, num1, num2) {
   if (operator === "+") {
        let resultofAdd = add(Number(num1), Number(num2))
        return resultofAdd
   } else if (operator === "-") {
        let resultofSubtract = subtract(Number(num1), Number(num2))
        return resultofSubtract
   } else if (operator === "/") {
        let resultOfDivide = divide(Number(num1), Number(num2)) 
        return resultOfDivide
   } else if (operator === "*") {
        let resultofMultiply = multiply(Number(num1), Number(num2))
        return resultofMultiply
   }
}



display.addEventListener("click", (number) => {
    if (!operandsContainer.contains(number.target)) {
        tracker += number.target.textContent
        calculatorScreen.textContent = tracker
    }

    if (operandsContainer.contains(number.target)) {
        console.log(operaterEnabled)
        operaterEnabled = true
        operator = number.target.textContent
        
        calculatorScreen.textContent += operator // fix this later

    }
    
})

if (operaterEnabled === true) {
    console.log("reaced here")
    operaterEnabled = false
    
}

threes.addEventListener("click", (numb) => {
    if (operaterEnabled === true) {
        console.log("reached here")
        tracker2 += numb.target.textContent
    }
       
})

equalsbutton.addEventListener("click", () => {
    operaterEnabled = false
    inputTracker[0] = tracker
    inputTracker[1] = operator
    inputTracker[2] = tracker2
    console.log(inputTracker)
})




       






 





