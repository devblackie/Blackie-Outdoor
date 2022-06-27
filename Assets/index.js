

const btn = document.getElementsByClassName("btn")

const login = document.getElementById("login")

function logInPrompt(){
    alert("Hello, click here to login")
}
login.addEventListener("mouseover",logInPrompt)


function toNext{
    return ('Walk with us')
}
btn.addEventListener("click",toNext)
