// selenium setup
global.Builder = require("selenium-webdriver").Builder;
global.Browser = require("selenium-webdriver").Browser;
global.By = require("selenium-webdriver").By;
global.chrome = require("selenium-webdriver/chrome");
global.chromedriver = require("chromedriver");

//Report Utilites
global.chai = require("chai").should();
global.moreDetails = require("mochawesome/addContext");
global.fs = require("fs");

// helper functions
global.login = require("./functions").login;
global.verifyLoginFailed = require("./functions").verifyLoginFailed;
global.verifyLoginSuccess = require("./functions").verifyLoginSuccess;
global.readData = require("./functions").readData;
global.takeScreenshot = require("./functions").takeScreenshot;

// Console Text
beforeEach(async function () {
  console.log("Before test");
  
});

afterEach(async function () {
  console.log("After test");
});
