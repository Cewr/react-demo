const path     = require('path');
const crossEnv = require('cross-env');

const dir   = path.join(__dirname, '..', '..', '..', 'node_modules', '.bin');
const nyc   = path.join(dir, 'nyc');
const mocha = path.join(dir, 'mocha');

crossEnv(['NODE_ENV=test', nyc, mocha]);
