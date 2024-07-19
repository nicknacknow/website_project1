let current_interaction = null;

document.addEventListener("mousedown", (e) => {
    let btn = null;
    if (e.target && (btn = e.target.closest("interaction-button"))) {
        if (current_interaction != null) current_interaction.classList.remove("down");
        current_interaction = btn.querySelector("#interaction");
        
        current_interaction.classList.add("down");

        e.stopPropagation();
    }
});

document.addEventListener("mouseup", (e) => {
    if (current_interaction != null) current_interaction.classList.remove("down");
});


document.querySelector("#avatar-btn").addEventListener("click", (e) => {
    document.querySelector('#popup').style.zIndex = 11;
});

console.log(getComputedStyle(document.body).getPropertyValue("--main-app-zindex"));