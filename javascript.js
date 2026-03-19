let operator = undefined
let indexTracker = 0
const equalsbutton = document.querySelector(".equals")
const display = document.querySelector(".display")
let inputTracker = []

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
    
    // console.log(operandsContainer.contains(number.target))

    // 
    

    if (number.target.textContent === "clear") {
        tracker = ""
        inputTracker = []
        tracker2 = ""

        
    } 
    if (inputTracker.length === 0 || inputTracker.length === 2) { // if we are on the 0 index or on the 2 index we cant have a operator
        if (operandsContainer.contains(number.target)) {
                tracker = ""
        } 
        tracker += number.target.textContent
   
    
    } else if (inputTracker.length === 1) {
         plusOperator.addEventListener("click", () => {
                    inputTracker[0] = tracker
                    inputTracker[1] = "+"
        })
    }

   
    console.log(tracker)

    if (inputTracker.length === 3) {
          equalsbutton.addEventListener("click", () => {
                   console.log(inputTracker)
        })
    }
            
    if (tracker === "clear" || tracker2 === "clear") {
        tracker = ""
        tracker2 = ""
    }
           
                
               
              
            
            

        
        
       

   
    
  
    
   
        
    
    
    
       
})









 





