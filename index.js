#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { alias } = require('yargs');

const date = new Date()


function current(yargs) {

	return yargs
		.option('y', {
			alias: 'year',
			describe: `Получаем год`
		})
		.option('m', {
			alias: 'month',
			describe: `Получаем Месяц`
		})
		.option('d', {
			alias: 'day',
			describe: `Получаем день`
		})
}

function getDate(argv, x) {

	let { year, month, day } = argv

	if (!year && !month && !day) {
		console.log('Дата: ' + date.toISOString())
	};

	for (const key in { year, month, day }) {

		const element = { year, month, day }[key];

		if (element) {
			let temp = element

			if (temp === true) {
				temp = 0
			}
		
			switch (key) {
				case 'year':
					console.log(`Год: ${(date.getFullYear()) + (x * temp)}`);
					break;
				case 'month':
					console.log(`Месяц:  ${(date.getMonth() + 1 + (x * temp))}`);
					break;
				case 'day':
					console.log(`День: ${date.getDate() + (x * temp)}`);
					break;
			}
		}
	}
	console.log(argv);
}

const argv = yargs(hideBin(process.argv))
	.command(
		'current',
		'Получение даты в формате ISO',
		(yargs) => current(yargs,),
		(argv) => getDate(argv, x = 0)
	)
	.command(
		'add',
		'Получение будущей даты в формате ISO',
		(yargs) => current(yargs),
		(argv) => getDate(argv, x = 1)
	)
	.command(
		'sub',
		'Получение прошлой даты в формате ISO',
		(yargs) => current(yargs),
		(argv) => getDate(argv, x = -1)
	)

	.argv

	console.log(argv);