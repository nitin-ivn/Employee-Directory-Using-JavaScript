import { employee } from "../data/employee.js";
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
            const role = button.innerHTML;
            let filteredEmployeeByRole = employee.filter((employeeDetails)=> {
                if(employeeDetails.designation == role){
                    return true;
                }
            });
            renderDirectory(filteredEmployeeByRole);
        });
    });
}

sortByDepartment();
sortByRole();

