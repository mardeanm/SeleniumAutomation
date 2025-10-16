# Selenium Automation Framework
## Author:
Built by Mardean M

This project demonstrates real-world end-to-end test automation using:

- Selenium WebDriver (Node.js)
- Mocha + Chai for test structure & assertions
- Mochawesome for HTML reports with screenshots
- Custom helper functions to modularize test logic
- JSON-based data-driven testing

## Features:
- Reusable Functions:Login, Screenshot, and Verifications in functions.js
- Readable JSON Test Data for usernames, passwords, and other test inputs
- Helpful test reports due to Mochawesome and automatic screenshots
- 

## Folder Structure

selenium/
mochawesome-report/ # Auto-generated HTML test reports + screenshots
  - images/ # Screenshot folder
node_modules/ # Project dependencies (npm install)
test/ # Test cases
  - tc001.js # Valid login test
  - tc002.js # Invalid login test
functions.js # All reusable helper methods
testSetup.js # Global imports used in each test
data.json # Test data (user/pass/expected text)
package.json # npm config + test script
.gitignore # Ignored folders/files
README.md # This file


## Sample Test Case

Valid login test (TC001) using a real webpage with screenshot reporting and test data abstraction.

## Screenshots 
Screenshots are automatically added to the Mochawesome report during the testcases and are dynamically named based on Date.now() and saved in a report folder
<img width="1295" height="814" alt="image" src="https://github.com/user-attachments/assets/d0f71042-080c-4063-b437-3a65d76c24ec" />

## Test Report
After Running open: mochawesome-report/mochawesome.html
in your browser to view the report containing: test pass/fail summaries, console logs, screenshots

## Setup & Run
Install Dependencies
Node.js is required
```bash
npm install
npm install selenium-webdriver mocha chai mochawesome chromedriver geckodriver
```
To run all testcase:
```bash
npm test
```
Ensure package.json includes:
```bash
"scripts": {
  "test": "mocha --timeout 60000 --reporter mochawesome"
}
```
