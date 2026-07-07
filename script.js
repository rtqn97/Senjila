/* =========================================
ELEMENTS
========================================= */

const introScreen =
document.getElementById("introScreen");

const openingScreen =
document.getElementById("openingScreen");

const photoScreen =
document.getElementById("photoScreen");

const messageScreen =
document.getElementById("messageScreen");

const goodbyeScreen =
document.getElementById("goodbyeScreen");

const startBtn =
document.getElementById("startBtn");

const endBtn =
document.getElementById("endBtn");

const closeBtn =
document.getElementById("closeBtn");

const bgMusic =
document.getElementById("bgMusic");

const birthdayPhoto =
document.getElementById("birthdayPhoto");

const openingTitle =
document.querySelector(".openingTitle");

const openingText =
document.querySelector(".openingText");

const messageLines =
document.querySelectorAll(".messageLine");

const signature =
document.querySelector(".signature");

const particles =
document.getElementById("particles");

/* =========================================
START BUTTON
========================================= */

startBtn.addEventListener("click", () => {

    bgMusic.volume = 0.6;

    bgMusic.play();

    showOpening();

});

/* =========================================
OPENING SCREEN
========================================= */

function showOpening(){

    introScreen.classList.remove("active");

    openingScreen.classList.add("active");

    setTimeout(() => {

        openingTitle.style.animation =
        "fadeUp 1.2s forwards";

    },300);

    setTimeout(() => {

        openingText.style.animation =
        "fadeUp 1.2s forwards";

    },1000);

    setTimeout(() => {

        showPhoto();

    },5000);

}

/* =========================================
PHOTO SCREEN
========================================= */

function showPhoto(){

    openingScreen.classList.remove("active");

    photoScreen.classList.add("active");

    birthdayPhoto.style.animation =
    "slowZoom 9s linear forwards";

    startParticles();

    setTimeout(() => {

        showMessage();

    },9000);

}

/* =========================================
PARTICLES
========================================= */

function startParticles(){

    setInterval(() => {

        const particle =
        document.createElement("div");

        particle.className =
        "particle";

        particle.innerHTML = "✨";

        particle.style.left =
        Math.random()*100 + "vw";

        particle.style.fontSize =
        (12 + Math.random()*20) + "px";

        particle.style.animationDuration =
        (7 + Math.random()*6) + "s";

        particles.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        },13000);

    },400);

}
/* =========================================
MESSAGE SCREEN
========================================= */

function showMessage(){

    photoScreen.classList.remove("active");

    messageScreen.classList.add("active");

    let delay = 500;

    messageLines.forEach(line => {

        setTimeout(() => {

            line.style.animation =
            "fadeUp 1s forwards";

        }, delay);

        delay += 1400;

    });

    setTimeout(() => {

        signature.style.animation =
        "fadeUp 1s forwards";

    }, delay);

    setTimeout(() => {

        endBtn.style.animation =
        "fadeUp 1s forwards";

    }, delay + 700);

}

/* =========================================
THE END
========================================= */

endBtn.addEventListener("click", () => {

    messageScreen.classList.remove("active");

    goodbyeScreen.classList.add("active");

});

/* =========================================
CLOSE BUTTON
========================================= */

closeBtn.addEventListener("click", () => {

    bgMusic.pause();

    bgMusic.currentTime = 0;

    window.open("", "_self");

    window.close();

});

/* =========================================
AUTO PLAY FIX
========================================= */

document.addEventListener("click", () => {

    if(bgMusic.paused){

        bgMusic.play().catch(() => {});

    }

},{once:true});
