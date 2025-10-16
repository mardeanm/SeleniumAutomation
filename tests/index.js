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

//   it("TC001 - Allow a valid user to login to BookStore", async function () {
//     let driver = await new Builder().forBrowser(Browser.CHROME).build();
//     const tcData = await readData("tc001");
//     try {
//       console.log("TC001 start");

//       //Login function pass driver, username, password
//       await login(driver, tcData.data.username, tcData.data.password);
//       //first screenshot
//       var filename1 = await takeScreenshot(driver);
//       moreDetails(this, "../" + filename1);
//       //check for proper page using text
//       await verifyLoginSuccess(driver, tcData.data.expectedText);
//       //second screenshot
//       var filename2 = await takeScreenshot(driver);
//       moreDetails(this, "../" + filename2);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       await driver.quit();
//       console.log("----------------");
//       console.log("TC001 exit");
//     }
//   });
//   // it("TC002 - Should not allow login for invalid login credentials", async function () {
//   //   let driver = await new Builder().forBrowser(Browser.CHROME).build();
//   //   const tcData = await readData("tc002");
//   //   try {
//   //     console.log("TC002 start");
//   //     //first screenshot
//   //     var filename = await takeScreenshot(driver);
//   //     moreDetails(this, "../" + filename);
//   //     //Login function pass invalid password
//   //     await login(driver, tcData.data.username, tcData.data.password);
//   //     //check for proper page by checking text
//   //     await verifyLoginFailed(driver, tcData.data.expectedText);
//   //     //second screenshot
//   //     var filename = await takeScreenshot(driver);
//   //     moreDetails(this, "../" + filename);
//   //   } catch (error) {
//   //     console.log(error);
//   //   } finally {
//   //     await driver.quit();
//   //     console.log("----------------");
//   //     console.log("TC002 exit");
//   //   }
//   // });
// });
// //var tc001 = async function () {};

// //tc001();

// // var tc002 = async function () {};

// //tc002();

// // var testsuite = (async function () {
// //   await tc001();
// //   await tc002();
// // })();
