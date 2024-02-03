const userInput = document.querySelector('.input')
const calcResult = document.querySelector('.result')
const numBtn = Array.from(document.querySelectorAll('.num-btn'))
const operatorBtn = Array.from(document.querySelectorAll('.operator-btn'))
const otherBtn = Array.from(document.querySelectorAll('.other-btn'))

const clearInputScreen = () => {
  return userInput.textContent = ''
}

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