// Find the empty spots by its id
const yearSpot =document.querySelector("#currentyear");

//Get today's date then pullthe year out of it 
const today = new Date();

//Put the years inside the spot
yearSpot.textContent = today.getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;