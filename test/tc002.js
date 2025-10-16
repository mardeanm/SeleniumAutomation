

require("../testSetup"); 


describe("Functional Test", async function () {

  it("TC002 - Should not allow login for invalid login credentials", async function () {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    const tcData = await readData("tc002");
    try {
      console.log("TC002 start");
      //first screenshot
      var filename3 = await takeScreenshot(driver);
      moreDetails(this, "../" + filename3);
      //Login function pass invalid password
      await login(driver, tcData.data.username, tcData.data.password);
      //check for proper page by checking text
      await verifyLoginFailed(driver, tcData.data.expectedText);
      //second screenshot
      var filename4 = await takeScreenshot(driver);
      moreDetails(this, "../" + filename4);
    } catch (error) {
      console.log(error);
    } finally {
      await driver.quit();
      console.log("----------------");
      console.log("TC002 exit");
    }
  });
});
