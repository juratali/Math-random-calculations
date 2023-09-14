const operators = ["+", "-", "*", "/"];

function getRandomNumber() {
  const numbers = [0, 1, 2, 3];
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

function generateEvenlyDivisibleNumbers() {
  let num1_dividable, num2_dividable;

  do {
    num1_dividable = Math.floor(Math.random() * 51) + 1;
    num2_dividable = Math.floor(Math.random() * 11) + 1;
  } while (num1_dividable % num2_dividable !== 0);

  return { num1_dividable, num2_dividable };
}

function generateRandomMathProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  const operator = operators[getRandomNumber()];

  let answer;

  if (operator === "-") {
    const [smaller, larger] = [num1, num2].sort((a, b) => a - b);
    answer = larger - smaller;

    return {
      math_problem: `${larger} ${operator} ${smaller}`,
      answer: answer.toString(),
    };
  } else if (operator === "/") {
    if (num2 === 0) {
      return generateRandomMathProblem();
    }

    const { num1_dividable, num2_dividable } = generateEvenlyDivisibleNumbers();
    answer = num1_dividable / num2_dividable;

    return {
      math_problem: `${num1_dividable} ${operator} ${num2_dividable}`,
      answer: answer.toString(),
    };
  } else if (operator === "+") {
    answer = num1 + num2;
  } else if (operator === "*") {
    answer = num1 * num2;
  }

  return {
    math_problem: `${num1} ${operator} ${num2}`,
    answer: answer.toString(),
  };
}

console.log(generateRandomMathProblem());
