// Animation Loading
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
    cards.forEach((card, index) => {
        card.classList.add("fade");

        setTimeout(() => {
            card.classList.add("show");
        }, index * 250);
    });
});

// Resume Button
const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", () => {
    alert("Resume Download Coming Soon!");
});

// Change Name Effect
const nameText = document.getElementById("napipuk");

nameText.addEventListener("mouseover", () => {
    nameText.textContent = "WELCOME TO MY PROFILE";
});

nameText.addEventListener("mouseout", () => {
    nameText.textContent = "napipuk";
});
