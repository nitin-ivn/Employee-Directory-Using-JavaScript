export function findEmployeeDetails(empid){
    let matchingemp;
    employeeDetails.forEach((emp) => {
        if(emp.id === empid){
            matchingemp = emp;
        }
    });

    return matchingemp;
}


class EmployeeDetails{
    id = 1;
    pNo;
    email;
    shift;
    location;
    hireDate;

    constructor(id,pNo,email,location,hireDate,shift){
        this.id = id;
        this,pNo = pNo;
        this.email = email;
        this.location = location;
        this.hireDate = hireDate;
        this.shift = shift;
    }
}

export let employeeDetails = [
    new EmployeeDetails('g0kok7seee1y',
        "9099582730",
        "martin@gmail.com",
        "Hyderabad",
        formatDate(new Date()),
        "Shift 1 (9-5)"
    ),

    new EmployeeDetails('wpwvaqnaz5ga',
        "959287374",
        "mariano3@gmail.com",
        "Hyderabad",
        formatDate(new Date()),
        "Shift 2 (1-9)"
    ),

    new EmployeeDetails('hrprehrotu9x',
        "9543234343",
        "rocky2354@gmail.com",
        "Hyderabad",
        formatDate(new Date()),
        "Shift 1 (9-5)"
    ),

    new EmployeeDetails('pzvdv2eit5dv',
        "9032873442",
        "carlos235@gmail.com",
        "Hyderabad",
        formatDate(new Date()),
        "Shift 1 (9-5)"
    ),

    new EmployeeDetails('3s2uth9948tl',
        "9293873742",
        "dorsey127@gmail.com",
        "Hyderabad",
        formatDate(new Date()),
        "Shift 2 (1-9)"
    ),

    new EmployeeDetails('yvujj8agkj3m',
        "959287374243",
        "maime093@gmail.com",
        "Hyderabad",
        formatDate(new Date()),
        "Shift 1 (9-5)"
    ),

    new EmployeeDetails('7m8jxvehsw20',
        "959287374243",
        "bretkn756@gmail.com",
        "Hyderabad",
        formatDate(new Date()),
        "Shift 2 (1-9)"
    ),
];


function formatDate(date) {  
    const options = { day: '2-digit', month: 'long', year: 'numeric' };  
    return date.toLocaleDateString('en-GB', options);  
} 