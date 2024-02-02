const addition = (a, b) => {
  return a + b;
};

const subtraction = (a, b) => {
  return a - b;
};

const multiplication = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
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