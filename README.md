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
│
├── mochawesome-report/       # Auto-generated HTML reports + screenshots
│   └── images/               # Screenshots for failed/passed steps
│
├── node_modules/             # Node.js dependencies
│
├── test/                     # Test cases
│   ├── tc001.js              # Example test case: valid login
│   └── tc002.js              # Example test case: invalid login
│
├── functions.js              # All helper methods (login, screenshot, validation)
├── testSetup.js              # Shared imports and global setup
├── data.json                 # Test data (username, password, expected values)
├── package.json              # npm scripts and dependencies
└── .gitignore                # Ignored files for Git


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
