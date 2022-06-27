document.addEventListener("DOMContentLoaded", () => {


const login = document.getElementById("login")

function logInPrompt(){
    alert("Hello, click here to login")
}
login.addEventListener("mouseover",logInPrompt)





function toNext(){
    fetch ("https://devblackie.github.io/Data/db.json")
     .then(response => response.json())
      .then(data => data.event.forEach(element => {
    console.log(element.image)
    divCreator(element)
  }))
}

const btn = document.getElementById("btn-more")
btn.addEventListener("click",toNext)


 


  let upcoming = document.getElementById('upcoming')
  function divCreator(data){
     
      let div = document.createElement('div')
      div.className="box"
      upcoming.append(div)
      let image = document.createElement('img')
      image.src=data.image
      div.append(image)
      let divChild = document.createElement('div')
      div.append(divChild)
      divChild.className="content"
      let h3 = document.createElement('h3')
      h3=data.event_type
      divChild.append(h3)
      let location = document.createElement('p')
      location=data.location
      divChild.append(location)
      let amount = document.createElement('h4')
      amount=data.amount
      divChild.append(amount)

  }
})



