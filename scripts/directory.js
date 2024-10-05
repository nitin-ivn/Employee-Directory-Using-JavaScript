import { employee,findEmployee } from "../data/employee.js";
import { renderDetails } from "./details.js";

export function renderDirectory(employee){
    let employeeHTML = ``;
    employee.forEach((employeeDetails)=> {
        employeeHTML += `
            <div class="employee-container border p-2 js-emp-container" data-empid = ${employeeDetails.id}>
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

    document.querySelectorAll(".js-emp-container").forEach(container => {
        container.addEventListener('click', () => {
            const empID = container.dataset.empid;
            renderDetails(empID);
            document.querySelector(".page2").style.display = "block";
            document.querySelector(".overlay").style.display = "block";
            document.querySelector(".page").classList.add("blur-background");
        });
    });

    document.querySelector(".overlay").addEventListener("click" , () => {
            document.querySelector(".page2").style.display = "none";
            document.querySelector(".page").classList.remove("blur-background");
            document.querySelector(".overlay").style.display = "none";
    })
}

function renderFilter(){
    let filerHTML = "";
    for (let i = 65; i <= 90; i++) {
        filerHTML += `
            <button class = "btn btn-dark js-alp">${String.fromCharCode(i)}</button>
        `;
    }
    document.querySelector(".alpha-filter").innerHTML = filerHTML;
}

renderDirectory(employee);
renderFilter();