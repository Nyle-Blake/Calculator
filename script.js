const upperInput = document.querySelector('.upper-input')
const lowerInput = document.querySelector('.lower-input')
const numBtn = document.querySelectorAll('.num-btn')
const operatorBtn = document.querySelectorAll('.operator-btn')
const acBtn = document.querySelector('#ac-btn')
const decimalBtn = document.querySelector('#decimal-btn')
const equalsBtn = document.querySelector('#equals-btn')

let firstNum, secondNum, operator, round = 1; 
// Because there is a global variable for firstNum, secondNum, and operator only one calculation involving 2 numbers and an operator can be done at a time
// Any calculation after but include the result of the previous calculation as firstNum
// Attempting to use more than one operator will replace the previous operator with the new one and remove the previously selected secondNum

const addDigit = (numberValue) => {
  lowerInput.innerText = lowerInput.innerText.concat("", numberValue)
}

const addOperator = (operatorValue) => {
  if (lowerInput.innerText) {
    round = 1;
    operator = operatorValue;
    firstNum = lowerInput.innerText;
    upperInput.innerText = lowerInput.innerText.concat(" ", operator);
    lowerInput.innerText = '';
  }
}

const calculate = (firstNum, secondNum, operator) => {
  let result;
  let a = parseFloat(firstNum);
  let b = parseFloat(secondNum);
  
  console.log(operator)
  // if (operator = '+') { result = a + b}
  // else if (operator = '-') { result = a - b}
  // else if (operator = '*') { result = a * b}
  // else if (operator = '/') { result = a / b}
  // else { } // no operator selected so do nothing

  switch(operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:

  }

  return result
}

const getResult = () => {
  if (operator && round == 1) {
    upperInput.innerText = upperInput.innerText.concat("", lowerInput.innerText)
    secondNum = lowerInput.innerText
    lowerInput.innerText = calculate(firstNum, secondNum, operator)
    round++

  } else if (operator) {
    upperInput.innerText = `${lowerInput.innerText} ${operator} ${secondNum}`
    firstNum = lowerInput.innerText
    lowerInput.innerText = calculate(firstNum, secondNum, operator)

  } else {
    //do nothing because there is no operator
  }
}

const deciamlPoint = () => {
  if (!(lowerInput.innerText.includes('.') )) {
    lowerInput.innerText = lowerInput.innerText.concat('.')
  }
};

const clearInputScreen = () => {
  upperInput.innerText = ''
  lowerInput.innerText = ''
  firstNum = undefined
  secondNum = undefined
  round = 1
};

// event listeners :

numBtn.forEach((button) => {
  button.addEventListener('click', () => {
    addDigit(button.value)
  })
});

operatorBtn.forEach((button) => {
  button.addEventListener('click', () => {
    addOperator(button.value)
  })
});

acBtn.addEventListener('click', () => {
  clearInputScreen()
});

decimalBtn.addEventListener('click', () => {
  deciamlPoint()
})

equalsBtn.addEventListener('click', () => {
  getResult()
})