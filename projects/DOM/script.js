let colorChange = document.querySelector(".btnContainer");

let btnValue = document.querySelector(".button1");

let val = 0;
// Initial value for the button state
btnValue.addEventListener("click",function(){
  if(val === 0){
  colorChange.style.backgroundColor = "black";
  btnValue.innerHTML = "Clicked Me!";
  val = 1;
  }else{
  colorChange.style.backgroundColor = "white";
  btnValue.innerHTML = "Click Me!";
  val = 0;
  }
})