let pass1 = document.getElementById("pass1");
let p1Guide = document.getElementById("p1-guide");
let pass2 = document.getElementById("pass2");
let p2Container = document.getElementById("p2Container");
let form = document.forms[0];


function displayPass() {
    if (p1Guide.classList.contains("fa-eye")) {
        pass1.type = "text";
        p1Guide.classList.remove("fa-eye");
        p1Guide.classList.add("fa-eye-slash");   
    } else {
        pass1.type = "password";
        p1Guide.classList.remove("fa-eye-slash");
        p1Guide.classList.add("fa-eye");  

    }
}

pass2.addEventListener("input", check);

function check() {
let p2Value = pass2.value.trim();
let p2ValueLength = p2Value.length;
let p1Value = pass1.value.trim();
let b = p1Value.length;
if (p2ValueLength > 0 && p2Value === p1Value) {
    if (p2Container.classList.contains("passwordsUnequal")) {
        p2Container.classList.remove("passwordsUnequal");
        p2Container.classList.add("passwordsEqual");   
    } else {
        p2Container.classList.add("passwordsEqual");   

    }
    return true;
} else if (p2ValueLength > 0 && p2Value !== p1Value){
    if (p2Container.classList.contains("passwordsEqual")) {
        p2Container.classList.remove("passwordsEqual");
        p2Container.classList.add("passwordsUnequal");   
    } else {
        p2Container.classList.add("passwordsUnequal");   

    }
    return false;
}
    
}

form.addEventListener("submit", function(event){
    if (!check()) {
        event.preventDefault();
    }
})