// const { Builder, Browser, By } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");
// const chromedriver = require("chromedriver");
// const chai = require("chai").should();
// const { describe } = require("mocha");
// var moreDetails = require("mochawesome/addContext");
// var fs = require("fs");

// //importing assertion for test verification
// //const assert = require('assert');
// //import functions
// var {
//   login,
//   verifyLoginFailed,
//   verifyLoginSuccess,
//   readData,
//   takeScreenshot,
// } = require("../functions");

// describe("Functional Test", async function () {
//   beforeEach(async function () {
//     console.log("Before each test");
//   });
//   this.afterEach(async function () {
//     console.log("End of Test");
//   });

//   it("TC002 - Should not allow login for invalid login credentials", async function () {
//     let driver = await new Builder().forBrowser(Browser.CHROME).build();
//     const tcData = await readData("tc002");
//     try {
//       console.log("TC002 start");
//       //first screenshot
//       var filename3 = await takeScreenshot(driver);
//       moreDetails(this, "../" + filename3);
//       //Login function pass invalid password
//       await login(driver, tcData.data.username, tcData.data.password);
//       //check for proper page by checking text
//       await verifyLoginFailed(driver, tcData.data.expectedText);
//       //second screenshot
//       var filename4 = await takeScreenshot(driver);
//       moreDetails(this, "../" + filename4);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       await driver.quit();
//       console.log("----------------");
//       console.log("TC002 exit");
//     }
//   });
// });
// //var tc001 = async function () {};

// //tc001();

// // var tc002 = async function () {};

// //tc002();

// // var testsuite = (async function () {
// //   await tc001();
// //   await tc002();
// // })();
