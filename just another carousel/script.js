//access the image
const prebutton = document.querySelector("#pre");
const nextbutton = document.querySelector("#next");
const sliderImage = document.querySelectorAll(".image");
//indicator
const dotcontainer = document.querySelectorAll(".dot");
counter = 0;
nextbutton.addEventListener("click",silderNext);
function silderNext(){
  sliderImage[counter].style.animation = "next1 0.5s ease-in forwards";
  if(counter>=sliderImage.length-1){
    counter = 0
  }
  else{
    counter++;
  }
  sliderImage[counter].style.animation = "next2 0.5s ease-in forwards";
}
prebutton.addEventListener("click",sliderPre);
function sliderPre(){
  sliderImage[counter].style.animation = "pre1 0.5s ease-in forwards";
  if(counter>=sliderImage.length-1){
    counter = 0
  }
  else{
    counter--;
  }
  sliderImage[counter].style.animation = "pre2 0.5s ease-in forwards";
}

