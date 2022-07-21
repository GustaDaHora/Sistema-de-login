var button = document.querySelector("button")
button.onclick = login

var errormsg = document.getElementById("errormsg")

// Logins cadastrados
var loginCadastrado = "Usuario"
var senhaCadastrada = "senha"

var inpuLogin = document.querySelector("inplogin")
var inpsenha = document.querySelector("inpsenha")

inplogin = document.getElementById("inplogin")
inpsenha = document.getElementById("inpsenha")
inplogin.focus()

function login() {

    if (inplogin.value == loginCadastrado && inpsenha.value == senhaCadastrada) {
        window.location.href = "index.html"
    } else {
        errormsg.style.display = "block"
    }

    inplogin.value = ""
    inpsenha.value = ""
    inplogin.focus()
}


