const path = require('path');

const dev = require('@tencent/lego-plugin-demo-dev');

const ROOT_DIR      = path.join(__dirname, '..', '..', '..');
const COMPONENT_DIR = __dirname;

dev(ROOT_DIR, COMPONENT_DIR);
