const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
} 

function calculate(){
        display.value = eval(display.value);
}



const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})