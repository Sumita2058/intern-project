const image = document.getElementById("#img");
const dotcontainer = document.querySelectorAll("dot");
counter = 0;
console.log("sdd");
function switchImage(this){
    dotcontainer.forEach((dot, index) =>{
        dot.classList.remove("active")
        if (index === counter){
            dot.classList.add("active");
    }
});
}
function switchImage(currentimg) {
    dotContainer.forEach((dot)=>dot.classList.remove('active'));
    currentimg.classList.add('active');