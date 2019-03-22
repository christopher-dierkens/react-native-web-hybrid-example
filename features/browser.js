const puppeteer = require('puppeteer');
const { AfterAll } = require('cucumber');

let browser;

async function launch(options = { headless: true }) {
  browser = browser || (await puppeteer.launch(options));
  return browser;
}

AfterAll(() => browser && browser.close());

module.exports = {
  launch,
};
