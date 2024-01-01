const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let minNum
let maxNum
let num

let startText = `
***

Игра "Угадай число"
Вы вибираете диапазон значений, в пределах которого должно быть загадано число.
Программа загадывает число в этом диапазане.
Вы пытаетесь угадать число.

Поехали?

***

Вибирите минимальное значение диапазона: `

let start = () => rl.question(startText, (answer) => {
	minNum = answer;
	console.log(minNum);
	min()

});

start()

let min = () => rl.question('Выбирите максимальное значение диапазона: ', (answer) => {
	maxNum = answer;
	console.log(maxNum);
	randomNum(minNum, maxNum)
	console.log('Число загадано!');
	guess()
});

let guess = () => rl.question(`Введите число от ${minNum} до ${maxNum} `, (answer) => {

	if (answer < minNum || answer > maxNum) {
		console.log(`Число должно быть в диапазоне от ${minNum} до ${maxNum}`);
		guess()
		return
	}

	if (answer < num) {
		console.log(`Больше`);
		guess()
		return
	} else if (answer > num) {
		console.log(`Меньше`);
		guess()
		return
	} else {
		console.log('Верно! Вы угадали число');
		rl.close()
	}
});




function randomNum(min, max) {
	console.log(min);
	console.log(max);
	num = Math.floor(Math.random() * (max - min + 1) + min);
	console.log(num);
}