const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function generateHtml(employees) {
  let html = '';

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    let special = "";

    if (employee.getRole() === "Manager") {
      special = `Office Number: ${employee.getOfficeNumber()}`;
    } else if (employee.getRole() === "Engineer") {
      special = `GitHub: ${employee.getGitHub()}`;
    } else if (employee.getRole() === "Intern") {
      special = `School: ${employee.getSchool()}`;
    }

    html += `
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Employee Information</h5>
            <p class="card-text">Name: ${employee.name}</p>
            <p class="card-text">ID: ${employee.id}</p>
            <p class="card-text">Email: ${employee.email}</p>
            <p class="card-text">${special}</p>
          </div>
        </div>
      </div>
    `;
  }

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Team</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            ${html}
          </div>
        </div>
      </div>
    </body>
    </html>`;
}

module.exports = generateHtml;
