const { Given, When, Then, After, Before } = require('cucumber');
const { expect } = require('chai');

const { launch } = require('../browser');
let page;

Before(async () => {
  const browser = await launch();
  page = await browser.newPage();
});

Given('I have navigated to {string}', (url) => {
  return page.goto(url);
});

When('the page has loaded', () => {
  return page.$('body');
});

When('the page has loaded the message', () => {
  return page.$('p');
});

Then('the current url is {string}', async (url) => {
  expect(await page.url()).to.equal(url);
});

Then('the shared message is {string}', async (message) => {
  expect(await page.$eval('p', (node) => node.innerText)).to.equal(message);
});

After(async function() {
  await page.close();
});
