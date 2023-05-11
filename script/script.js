var hamburguerButton = document.getElementById("hamburguerButton")
var hamburguer = document.getElementById("hamburguer")
var closeHamburguer = document.getElementById("closeHamburguer")
var header = document.getElementsByTagName("header")[0]

hamburguerButton.addEventListener("click",showMenu)
closeHamburguer.addEventListener("click",closeMenu)

function showMenu(){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "column"
    hamburguerButton.style.display = "none"
    hamburguer.style.display = "flex"
}

function closeMenu(){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "row"
    header.style.display = "flex"
    hamburguerButton.style.display = "flex"
    hamburguer.style.display = "none"
}