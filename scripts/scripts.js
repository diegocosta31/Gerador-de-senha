let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")
let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")
let containerPassword = document.querySelector("#container-password")
let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*/*-+. "
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value
}
const gerarSenha = () => {
    let pass = ''
    for(let i = 0, n = caracteres.length; i < sliderElement.value; ++i){
        pass += caracteres.charAt(Math.floor(Math.random() * n))
    }
    
    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    novaSenha = pass
}
const copiarSenha = () => {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha)
}
