#!/usr/bin/env node

/**
 * Forcefully frees a TCP port before starting Next.js processes.
 * Usage: node scripts/free-port.js 3000
 */

const net = require('net');
const { execSync } = require('child_process');
const os = require('os');

async function isPortBusy(port) {
  return new Promise((resolve) => {
    const tester = net
      .createServer()
      .once('error', (err) => {
        resolve(err.code === 'EADDRINUSE');
      })
      .once('listening', () => {
        tester
          .once('close', () => resolve(false))
          .close();
      })
      .listen(port);
  });
}

async function freePort(port) {
  const busy = await isPortBusy(port);
  if (!busy) return;

  if (process.platform === 'win32') {
    console.warn('Automatic port cleanup is not supported on Windows. Please stop the process manually.');
    return;
  }

  const killedPids = new Set();

  const collectPids = (command) => {
    try {
      const stdout = execSync(command, { stdio: ['pipe', 'pipe', 'ignore'] }).toString().trim();
      stdout
        .split('\n')
        .map((pid) => pid.trim())
        .filter(Boolean)
        .forEach((pid) => killedPids.add(pid));
    } catch {
      // ignore command failure
    }
  };

  collectPids(`lsof -ti TCP:${port}`);
  collectPids(`lsof -ti TCP@127.0.0.1:${port}`);
  collectPids(`lsof -ti TCP@[::]:${port}`);

  if (killedPids.size) {
    try {
      execSync(`kill -9 ${Array.from(killedPids).join(' ')}`, { stdio: 'ignore' });
    } catch {
      // ignore
    }
  }

  // try fuser on Linux
  if (os.platform() === 'linux') {
    try {
      execSync(`fuser -k -n tcp ${port}`, { stdio: 'ignore' });
    } catch {
      // ignore
    }
    try {
      execSync(`fuser -k -n tcp6 ${port}`, { stdio: 'ignore' });
    } catch {
      // ignore
    }
  }

  if (killedPids.size) {
    console.log(`Freed port ${port} (terminated PIDs: ${Array.from(killedPids).join(', ')})`);
  }

  // wait a bit and re-check
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const stillBusy = await isPortBusy(port);
    if (!stillBusy) return;
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  console.error(`Port ${port} is still busy after attempted cleanup. Stop the process manually.`);
  process.exit(1);
}

async function run() {
  const rawPort = process.argv[2] ?? '3000';
  const port = Number(rawPort);

  if (!Number.isInteger(port) || port <= 0) {
    console.error(`Invalid port: ${rawPort}`);
    process.exit(1);
  }

  await freePort(port);
}

run().catch((err) => {
  console.error('Failed to free port:', err);
  process.exit(1);
});
