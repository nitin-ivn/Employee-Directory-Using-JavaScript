const Departments = Object.freeze({
    HR: "HR",
    Development: "Develeopment",
    ProductManagement: "Product Management",
    ITDepartment: "IT"
});

const HRDepartmentRoles = Object.freeze({
    HRManager: "HR Manager",
    Recruiter: "Recruiter"
})

const developmentDepartmentRoles = Object.freeze({
    frontEndDev: "Frontend Developer",
    backEndDev: "Backend Developer",
    fullStackDev: "FullStack Developer",
    MobileDev: "Mobile Developer"
});

const ProductManagementRoles = Object.freeze({
    productManager: "Product Manager",
    productOwner: "Product Owner"
});

const ITDepartmentRoles = Object.freeze({
    systemAdministrator: "System Administrator",
    networkEngineer: "Network Engineer"
});


class Employee{
    id = 1;
    image;
    name;
    department;
    designation;


    constructor(id,image,name,department,designation) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.designation = designation;
        this.department = department;
    }
}

export let employee = [
    new Employee('g0kok7seee1y',
        "/images/employee/e1.webp",
        "Martin Jackson",
        Departments.HR,
        HRDepartmentRoles.HRManager
    ),
    new Employee('wpwvaqnaz5ga',
        "/images/employee/e2.avif",
        "Mariano Glover",
        Departments.HR,
        HRDepartmentRoles.Recruiter
    ),
    new Employee('hrprehrotu9x',
        "/images/employee/e3.webp",
        "Rocky Conrad",
        Departments.Development,
        developmentDepartmentRoles.frontEndDev
    ),
    new Employee('3s2uth9948tl',
        "/images/employee/e4.webp",
        "Dorsey Mcclure",
        Departments.Development,
        developmentDepartmentRoles.backEndDev
    ),
    new Employee('pzvdv2eit5dv',
        "/images/employee/e5.webp",
        "Carlos Warren",
        Departments.Development,
        developmentDepartmentRoles.MobileDev
    ),
    new Employee('yvujj8agkj3m',
        "/images/employee/e6.webp",
        "Mamie Key",
        Departments.Development,
        developmentDepartmentRoles.fullStackDev
    ), 
];

function addPerson(image,name,designation,department){
    let temp = new Employee();
    temp.id = generateRandomId();
    temp.image = image;
    temp.name = name;
    temp.designation = designation;
    temp.department = department;
    employee.push(temp);
}

function generateRandomId() {  
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';  
    let randomId = '';  
    for (let i = 0; i < 12; i++) {  
        const randomIndex = Math.floor(Math.random() * chars.length);  
        randomId += chars[randomIndex];  
    }
    return randomId;  
}