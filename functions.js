//import functions from selenium
var { By, until } = require("selenium-webdriver");
const chai = require("chai").should();
var fs= require('fs');
//read data from file url and test specific data
var readData = async function(tcName){
    const content = fs.readFileSync('./data.json');
    const obj = JSON.parse(content);

    for ( let index = 0; index < obj.length; index++){
        if(tcName == obj[index]["testName"]){
            return obj[index];
        }
    }

}
//Login Function
var login = async function (driver, username, password) {
    const globalData = await readData("global");
  //1 navigate to login page
  await driver.get(globalData.data.url);
  //2 enter valid login details
  await driver
    .findElement(By.xpath("//input[@name='login_email']"))
    .sendKeys(username);
  await driver
    .findElement(By.xpath("//input[@id='password']"))
    .sendKeys(password);
  //3 click on login button
  await driver.findElement(By.xpath("//input[@value='Login']")).click();
};
//verification function
var assertElementText = async function (driver, textPath, expectedText) {
    
  //verify the text is present
  var actualText = await driver
    .findElement(By.xpath(textPath)).getText();

  //assert.equal(actualText,expectedText, "Validation for Login");
  actualText.should.equal(expectedText);
};
//hard code for failed login
async function verifyLoginFailed(driver, expectedText) {
  const errorXPath = "//h3[normalize-space()='Your Login Name or Password is invalid']";
  await assertElementText(driver, errorXPath, expectedText);
}
//hard code for a successful login
async function verifyLoginSuccess(driver,expectedText) {
  const greetingXPath = "//h2[contains(text(),'Hello')]";

  await assertElementText(driver, greetingXPath, expectedText);
}
//screenshots for mochawesome report
var takeScreenshot = async function (driver){
  //take screenshot
  let image = await driver.takeScreenshot();
  //dynamic file name 
  let filename="./mochawesome-report/images"+Date.now()+".png"
  //save image
  await fs.writeFileSync(filename, image, "base64");
  return filename
}

module.exports = {
  login, verifyLoginFailed,verifyLoginSuccess, readData, takeScreenshot
};
