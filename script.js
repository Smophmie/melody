const body = document.querySelector("body");
const toggleContainer = document.querySelector(".togglecontainer");
const toggleIcon = document.querySelector(".toggleicon");

toggleContainer.addEventListener("click", ()=>{

    body.classList.toggle("darkmode");
    toggleIcon.classList.add("animated");

    if (body.classList.contains("darkmode")){
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
    } else {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
    }

    setTimeout( () => {
        toggleIcon.classList.remove("animated");
    }, 500)
})