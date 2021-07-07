document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display="flex";
})

document.querySelector("fa fa-times").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none";
})