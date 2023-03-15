console.log('funguju!');
const changeBulb =()=>{

const bulbOff = document.querySelector(".bulb")
bulbOff.classList.toggle("bulb--on")


}


document.addEventListener("keydown", changeBulb)

