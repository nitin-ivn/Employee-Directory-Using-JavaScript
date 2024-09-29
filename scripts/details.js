import { findEmployee } from "../data/employee.js"
import { findEmployeeDetails } from "../data/employeeDetails.js"


function renderDetails(){
    const searchParams = new URLSearchParams(window.location.search);
    const empId = searchParams.get("empId");

    const employee = findEmployee(empId);
    const employeeDetails = findEmployeeDetails(empId);

    let detailsHTML = `
        <div class="employee-img">
                <h1 class = "mt-3">Random Company Name</h1>
                <img class = "image mt-4 mb-2" src="${employee.image}" alt="">
                <h1>${employee.name}</h1>
                <p class = "fw-light fs-3">${employee.designation}</p>
                <div class = "detail-con ps-3">
                    <div>
                        <p class = "ques">Employee ID</p>
                        <p class = "colon">:</p>
                        <p class = "ans ps-4">${employee.id}</p>
                    </div>
                    <div>
                        <p class = "ques">Department</p>
                        <p class = "colon">:</p>
                        <p class = "ans ps-4">${employee.department}</p>
                    </div>
                    <div>
                        <p class = "ques">Phone Number</p>
                        <p class = "colon">:</p>
                        <p class = "ans ps-4">+91 ${employeeDetails.pNo}</p>
                    </div>
                    <div>
                        <p class = "ques">Email</p>
                        <p class = "colon">:</p>
                        <p class = "ans ps-4">${employeeDetails.email}</p>
                    </div>
                    <div>
                        <p class = "ques">Work Hours</p>
                        <p class = "colon">:</p>
                        <p class = "ans ps-4">${employeeDetails.shift}</p>
                    </div>
                    <div>
                        <p class = "ques">Hire Date</p>
                        <p class = "colon">:</p>
                        <p class = "ans ps-4">${employeeDetails.hireDate}</p>
                    </div>
                    <div>
                        <p class = "ques">Location</p>
                        <p class = "colon">:</p>
                        <p class = "ans ps-4">${employeeDetails.location}</p>
                    </div>
                </div>
            </div>
    `;

    document.querySelector('.js-details').innerHTML = detailsHTML;
}

renderDetails();