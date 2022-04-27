// CREATE AN ARRAY OF EMPLOYEES
// let employeesArray = [{id: 12345678, name: "Paulina Segovia", extension: 1234, email: "paulinasegovia@gmail.com", department: "Engineering"}];

let employeesArray = JSON.parse(localStorage.getItem('employees')) || [];

let id = document.getElementById('id');
let name = document.getElementById('name');
let ext = document.getElementById('extension');
let email = document.getElementById('email');
let dept = document.getElementById('department');
let submitBtn = document.getElementById("submit");
let addForm = document.getElementById('addForm');
let table = document.getElementById('employees')


let addEmployee = (id, name, ext, email, dept) => {
    employeesArray.push({
        id: id,
        name: name,
        ext: ext,
        email: email,
        dept: dept
    });
    localStorage.setItem("employees", JSON.stringify(employeesArray));

    return {id, name, ext, email, dept}
}

let createEmployeeElement = ({id, name, ext, email, dept}) => {
    const employeeID = document.createElement('th');
    const employeeName = document.createElement('th');
    const employeeExt = document.createElement('th');
    const employeeEmail = document.createElement('th');
    const employeeDept = document.createElement('th');

    employeeID.innerText= id;
    employeeName.innerText= name;
    employeeExt.innerText= ext;
    employeeEmail.innerText = email;
    employeeDept.innerText = dept;

    table.append(employeeID, employeeName, employeeExt, employeeEmail, employeeDept);
}

employeesArray.forEach(createEmployeeElement);



// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
// if (localStorage.getItem(employees) !== null) {
//     employees.push(employees.value);
// } ;






// GET DOM ELEMENTS
let $ = (id) => document.getElementById(id);


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    const newEmployee = addEmployee(
        id.value,
        name.value,
        ext.value,
        email.value,
        dept.value
    );
    createEmployeeElement(newEmployee)

    id.value = ""
    name.value = ""
    ext.value = ""
    email.value = ""
    dept.value = ""
    // GET THE VALUES FROM THE TEXT BOXES
  

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

   
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM
addForm.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
addForm.id.focus();
});

// DELETE EMPLOYEE
// empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
//     if(confirm('Are you sure you want to delete employee?')) {
        
//         }
//     }
// });
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

// });

// BUILD THE EMPLOYEES GRID
// function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

// });