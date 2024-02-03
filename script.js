const userInput = document.querySelector('.input')
const calcResult = document.querySelector('.result')
const numBtn = document.querySelectorAll('.num-btn')
const operatorBtn = document.querySelectorAll('.operator-btn')
const acBtn = document.querySelector('#ac-btn')
const decimalBtn = document.querySelector('#decimal-btn')
const equalsBtn = document.querySelector('#equals-btn')

const clearInputScreen = () => {
  return userInput.textContent = ''
};

const addition = (a, b) => {
  return parseFloat(a) + parseFloat(b);
};

const subtraction = (a, b) => {
  return parseFloat(a) - parseFloat(b);
};
const multiplication = (a, b) => {
  return parseFloat(a) * parseFloat(b);
};

const division = (a, b) => {
  return parseFloat(a) / parseFloat(b);
};

const operate = (a, b, operator) => {
  if (operator = "+") {
    return addition(a, b)
  } else if (operator = "-") {
    return subtraction(a, b)
  } else if (operator = "*") {
    return multiplication(a, b)
  } else if (operator = "/") {
    return division(a, b)
  }
};

numBtn.forEach((button) => {
  button.addEventListener('click', () => {
    userInput.textContent = userInput.textContent + button.value  
  })
});

acBtn.addEventListener('click', () => {
  return clearInputScreen()
});