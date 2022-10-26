let employees = [];

let div = document.getElementById("space");

let x = 0;

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
    name.id = `name${x}`;
    div.appendChild(name);

    //creates submit element with function. The function takes name's value sets employee's fname to the value 
    let submit = document.createElement("input");
    submit.type = "submit";
    div.appendChild(submit);
    submit.onclick = function name(){

        // takes name's value and .splits it. employee's variables then are set to the valuse of the e list.
        let e = document.getElementById(`name${x}`).value.split(" ");
        employee.fName = e[0];
        employee.lName = e[1];
        employee.age = e[2];
        employee.salery = e[3] + " per hour";
        employees.push(employee);
        console.log(`name${x}`);

        x++;
        name.id = `name${x}`;

        console.log(`name${x}`);
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