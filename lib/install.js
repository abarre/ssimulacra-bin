'use strict';

const binBuild = require('bin-build');
const log = require('logalot');
const path = require('path');
const bin = path.join(__dirname, '..', 'vendor');
const pkg = require('../package.json');

log.info('compiling ssimulacra from source');

binBuild.url('https://github.com/cloudinary/ssimulacra/archive/master.zip', [
	`make && cp ssimulacra ${bin}/`
])
.then(() => log.success('ssimulacra built successfully'))
.catch(err => log.error(err.stack))
