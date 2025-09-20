const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
const sum = num1 + num2;

// Проверка среды выполнения
if (typeof window !== "undefined") {
  // Браузер
  console.log(`%cСумма ${num1} + ${num2} = ${sum}`, "color: yellow; font-weight: bold;");
} else {
  // Node.js
  console.log(`\x1b[33mСумма ${num1} + ${num2} = ${sum}\x1b[0m`);
}