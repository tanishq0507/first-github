
const counter =  document.querySelector(".counter");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

let count = JSON.parse(localStorage.getItem("counterValue")) || 0;

counter.textContent = count;



increment.addEventListener("click", () => {
  count++;
  updateCount();
  console.log("added one number");

});

decrement.addEventListener("click", () =>{
  
  if(count >0){
    count--;
    updateCount();
  console.log("deleted one number");
}else if( count === 0){
    alert("counter is zero!");
    console.log("counter is alright zero!!");
  }
  
});

reset.addEventListener("click", () => {
  
  if(count >0){
    count = 0;
    updateCount();
    console.log("reset!");
  }else if( count === 0){
    alert("counter is alright reseted!");
    console.log("counter is alright reseted!!");
  }
});

function updateCount() {
      counter.textContent = count;
      localStorage.setItem("counterValue", JSON.stringify(count));
    }



// changing color of the site

let colorChange = document.querySelector(".container");

let btnValue = document.querySelector(".button1");

let counterContain = document.querySelector(".counterContainer");

let h1Tag = document.querySelector("h1");



let val = 0;
    // Initial value for the button state
btnValue.addEventListener("click",function(){
  if(val === 0){
  colorChange.style.backgroundColor = "white";
  btnValue.innerHTML = "[black theme]";
  counterContain.style.border = "2px solid black";
  h1Tag.style.color="black";
  val = 1;
  }else{
  colorChange.style.backgroundColor = "black";
  btnValue.innerHTML = "[white theme]";
  counterContain.style.border = "2px solid white";
  h1Tag.style.color="white";
  val = 0;
  }
})



