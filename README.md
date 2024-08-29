# Sprint 7 project

# QA Automation Project

## Project Description

This project is a quality assurance automation suite designed to test various API endpoints for the Urban Grocers platform. The project focuses on validating the functionality of `GET`, `POST`, `PUT`, and `DELETE` requests to ensure that the API behaves as expected. The tests cover retrieving, creating, updating, and deleting resources such as products, kits, and other essential components of the Urban Grocers platform.

## Technologies and Techniques Used

- **JavaScript**: The primary programming language used for writing test scripts.
- **Jest**: A JavaScript testing framework used to run and manage test cases.
- **Fetch API**: Used to make HTTP requests within the test cases.
- **Node.js**: The runtime environment for executing JavaScript on the server side.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, ensuring code quality.

## Project Structure

The project is organized into the following structure:


- **getHandlers.test.js**: Contains tests for `GET` requests.
- **postHandlers.test.js**: Contains tests for `POST` requests.
- **putHandlers.test.js**: Contains tests for `PUT` requests.
- **deleteHandlers.test.js**: Contains tests for `DELETE` requests.

## How to Run the Tests

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node.js comes with npm (Node Package Manager). Ensure it's installed and working.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-repository-url.git

2. Navigate to the project directory:

cd your-repository-directory

3. Install the required dependencies:

npm install

Running the Tests:
You can run all the tests or individual test files using the following commands:

npm test

Run specific test files:

To run the GET request tests:

npx jest tests/getHandlers.test.js

To run the POST request tests:

npx jest tests/postHandlers.test.js

To run the PUT request tests:

npx jest tests/putHandlers.test.js

To run the DELETE request tests:

npx jest tests/deleteHandlers.test.js

Additional Information
ESLint: Run `npx eslint .` to check for any linting errors in your JavaScript files.
API Documentation: Ensure the API server is running and accessible before executing the tests.
