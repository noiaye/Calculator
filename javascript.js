let operator = undefined
let indexTracker = 0
const equalsbutton = document.querySelector(".equals")
const display = document.querySelector(".display")
let inputTracker = []

let tracker2 = ""
let clear = document.querySelector(".clear")
let tracker = "";


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
    // For each input pressed add into an array

    if (number.target.textContent === "clear") {
        tracker = ""
        inputTracker = []
        tracker2 = ""
    } else {
            tracker += // Any number (how do we get this?)
            plusOperator.addEventListener("click", () => {
            inputTracker[0] = tracker
            inputTracker[1] = "+"
            
        })

        if (inputTracker.length === 2) {
            tracker2 += // Any number, how do we get this?
        }
    
        
        
        equalsbutton.addEventListener("click", () => {
            inputTracker[2] = tracker2
            console.log(inputTracker)
        })

   
    }
  
    
   
        
    
    
    
       
})









 





