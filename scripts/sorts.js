import { employee,findCountOfDepartment,findCountOfRoles } from "../data/employee.js";
import { renderDirectory } from "./directory.js";
import { Departments,HRDepartmentRoles,
    ProductManagementRoles,developmentDepartmentRoles,
    ITDepartmentRoles } from "../data/departments.js";

function sortByDepartment(){
    document.querySelectorAll('.js-sub-item').forEach((button) => {
        button.addEventListener('click',()=>{
            const departmentofButton =  button.dataset.department;
            let filteredEmployeeByDepartment = employee.filter((employeeDetails)=>{
                if(employeeDetails.department == departmentofButton){
                    return true;
                }
            });
            renderDirectory(filteredEmployeeByDepartment);
        });
    });
}

function sortByRole(){
    document.querySelectorAll('.js-role').forEach((button) => {
        button.addEventListener('click', ()=> {
            const role = button.dataset.role;
            console.log(role);
            let filteredEmployeeByRole = employee.filter((employeeDetails)=> {
                if(employeeDetails.designation == role){
                    return true;
                }
            });
            renderDirectory(filteredEmployeeByRole);
        });
    });
}

function removeSort(){
    document.querySelector('.js-remove-filter').addEventListener('click', ()=> {
        renderDirectory(employee);
    })
}

function sortByAlphabet(alp){
    let filteredEmployeeByAlpabet = employee.filter((emp) => {
        let ap = emp.name[0].toUpperCase();
        return ap === alp.toUpperCase();
    });

    renderDirectory(filteredEmployeeByAlpabet);
}

function takeInputA(){
    document.querySelectorAll(".js-alp").forEach((button) =>{
        button.addEventListener('click', ()=>{
            sortByAlphabet(button.innerHTML);
        });
    })
}


sortByDepartment();
sortByRole();
removeSort();
takeInputA();


