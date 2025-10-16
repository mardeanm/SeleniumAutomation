
require("../testSetup");


describe("Functional Test", async function () {

 
  it("TC001 - Allow a valid user to login to BookStore", async function () {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    const tcData = await readData("tc001");
    try {
      console.log("TC001 start");

      //Login function pass driver, username, password
      await login(driver, tcData.data.username, tcData.data.password);
      //first screenshot
      var filename1 = await takeScreenshot(driver);
      moreDetails(this, "../" + filename1);
      //check for proper page using text
      await verifyLoginSuccess(driver, tcData.data.expectedText);
      //second screenshot
      var filename2 = await takeScreenshot(driver);
      moreDetails(this, "../" + filename2);
    } catch (error) {
      console.log(error);
    } finally {
      await driver.quit();
      console.log("----------------");
      console.log("TC001 exit");
    }
  });

});

