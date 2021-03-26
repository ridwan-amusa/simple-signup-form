let x = document.getElementById("pass1");
let z = document.getElementById("p1-guide");


function displayPass() {
    if (z.classList.contains("fa-eye")) {
        x.type = "text";
        z.classList.remove("fa-eye");
        z.classList.add("fa-eye-slash");   
    } else {
        x.type = "password";
        z.classList.remove("fa-eye-slash");
        z.classList.add("fa-eye");  

    }
}
