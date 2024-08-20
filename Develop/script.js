function isString(string) {
  if (isNaN(string)) {
    return true;
  } else {
    return false;
  }
}

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const confirmPrompt = confirm("Would you like to add a new employee data?");
  let employeeArray = [];
  let employeeTable = {};
  let firstName;
  let lastName;

  while (confirmPrompt) {
    firstName = prompt("What is your name?");
    while (!isString(firstName)) {
      firstName = prompt(
        "Looks like you may have mismatched the text format for your name, please try again!"
      );
      if (isString(firstName)) {
        break;
      }
    }

    lastName = prompt("What is your last name?");
    while (!isString(lastName)) {
      lastName = prompt(
        "Looks like you may have mismatched the text format for your name, please try again!"
      );
      if (isString(lastName)) {
        break;
      }
    }

    let salary = prompt("Please insert your salary below: (i.e: 1450)");
    while (isNaN(salary)) {
      salary = prompt(
        "Looks like you didn't enter a number for your salary, please, try again!"
      );
      if (!isNaN(salary)) {
        break;
      }
    }
    const salaryInt = parseInt(salary);

    employeeTable = {
      firstName: firstName,
      lastName: lastName,
      salary: salaryInt,
    };

    employeeArray.push(employeeTable);

    const newConfirm = confirm("Would you like to add a new employee data?");

    if (!newConfirm) {
      return employeeArray;
    }
  }
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let total;
  for (let i = 0; i > employeesArray.length; i++) {
    total = employeesArray[i].salary;
  }
  total = parseInt(total / employeesArray.length);
  console.log(`The average salary of your employees is ${total}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
