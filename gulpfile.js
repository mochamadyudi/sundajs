'use strict';

const path = require('path');
const tsConfigPath = path.join(__dirname, 'tsconfig.json');

require('ts-node').register({
  projects: tsConfigPath
});

require('./piranti/gulp/gulpfile')