
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
    let form = document.createElement("form");
    form.id = "formInput";
    div.appendChild(form);

    let name = document.createElement("input");
    name.type = "text";
    name.id = `${x}`;
    form.appendChild(name);

    let id = document.getElementById(`${x}`)
    //creates submit element with function. The function takes name's value sets employee's fname to the value 
    let submit = document.createElement("input");
    submit.type = "submit";
    form.appendChild(submit);
    submit.onclick = function name(e){
        e.preventDefault;
        console.log(id);
        // takes name's value and .splits it. employee's variables then are set to the valuse of the e list.
        let employ = id.value.split(" ");
        employee.fName = employ[0];
        employee.lName = employ[1];
        employee.age = employ[2];
        employee.salery = employ[3] + " per hour";
        employees.push(employee);

        document.getElementById("formInput").reset();
        x++;
        id.id =`${x}`;

        console.log(employees);
        add();
    }
}

function edit(){
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    let search = document.createElement("input");
    search.type = "text";
    search.id = "search";
    search.onkeyup = function filter(){
        let input = document.getElementById("search");
        let filter = input.value;
        let p = div.getElementsByTagName("p");
        for(let i = 0; i< employees.length; i++){
            let index = p[i].innerText;
            if(index.indexOf(filter) > -1){
                p[i].style.display = "block";
            }else{
                p[i].style.display = "none";
            }
            if (filter == 0){
            p[i].style.display = "block";
        }
        }
        
    }
    div.appendChild(search);

    for(let i=0; i<employees.length; i++){
        let list = document.createElement("p");
        let text = document.createTextNode(employees[i].fName);
        let text2 = document.createTextNode(employees[i].lName);
        let text3 = document.createTextNode(" ");
        list.appendChild(text);
        list.appendChild(text3);
        list.appendChild(text2);
        div.appendChild(list);
    }
}