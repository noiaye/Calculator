let operator = undefined
let buttonthatwasClicked = ""
// let numberOne = undefined
// let numberTwo = undefined
let inputTracker = []




const calculatorScreen = document.querySelector(".screen")


const plusOperator = document.querySelector(".add") 
plusOperator.addEventListener("click", () => {
    operator = "+"
})

const minusOperator = document.querySelector(".subtract") 
minusOperator.addEventListener("click", () => {
    operator = "-"
})

const digits = document.querySelector(".threes")

// digits.addEventListener("click", () => {
    
// })





// const buttons = document.querySelectorAll("button")
// buttons.forEach(button => {
    
//     button.addEventListener("click", () => {
//         buttonthatwasClicked = button.textContent
//         calculatorScreen.textContent = buttonthatwasClicked
//         console.log(buttonthatwasClicked)
//     })
// });

const equalsbutton = document.querySelector(".equals")


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

const display = document.querySelector(".display")



display.addEventListener("click", (object) => {
    calculatorScreen.textContent = inputTracker
    if (object.target.textContent === "clear") {
        inputTracker = []
    } else {
         inputTracker.push(object.target.textContent)
       
    }
    if (inputTracker.length === 3) {
        
        // console.log("got here")
     
            
            let result = operate(inputTracker[1], inputTracker[0], inputTracker[2])
            
            // console.log(result)
            equalsbutton.addEventListener("click", () => {
            // calculatorScreen.textContent = result
                // console.log(String(inputTracker[1]))
            })
            inputTracker = []
            inputTracker[0] = result
            console.log(inputTracker)
    
    }
   
})




// equalsbutton.addEventListener("click", () => {
//     if (numberOne != undefined &&  numberTwo != undefined && operator != undefined) {
//         if (operator === "+") {
//             numberOne = add(numberOne, numberTwo)
//             calculatorScreen.textContent = numberOne
//         }
//     }
// })



// When equals button is pressed
// If numberOne is not "" and numberTwo is not "" then
// If operator is any of the operators listed then
// if operator is + we call plus or if ...
// Make different variables for each result of operation
// make the approtpriate result to the appropriate variables
// If any of these variables have a value , then 
// output the value tot he screen
// And upon the user pressing plus again it



// We can check the length of inputs
// So essentially we have an input array or string which tracks what has been pressed
// Now if the length of the array becomes 3 
// Then we check that the first element was a number, the second element an operator and the third element a number
// Then we perform the operations

