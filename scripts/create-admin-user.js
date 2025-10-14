#!/usr/bin/env node

process.env.TS_NODE_COMPILER_OPTIONS = JSON.stringify({
  module: 'commonjs',
  moduleResolution: 'node'
});

// register ts-node so we can execute the TypeScript script directly
require('ts-node/register/transpile-only');

require('./create-admin-user.ts');
