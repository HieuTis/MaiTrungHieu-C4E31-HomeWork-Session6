const context = {
    employees: null,
};

window.onload = async () =>{
    await getEmployees();
    renderEmployees();
    viewEmployeesSalary();
};


const getEmployees = async() =>{
   const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
   const employeesData = await res.json();
   context.employees = employeesData;
   console.log(context.employees);

}

//1.
const renderEmployees = () =>{
    for (let index = 0; index < context.employees.length; index++) {
       let eachEmployees = context.employees[index];
        let li =`
        <li id="employees_${index}"  >${eachEmployees.employee_name}</li>
        
        `;

        let ul = document.getElementById("myUL");
        ul.innerHTML += li;
    }
};

//2.
const viewEmployeesSalary = () =>{
for (let index = 0; index < context.employees.length; index++){
    let li = document.getElementById(`employees_${index}`);
    let employee_salary = document.getElementById("employee_salary")

       li.addEventListener('mouseover',() => {
        employee_salary.innerHTML ='';

        let eachEmployees = context.employees[index];
        
        employee_salary.innerHTML += 
        `
        <b>Employee_salary: ${eachEmployees.employee_salary}
        </br>
        `
   })
   
};
};


