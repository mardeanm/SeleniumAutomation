# Selenium Automation Framework

This project demonstrates real-world end-to-end test automation using:

- ✅ Selenium WebDriver (Node.js)
- ✅ Mocha + Chai for test structure & assertions
- ✅ Mochawesome for HTML reports with screenshots
- ✅ Page-level abstraction and reusable helpers

## Folder Structure

- `test/`: Contains individual test cases (`tc001.js`, etc.)
- `functions.js`: Shared actions like login, screenshots, validations
- `testSetup.js`: Centralized imports and setup config
- `data.json`: Test data for running cases

## Sample Test Case

Valid login test (TC001) using a real webpage with screenshot reporting and test data abstraction.

## Setup & Run

```bash
npm install
npx mocha --reporter mochawesome
