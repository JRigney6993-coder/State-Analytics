

let cp = "Test@123";
let ce = "test@outlook.com";

function check(){
    let email = document.getElementById("CE");
    let pass = document.getElementById("CP");
    if(email.value != ce || pass.value != cp){
        email.value = "";
        pass.value = "";
    }
}
