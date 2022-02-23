/*
//first 
try {

  let url = window.location.href
  console.log(url)
  let details = url.split("?")
  console.log(details)
  let object = details[1].split("&")
  console.log(object)
  let object2 = object.map(e=>e.split("="))
  console.log(object2)
  let object3 = Object.fromEntries(object2)
  console.log(object3)
  
  let jsoned = JSON.stringify(object3)
  
  document.getElementById("details").textContent = jsoned

  
} catch (error) {
  console.log("error")
  
}
*/

//second 

let url = window.location.href
let form = document.getElementById("myForm")

function handleSubmit (event) {
  event.pr
}




form.addEventListener ("submit", handleSubmit)
