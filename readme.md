## Running Tests Locally

### Prerequisites
Make sure you have the following installed:
- Node.js
- Cypress (if not already installed, you can install it using npm)

### Installation
1. Clone this repository to your local machine.

2. Navigate to the project directory in your terminal.

3. Install dependencies by running:
   ```
   npm install
   ```

### Running Tests
1. Open your terminal and navigate to the project directory.

2. Run the following command to open Cypress Test Runner:
   ```
   npx cypress open
   ```

3. In the Cypress Test Runner window, click on the test file you want to run (`User_Login-Logout-Order.js`).

4. Cypress will automatically open a browser and execute the tests.

### Test Scenarios
- **User Login:** Tests if a user can successfully login to the website.
- **User Login and Logout:** Tests if a user can login and logout successfully.
- **User Login and Order:** Tests if a user can login and place an order on the website.

### Note
- Make sure the website (`https://rahulshettyacademy.com/client`) is accessible and functional before running the tests.
