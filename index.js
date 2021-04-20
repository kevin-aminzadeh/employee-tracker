const mysql = require("mysql2");
const inquirer = require("inquirer");
const utils = require("./helpers");

// Render Main Menu
function showMainMenu() {
  console.clear();

  inquirer
    .prompt([
      {
        type: "list",
        name: "mainMenu",
        message: "Main Menu",
        choices: [
          { name: "Departments", value: "department" },
          { name: "Roles", value: "role" },
          { name: "Employees", value: "employee" },
          new inquirer.Separator(),
          { name: "Exit", value: 0 },
        ],
      },
    ])
    .then((answers) => {
      // If user selects 'Exit' option, terminate the process
      if (answers.mainMenu === 0) {
        console.clear();
        console.log(
          "Exiting Application..." +
            "\n" +
            "Thank you for using Employee Tracker!"
        );
        process.exit();
      }
      console.clear();
      // For all other options, run showEntitymenu() with user's selected choice value
      showEntityMenu(answers.mainMenu);
    });
}

// Render Entity Options Menu
function showEntityMenu(entityName) {
  inquirer
    .prompt([
      {
        type: "list",
        name: `${entityName}Methods`,
        message: "What would you like to do?",
        choices: [
          `View ${utils.capitalizeString(entityName)}s`,
          `Add New ${utils.capitalizeString(entityName)}`,
          new inquirer.Separator(),
          { name: "< Go Back", value: 0 },
        ],
      },
    ])
    .then((res) => {
      const answer = res[Object.keys(res)[0]];
      if (answer === 0) {
        console.clear();
        showMainMenu();
      }
    });
}

showMainMenu();
