// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });
}

// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});


// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const revealElements = document.querySelectorAll(
    ".section, .impact-card, .company-card, .timeline-item, .skill-card, .featured-company, .nature-card"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    element.classList.add("hidden");
    revealObserver.observe(element);

});


// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});


// ======================================
// COUNTER ANIMATION
// ======================================

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = parseInt(counter.dataset.target);

            let count = 0;

            const updateCounter = () => {

                const increment = Math.ceil(target / 100);

                count += increment;

                if (count < target) {

                    counter.innerText = count;

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// ======================================
// NAVBAR BACKGROUND CHANGE
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,.97)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background =
            "rgba(5,8,22,.90)";

        navbar.style.boxShadow = "none";

    }

});


// ======================================
// CONTACT FORM
// ======================================

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const button =
            contactForm.querySelector("button");

        const originalText =
            button.innerHTML;

        button.innerHTML = "Sending...";
        button.disabled = true;

        setTimeout(() => {

            button.innerHTML =
                "✓ Message Sent";

            contactForm.reset();

            setTimeout(() => {

                button.innerHTML =
                    originalText;

                button.disabled = false;

            }, 3000);

        }, 1500);

    });

}


// ======================================
// SMOOTH HERO ENTRANCE
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ======================================
// CURRENT YEAR
// ======================================

const yearElement =
    document.querySelector(".current-year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
