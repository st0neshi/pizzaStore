document.getElementById("person").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})