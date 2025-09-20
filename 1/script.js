const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
const sum = num1 + num2;

import chalk from 'chalk';
console.log(chalk.yellow(`Сумма ${num1} + ${num2} = ${sum}`));