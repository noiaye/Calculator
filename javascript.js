let operator = undefined
let indexTracker = 0
const equalsbutton = document.querySelector(".equals")
const display = document.querySelector(".display")
let inputTracker = []
let operaterEnabled = false
let finalTracker = ""
let finaltracker2 = ""
let resultedofOperation = false
let tracker2Tracker = false
let readyForEquals = false
let switchedtoSecond = false
let firsted = false
let canTracker1 = true
let canTracker2 = false
let operatorOnSwitch = ""
let canPperator = false

let tracker2 = ""
let clear = document.querySelector(".clear")
let tracker = ""

let operandsContainer = document.querySelector(".operands-container")

function clearr() {
    tracker = ""
    tracker2 = ""
    inputTracker = []
    calculatorScreen.textContent = ""
    operator = ""
    canTracker1 = true
    canTracker2 = false
}


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



clear.addEventListener("click", () => {
    console.log("cleared")
    clearr()
})




display.addEventListener("click", (number) => {
    
    
    if (!operandsContainer.contains(number.target)) {
        console.log("yes")
        if (canTracker1 === true) {
            tracker += number.target.textContent
        }
        inputTracker[0] = tracker

        calculatorScreen.textContent = `${inputTracker[0]}`
       
        firsted = true
        canTracker1 = false
    }

    if (operandsContainer.contains(number.target) && number.target.textContent != "clear" && number.target.textContent != "=" && inputTracker.length === 1) {
        console.log("yesoperater")
        // finaltracker = tracker
       
        operaterEnabled = true
        operator = number.target.textContent
        inputTracker[1] = operator
        calculatorScreen.textContent = `${inputTracker[0]} ${inputTracker[1]}`
    }

    if (operaterEnabled === true && !operandsContainer.contains(number.target) && firsted === true) {
       
        console.log("yesthirdnum")
        canTracker2 = true
        tracker2Tracker = true
        // tracker2 += number.target.textContent
        if (canTracker2 === true) {
             tracker2 += number.target.textContent
        }
       
        inputTracker[2] = tracker2
        calculatorScreen.textContent = `${inputTracker[0]} ${inputTracker[1]} ${inputTracker[2]}`
        readyForEquals = true
        canTracker2 = false
    }

    if (number.target.textContent === "=" && operaterEnabled === true) {
        tracker2 = ""
        operator = ""
        let resultOfOperation = operate(inputTracker[1], inputTracker[0], inputTracker[2])
        inputTracker = []
        tracker = String(resultOfOperation)
        canTracker1 = true
        calculatorScreen.textContent = `${resultOfOperation}`
        console.log(resultOfOperation) // If equals then, else if it is any operation excluding clear and equals, then still perform the operation 
    }

    if (operandsContainer.contains(number.target) && firsted === true && operaterEnabled === true && number.target.textContent != "=" && inputTracker.length === 3) {
        canTracker2 = true
        operaterEnabled = true
        readyForEquals = false
        console.log("switched")
        let tempResult = operate(inputTracker[1], inputTracker[0], inputTracker[2])
        switchedtoSecond = true
        tracker = String(tempResult)
        tracker2 = ""
        inputTracker = []
        inputTracker[0] = String(tempResult)
        inputTracker[1] = number.target.textContent
        calculatorScreen.textContent = `${tempResult} ${number.target.textContent}`
    }
    // else {
    //     clearr()
    //     console.log("failed")
    // }






    // threes.addEventListener("click", (numb) => {
    //     if (operaterEnabled === true) {
    //         console.log("reached here")
    //         tracker2 += numb.target.textContent
    //     }
       
    // })
})
// problem is that when i press clear, for some reason it is picking up the threes event listener instead of the display


// equalsbutton.addEventListener("click", () => {
//     operaterEnabled = false
//     inputTracker[0] = finalTracker
//     inputTracker[1] = operator
//     inputTracker[2] = tracker2
//     console.log(inputTracker)
// })


// && !number.target.textContent === "clear" && !number.target.textContent === "="


       






 





