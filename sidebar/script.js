const body = document.body;
const navdialouge = document.getElementById("nav-dialouge");

function handlemenu() {
  navdialouge.classList.toggle("hidden");
  navdialouge.classList.toggle("-translate-x-full");
  navdialouge.classList.toggle("translate-x-0"); // Use this for sliding in from the left

  // Apply a 3-second transition for the sliding effect
  navdialouge.classList.add("transition-transform", "duration-[3000ms]");
}


function theme(){
    body.classList.toggle("dark");

    const themeButton = document.getElementById("theme");
    if(body.classList.contains('light')){
        themeButton.innerHTML =  '<i class="fa-solid fa-sun"></i>sun';
        }else{
            themeButton.innerHTML =  '<i class="fa-solid fa-moon"></i>moon';
        }

    }

