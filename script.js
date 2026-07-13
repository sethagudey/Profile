document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Ambient Background Mouse Tracking (Desktop Only performance safety)
    const glow = document.querySelector(".cursor-glow");
    if (window.innerWidth > 768) {
        document.addEventListener("mousemove", (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }

    // 2. High-Performance Ecosystem Filtering System
    const filterButtons = document.querySelectorAll(".filter-btn");
    const ventureCards = document.querySelectorAll(".venture-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const targetedFilter = button.getAttribute("data-filter");

            ventureCards.forEach(card => {
                const cardGroup = card.getAttribute("data-group");

                if (targetedFilter === "all" || cardGroup === targetedFilter) {
                    card.classList.remove("is-hidden");
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 30);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.97)";
                    card.classList.add("is-hidden");
                }
            });
        });
    });

    // 3. Native Fluid Scroll Reveal Observer
    const visualElements = document.querySelectorAll(".scroll-reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Triggers once for clean execution
            }
        });
    }, {
        threshold: 0.05
    });

    visualElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 4. Navbar Structural Shadows on Scroll Actions
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = "0 12px 40px rgba(0,0,0,0.6)";
            navbar.style.padding = "1rem 5%";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.padding = "1.5rem 5%";
        }
    });
});    });
});
