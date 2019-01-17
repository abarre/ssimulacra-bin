/*global it*/
'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const binBuild = require('bin-build');
const binCheck = require('bin-check');
const tmp = path.join(__dirname, 'tmp');
const pkg = require('../package.json');

it('should return path to binary and verify that it is working', (done) => {
	const image = path.join(__dirname, 'img.png')
	binCheck(require('../'), [image, image])
		.then(() => done())
		.catch(err => done(err));
});
