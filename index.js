#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
// const { getDay, getMonth, calculateDate } = require('yargs/helpers');

const date = new Date()

// getFullYear()

function current(yargs) {
	// console.log(argv.year)	
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
	// .command(
	// 'current',
	// 'Получение текущей даты в формате ISO',
	// function name(params) {
	// 	console.log(date.toISOString());
	// })
	// .command(
	// 	'сurrent <-y>',
	// 	'Получение текущего года в формате ISO',
	// 	function name(params) {
	// 		console.log(date.getFullYear());
	// 	})
	// 	.command(
	// 		'current [-m]',
	// 		'Получение текущего месяца в формате ISO',
	// 		function name(params) {
	// 			console.log(date.getMonth() + 1);
	// 		})
	// .command(
	// 	'current [-d]',
	// 	'Получение текущего дня месяца в формате ISO',
	// 	function name(params) {
	// 		console.log(date.getDate());
	// 	})
	.option('current', {
		aliac: 'ДатаISO',
		description: 'Текущая дата в формате ISO'
	})
	.option('y', {
		aliac: 'ГодISO',
		description: 'Текущий год в формате ISO'
	})

	// 	.option('m', {
	// 		aliac: 'МесяцISO',
	// 		description: 'Текущий месяц в формате ISO'
	// 	})
	// 	.option('d', {
	// 		aliac: 'ДеньISO',
	// 		description: 'Текущий день месяца в формате ISO'
	// 	})


	.argv

