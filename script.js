const upperInput = document.querySelector('.upper-input')
const lowerInput = document.querySelector('.lower-input')
const numBtn = document.querySelectorAll('.num-btn')
const operatorBtn = document.querySelectorAll('.operator-btn')
const acBtn = document.querySelector('#ac-btn')
const decimalBtn = document.querySelector('#decimal-btn')
const equalsBtn = document.querySelector('#equals-btn')

let operator;
let firstNum, secondNum, round = 1;

const addDigit = (number) => {
  lowerInput.innerText.concat("", number)
}

const addOperator = (operatorValue) => {
  if (lowerInput.textContent) {
    round = 1;
    operator = operatorValue;
    firstNum = lowerInput.textContent;
    upperInput.textContent = lowerInput.textContent.concat("", operator);
    lowerInput.textContent = '';
  }
}

const calculate = (firstNum, secondNum, operator) => {
  let result;
  let a = firstNum;
  let b = secondNum;

  if (operator = '+') { result = a + b}
  else if (operator = '-') { result = a - b}
  else if (operator = '*') { result = a * b}
  else if (operator = '/') { result = a / b}
  else { } // no operator selected so do nothing

  return result
}

const getResult = () => {
  if (operator && round == 1) {
    upperInput.textContent = upperInput.textContent.concat("", lowerInput.textContent)
    secondNum = lowerInput.textContent
    lowerInput.textContent = calculate(firstNum, secondNum, operator)
    round++
  } else if (operator) {
    upperInput.textContent = `${lowerInput.textContent} ${operator} ${secondNum}`
    firstNum = lowerInput.textContent
    lowerInput.textContent = operator(firstNum, secondNum)
  } else {
    //do nothing because there is no operator
  }
}

const deciamlPoint = () => {
  if (!(lowerInput.textContent.includes('.') )) {
    lowerInput.textContent = lowerInput.concat('.')
  }
};

const clearInputScreen = () => {
  upperInput.textContent = ''
  lowerInput.textContent = ''
  firstNum = undefined
  secondNum = undefined
  round = 1
};

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

deciamlPoint.addEventListener('click', () => {
  deciamlPoint()
})

// equalsBtn.addEventListener('click', () => {
//   clearInputScreen()
//   console.log(upperInput.textContent)
//   console.log(currentOperator)
// })