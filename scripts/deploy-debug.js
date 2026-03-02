#!/usr/bin/env node
/**
 * Debug wrapper for deploy - logs to debug file, then runs wrangler.
 * Run: node scripts/deploy-debug.js
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG_PATH = '/home/stephen/.cursor/debug-45d975.log';

function log(obj) {
  const line = JSON.stringify({
    sessionId: '45d975',
    timestamp: Date.now(),
    ...obj,
  }) + '\n';
  fs.appendFileSync(LOG_PATH, line);
}

// #region agent log
log({
  hypothesisId: 'H1',
  location: 'deploy-debug.js:start',
  message: 'Deploy script started',
  data: {
    cwd: process.cwd(),
    deployScript: require('../package.json').scripts?.deploy,
  },
});
// #endregion

// #region agent log
log({
  hypothesisId: 'H2',
  location: 'deploy-debug.js:public-check',
  message: 'Check public directory',
  data: {
    publicExists: fs.existsSync(path.join(process.cwd(), 'public')),
    publicPath: path.resolve(process.cwd(), 'public'),
  },
});
// #endregion

const cmd = 'npx wrangler pages deploy public --project-name=personal-dev-site';

// #region agent log
log({
  hypothesisId: 'H4',
  location: 'deploy-debug.js:before-exec',
  message: 'About to run wrangler',
  data: { cmd },
});
// #endregion

try {
  execSync(cmd, { stdio: 'inherit', cwd: process.cwd() });
  // #region agent log
  log({
    hypothesisId: 'H1',
    location: 'deploy-debug.js:success',
    message: 'Deploy succeeded',
    data: {},
  });
  // #endregion
} catch (e) {
  // #region agent log
  log({
    hypothesisId: 'H1',
    location: 'deploy-debug.js:error',
    message: 'Deploy failed',
    data: {
      status: e.status,
      exitCode: e.status,
      stderr: e.stderr?.toString?.()?.slice?.(0, 500),
    },
  });
  // #endregion
  throw e;
}
