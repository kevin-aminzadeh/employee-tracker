const mysql = require("mysql2");
const inquirer = require("inquirer");

// Render Main Menu
function showMainMenu() {
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
        console.log("\n" + "Thank you for using Employee Tracker!");
        process.exit();
      }
      // For all other options, run showEntitymenu() with user's selected choice value
      showEntityMenu(answers.mainMenu);
    });
}

// Render Entity Options Menu
function showEntityMenu(entityName) {}

showMainMenu();
