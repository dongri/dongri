#!/usr/bin/env node
'use strict';
const path = require('path');
const termImg = require('term-img');
const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const { h, render } = require('ink');

const ui = importJsx('./cui');

const fallback = async () => {
	const image = await terminalImage.file(path.join(__dirname, '695.png'), {width: 20, height: 20});
	console.log(image);
};

termImg(path.join(__dirname, '695.png'), { width: '150px', height: '150px', fallback });

render(h(ui));
