let attempts = 0;
let cp = "Test@123";
let ce = "test@outlook.com";

function check(){
    let email = document.getElementById("CE");
    let pass = document.getEementById("CP");
    if(email.value != ce || pass.value != cp){
        attempts++;
        email.value = "";
        pass.value = "";
    }
    if(attempts === 3){
        email.disable = true;
        pass.disable = true;
    }
}
