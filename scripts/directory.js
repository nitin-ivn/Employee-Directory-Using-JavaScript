import { employee } from "../data/employee.js";

function renderDirectory(){
    let employeeHTML = ``;
    employee.forEach((employeeDetails)=> {
        employeeHTML += `
            <div class="employee-container border p-2">
                <div class = "img-container">
                    <img class = "img-fluid employee-image" src="${employeeDetails.image}" alt="">
                </div>
                <div class = "ms-3">
                    <p class = "m-0 employee-name">${employeeDetails.name}</p>
                    <p class = "m-0 employee-occupation">${employeeDetails.designation}</p>
                    <p class = "m-0 employee-department">${employeeDetails.department}</p>
                    <button class = "info-btn mt-1">Info</button>
                </div>
            </div>
        `
    });

    document.querySelector('.js-details-grid').innerHTML = employeeHTML;
}

renderDirectory();