const $submit = document.getElementById("submit");
const $password = document.getElementById("password");
const $username = document.getElementById("username");
const $visible = document.getElementById("visible");

const storedData = JSON.parse(localStorage.getItem("userData")) || {};

function restoreStoredValues() {
    if (storedData.username) {
        $username.value = storedData.username;
    }
    if (storedData.password) {
        $password.
        $password

       
value = storedData.password;
    }
}


   
function togglePasswordVisibility() {
    $password.type = $visible.checked ? "text" : "password";
}

function handleSubmit(e) {
    e.preventDefault();
    
   
if ($password.value !== "" && $username.value !== "") {
        storedData.
       
username = $username.value;
        storedData.
       
password = $password.value;
        localStorage.setItem("userData", JSON.stringify(storedData));
        window.location.href = "login.html";
    }
}

$visible.addEventListener("change", togglePasswordVisibility);
$submit.addEventListener("click", handleSubmit);

// Restaurar valores, almacenados y configurar visibilidad al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
    restoreStoredValues();
    
    toggle
togglePasswordVisibility();
});