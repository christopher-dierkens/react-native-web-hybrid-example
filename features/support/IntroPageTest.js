const puppeteer = require('puppeteer');

const { Given, When, Then, After, Before } = require('cucumber');
const webUrl = 'http://localhost:3000/';

let page;
let browserObj;

// Before starting test case ensure webpage is open,
// also could navigate to next page here moving forward
//now not using World.js
Before(async function() {
  await puppeteer.launch({ headless: false }).then(async (browser) => {
    browserObj = browser;
    page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 800 });
    await page.goto(webUrl);
  });
});

Then('I check the test navigated to the correct url {string}', async function(
  expectedUrl
) {
  const actualUrl = await page.url();
  console.log(actualUrl, expectedUrl);
});

After(async function() {
  await browserObj.close();
});
