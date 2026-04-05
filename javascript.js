let operator = undefined
const equalsbutton = document.querySelector(".equals")
const display = document.querySelector(".display")
let inputTracker = []
let readyForEquals = false
let firsted = false
let canTracker1 = true
let canTracker2 = false
let equalsTracker = false
let operaterWasDivision = false
let lastWasZero = false


let tracker2 = ""
let clear = document.querySelector(".clear")
let tracker = ""

let operandsContainer = document.querySelector(".operands-container")

function clearr() {
    firsted = false
    tracker = ""
    tracker2 = ""
    inputTracker = []
    calculatorScreen.textContent = ""
    operator = ""
    canTracker1 = true
    canTracker2 = false
    operaterWasDivision === false
    lastWasZero = false
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

display.addEventListener("click", (number) => {
    if (number.target.textContent === "clear") {
        clearr()
    }
    
    if (!operandsContainer.contains(number.target) && canTracker1 === true && equalsTracker === false && number.target.className != "digits-container" && number.target.className != "display" && number.target.className != "three-1" && number.target.className != "three-2" && number.target.className != "three-3"&& number.target.className != "num-0" && number.target.className != "screen" && number.target.className != "screen") {
        
        equalsTracker = false
        console.log("yes")
        
        tracker += number.target.className
        
        inputTracker[0] = tracker

        calculatorScreen.textContent = `${inputTracker[0]}`
       
        firsted = true
    }

    if (operandsContainer.contains(number.target) && number.target.textContent != "clear" && number.target.textContent != "=" && firsted === true && number.target.className != "digits-container" && number.target.className != "display" && number.target.className != "three-1" && number.target.className != "three-2" && number.target.className != "three-3"&& number.target.className != "num-0" && number.target.className != "screen") {
         equalsTracker = false
         firsted = true
        canTracker1 = false
        canTracker2 = true
        console.log("yesoperater")
        
       
        operator = number.target.textContent

        if (operator === "/") {
            operaterWasDivision = true
        }
        inputTracker[1] = operator
        calculatorScreen.textContent = `${inputTracker[0]} ${inputTracker[1]}`
        
        
    }

    if (!operandsContainer.contains(number.target) && firsted === true && canTracker2 === true && number.target.className != "digits-container" && number.target.className != "display" && number.target.className != "three-1" && number.target.className != "three-2" && number.target.className != "three-3"&& number.target.className != "num-0") {
         equalsTracker = false
       
        console.log("yesthirdnum")
        
       
        
        
        tracker2 += number.target.textContent
        
       
        inputTracker[2] = tracker2
        calculatorScreen.textContent = `${inputTracker[0]} ${inputTracker[1]} ${inputTracker[2]}`
        readyForEquals = true
        if (tracker2 === "0") {
            lastWasZero = true
        }
       
    }

    if (number.target.textContent === "=" && readyForEquals === true && number.target.className != "digits-container" && number.target.className != "display" && number.target.className != "three-1" && number.target.className != "three-2" && number.target.className != "three-3"&& number.target.className != "num-0") {
        if (operaterWasDivision === true && lastWasZero === true) {
            clearr()
            calculatorScreen.textContent = `ERROR TRIED TO DIVIDE WITH ZERO`
            
        } else if (operaterWasDivision === true) {
            canTracker2 = false
            firsted = true
            tracker2 = ""
            operator = ""
            inputTracker[0] = Number(inputTracker[0])
          
            inputTracker[2] = Number(inputTracker[2])
           
            let resultOfOperationRounded = operate(inputTracker[1], inputTracker[0], inputTracker[2])
           
            let rounded = Math.round(resultOfOperationRounded * 100) / 100
            inputTracker = []
            inputTracker[0] = rounded
            tracker = String(resultOfOperationRounded)
            canTracker1 = true
            equalsTracker = true
            calculatorScreen.textContent = `${rounded}`
            
        } else {
                canTracker2 = false
                firsted = true
                tracker2 = ""
                operator = ""
                let resultOfOperation = operate(inputTracker[1], inputTracker[0], inputTracker[2])
                inputTracker = []
                inputTracker[0] = resultOfOperation
                tracker = String(resultOfOperation)
                canTracker1 = true
                equalsTracker = true
                calculatorScreen.textContent = `${resultOfOperation}`
                console.log(resultOfOperation)
        }
        
    }

    if (equalsTracker === true && !operandsContainer.contains(number.target) && number.target.className != "digits-container" && number.target.className != "display" && number.target.className != "three-1" && number.target.className != "three-2" && number.target.className != "three-3"&& number.target.className != "num-0" && number.target.className != "screen") {
        console.log("special")
        equalsTracker = false
        clearr()
        tracker += number.target.textContent
        inputTracker[0] = tracker
        calculatorScreen.textContent = `${inputTracker[0]}`
        firsted = true


    }

    

    if (operandsContainer.contains(number.target) && firsted === true && number.target.textContent != "=" && inputTracker.length === 3 && number.target.textContent != "clear" && number.target.className != "digits-container" && number.target.className != "display" && number.target.className != "three-1" && number.target.className != "three-2" && number.target.className != "three-3"&& number.target.className != "num-0" && number.target.className != "screen") {
        
        readyForEquals = false
        console.log("switched")
        let tempResult = operate(inputTracker[1], inputTracker[0], inputTracker[2])
     
        tracker = String(tempResult)
        tracker2 = ""
        inputTracker = [] 
        inputTracker[0] = String(tempResult)
        inputTracker[1] = number.target.textContent
        calculatorScreen.textContent = `${tempResult} ${number.target.textContent}`
    }
   
})




// else if (operaterWasDivision === true) {
//             firsted = false
//             tracker2 = ""
//             operator = ""
//             inputTracker[0] = Number(inputTracker[0])
//             console.log(`Input 0: ${inputTracker[0]}`)
//             inputTracker[2] = Number(inputTracker[2])
//             let resultOfOperationRounded = operate(inputTracker[1], inputTracker[0], inputTracker[2])
//             let rounded = Math.round(resultOfOperationRounded * 100) * 100
//             inputTracker = []
//             inputTracker[0] = rounded
//             tracker = String(resultOfOperationRounded)
//             canTracker1 = true
//             equalsTracker = true
//             calculatorScreen.textContent = `${rounded}`
 




