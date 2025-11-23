const { spawnSync } = require('child_process');
const puppeteer = require('puppeteer');

(async () => {
  try {
    const chromePath = (await puppeteer.executablePath()) || puppeteer.executablePath();
    process.env.CHROME_BIN = chromePath;
  } catch (e) {
    // fallback to require path
    process.env.CHROME_BIN = puppeteer.executablePath();
  }

  console.log('Using CHROME_BIN =', process.env.CHROME_BIN);

  const result = spawnSync('npx', ['ng', 'test', '--watch=false'], { stdio: 'inherit', shell: true, env: process.env });
  process.exit(result.status);
})();
