// document.getElementById("login").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "flex";
// })

// document.getElementById("close").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// })

const openLoginButtons = document.querySelectorAll("[data_login_target]");
const closeLoginButtons = document.querySelectorAll("[data_close_button]");
const overlay = document.getElementById("overlay");

openLoginButtons.forEach(button => {
    button.addEventListener('click', () => {
        const login = document.querySelector(button.dataset.loginTarget)
        openLogin(login)
    })
})

closeLoginButtons.forEach(button => {
    button.addEventListener('click', () => {
        const login = button.closest(".login")
        closeLogin(login)
    })
})

function openLogin(login) {
    if (login == null) return
    login.classList.add("active")
    overlay.classList.add("active")
}

function closeLogin(login) {
    if (login == null) return
    login.classList.remove("active")
    overlay.classList.remove("active")
}