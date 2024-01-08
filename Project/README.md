# It is an automation framework for website testing lamoda.by
## Stack:
- node.js v.20.10.5
- playwright v.1.40.1 (for e2e tests)
- jest v.29.7.0 (for api tests)
## Installation:
This project assumes that you have Node.js properly installed in your computer.
To install the project, follow these steps:
- Clone this project locally `git clone <repository_url>`
- Navigate to it `cd <dir_path>`
- Install the project dependencies `npm install`
- Install playwright `npx playwright install`
## Running test
Test the individual test file by running `npx playwright test filename.spec.ts` or all tests using the `npx playwright test` command.
