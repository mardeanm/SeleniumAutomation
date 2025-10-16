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

## Folder Structure
```bash
selenium-automation/
├── mochawesome-report/       # Auto-generated test reports
│   └── images/               # Screenshots saved here
├── node_modules/             # Installed dependencies
├── test/                     # Test cases
│   ├── tc001.js              # Valid login test case
│   └── tc002.js              # Invalid login test case
├── functions.js              # Helper methods: login, screenshots, assertions
├── testSetup.js              # Shared imports and setup for all tests
├── data.json                 # Test data (usernames, passwords, etc.)
├── package.json              # npm config + test command
├── package-lock.json         # Dependency lock file
├── .gitignore                # Files/folders Git should ignore
└── README.md                 # Project documentation
```

## Sample Test Case

Valid login test (TC001) using a real webpage with screenshot reporting and test data abstraction.

## Screenshots 
Screenshots are automatically added to the Mochawesome report during the testcases and are dynamically named based on Date.now() and saved in a report folder
<img width="1295" height="814" alt="image" src="https://github.com/user-attachments/assets/d0f71042-080c-4063-b437-3a65d76c24ec" />

## Test Report
After running the tests open the report in your browser with:
```bash
file:///C:/selenium/mochawesome-report/mochawesome.html
```
<img width="1896" height="869" alt="image" src="https://github.com/user-attachments/assets/d1b50e6e-dedc-452f-a498-b35dd63214f4" />


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
    "test": "npx mocha --no-timeouts --reporter mochawesome --require mochawesome/register --reporter-options charts=true",
}
```
