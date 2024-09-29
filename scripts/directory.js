import { employee,findEmployee } from "../data/employee.js";

export function renderDirectory(employee){
    let employeeHTML = ``;
    employee.forEach((employeeDetails)=> {
        employeeHTML += `
            <div class="employee-container border p-2 js-emp-container" 
                onclick="window.open('details.html?empId=${employeeDetails.id}');">
                <div class = "img-container">
                    <img class = "employee-image" src="${employeeDetails.image}" alt="">
                </div>
                <div class = "ms-3">
                    <p class = "m-0 employee-name">${employeeDetails.name}</p>
                    <p class = "m-0 employee-occupation">${employeeDetails.designation}</p>
                    <p class = "m-0 employee-department">${employeeDetails.department}</p>
                </div>
            </div>
        `;
    });

    document.querySelector('.js-details-grid').innerHTML = employeeHTML;
}

renderDirectory(employee);