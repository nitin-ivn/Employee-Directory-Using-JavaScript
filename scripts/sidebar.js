import { Departments,HRDepartmentRoles,
    ProductManagementRoles,developmentDepartmentRoles,
    ITDepartmentRoles } from "../data/departments.js";
import { employee,findCountOfDepartment,findCountOfRoles } from "../data/employee.js";

function count(){
    let sidebarHTML = `
        <div class="item item-hover">
            <img src="/images/icons/department2.png" class = "department-icon sub-btn" data-target = "subMenu1" alt="">
            <a class="filters sub-btn filter-department" data-target = "subMenu1" href="#">Department</a>  
            <div class="sub-menu" id="subMenu1" style="display: none;">  
                <a href="#" class="sub-item sub-btn js-sub-item" data-department = "HR" data-target="subMenu1-1">
                    HR (${findCountOfDepartment(Departments.HR)})</a>
                <div class = "sub-menu pt-0" id = "subMenu1-1" style="display: none;">
                    <a href="#" class="sub-item js-role" data-role = "HR Manager">HR Manager (${findCountOfRoles(HRDepartmentRoles.HRManager)})</a>
                    <a href="#" class="sub-item js-role" data-role = "Recruiter">Recruiter (${findCountOfRoles(HRDepartmentRoles.Recruiter)})</a>
                </div>
                <a href="#" class="sub-item sub-btn js-sub-item" data-department = "Develeopment" data-target="subMenu1-2">
                    Development Department (${findCountOfDepartment(Departments.Development)})</a>
                <div class = "sub-menu pt-0" id = "subMenu1-2" style="display: none;">
                    <a href="#" class="sub-item js-role" data-role = "Frontend Developer">Frontend Developer (${findCountOfRoles(developmentDepartmentRoles.frontEndDev)})</a>
                    <a href="#" class="sub-item js-role" data-role = "Backend Developer">Backend Developer (${findCountOfRoles(developmentDepartmentRoles.backEndDev)})</a>
                    <a href="#" class="sub-item js-role" data-role = "FullStack Developer">FullStack Developer (${findCountOfRoles(developmentDepartmentRoles.fullStackDev)})</a>
                    <a href="#" class="sub-item js-role" data-role = "Mobile Developer">Mobile Developer (${findCountOfRoles(developmentDepartmentRoles.MobileDev)})</a>
                </div>
                <a href="#" class="sub-item sub-btn js-sub-item" data-department = "Product Management" data-target="subMenu1-3">
                    Product Management (${findCountOfDepartment(Departments.ProductManagement)})</a>
                <div class = "sub-menu pt-0" id = "subMenu1-3" style="display: none;">
                    <a href="#" class="sub-item js-role" data-role = "Product Manager">Product Manager (${findCountOfRoles(ProductManagementRoles.productManager)})</a>
                    <a href="#" class="sub-item js-role" data-role = "Product Owner">Product Owner (${findCountOfRoles(ProductManagementRoles.productOwner)})</a>
                </div>
                <a href="#" class="sub-item sub-btn js-sub-item" data-department = "IT" data-target="subMenu1-4">
                    IT Department (${findCountOfDepartment(Departments.ITDepartment)})</a>
                <div class = "sub-menu pt-0" id = "subMenu1-4" style="display: none;">
                    <a href="#" class="sub-item js-role" data-role = "System Administrator">System Administrator (${findCountOfRoles(ITDepartmentRoles.systemAdministrator)})</a>
                    <a href="#" class="sub-item js-role" data-role = "Network Engineer">Network Engineer (${findCountOfRoles(ITDepartmentRoles.networkEngineer)})</a>
                </div>
            </div>  
        </div>
        
        <div class="item item-hover">  
            <a class="filters sub-btn" data-target = "subMenu2" href="#">Locality</a>  
            <div class="sub-menu" id="subMenu2" style="display: none;">  
                <a href="#" class="sub-item">sub2</a>  
            </div>  
        </div>
    `;

    document.querySelector('.offcanvas-body').innerHTML = sidebarHTML;
}

count();