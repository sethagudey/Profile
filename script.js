// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = "✕";
    }else{
        menuBtn.innerHTML = "☰";
    }

});


// Close menu when link clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(5,8,22,.95)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";

    }else{

        navbar.style.background =
        "rgba(5,8,22,.75)";

        navbar.style.boxShadow = "none";

    }

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
document.querySelectorAll(
".section, .company-card, .timeline-item, .skill-card"
);

const revealObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
}

);

revealElements.forEach(element => {

    element.classList.add("hidden");
    revealObserver.observe(element);

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if(
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(
            link.getAttribute("href") ===
            `#${current}`
        ){

            link.classList.add("active-link");

        }

    });

});


// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if(count < target){

                    counter.innerText =
                    Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText =
                    target;

                }

            };

            update();

        }

    });

},
{
    threshold:0.5
}

);

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener("scroll", () => {

    const scrolled =
    window.pageYOffset;

    const hero =
    document.querySelector(".hero");

    hero.style.backgroundPositionY =
    scrolled * 0.3 + "px";

});


// =========================
// CONTACT FORM
// =========================

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    const button =
    form.querySelector("button");

    button.innerHTML =
    "Sending...";

    setTimeout(()=>{

        button.innerHTML =
        "Message Sent ✓";

        form.reset();

        setTimeout(()=>{

            button.innerHTML =
            "Send Message";

        },3000);

    },1500);

});

}


// =========================
// YEAR AUTO UPDATE
// =========================

const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Qwame. All Rights Reserved.`;

}
