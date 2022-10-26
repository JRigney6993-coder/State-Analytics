let employees = [];

let div = document.getElementById("space");

function add(){
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    let employee = {
        fName: "",
        lName: "",
        age: "",
        salery: ""
    }

    //creates p tag and text, then adds it to the div element
    let desc = document.createElement("p");
    let text = document.createTextNode("Name of new employee(first and last), then age, then salery(include $). Make sure you don't have any commas");
    desc.appendChild(text);
    div.appendChild(desc);

    // creates an input element(name) and makes it a text input
    let name = document.createElement("input");
    name.type = "text";
    name.id = "name";
    div.appendChild(name);

    //creates submit element with function. The function takes name's value sets employee's fname to the value 
    let submit = document.createElement("input");
    submit.type = "submit";
    div.appendChild(submit);
    submit.onclick = function name(){
        let eName = document.getElementById("name").value.split(" ");
        employee.fName = eName[0];
        employee.lName = eName[1];
        employee.age = eName[2];
        employee.salery = eName[3] + " per hour";
        employees.push(employee);
        name.id = `name${x}`
        console.log(employees);
    }
}

function edit(){
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    for(let i=0; i<employees.length; i++){
        let list = document.createElement("p");
        let text = document.createTextNode(employees[i].fName);
        list.appendChild(text);
        div.appendChild(list);
    }
}