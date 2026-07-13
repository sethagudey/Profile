document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Desktop Ambient Background Tracking
    const glow = document.querySelector(".cursor-glow");
    if (window.innerWidth > 768 && glow) {
        document.addEventListener("mousemove", (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }

    // 2. High-Performance Portfolio Filter
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

    // 3. Fluid Content Scroll Intersection Observer
    const visualElements = document.querySelectorAll(".scroll-reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05
    });

    visualElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 4. Mobile Passive Shadow Layer Optimization
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = "0 12px 40px rgba(0,0,0,0.6)";
            navbar.style.background = "rgba(10, 10, 12, 0.95)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.background = "rgba(10, 10, 12, 0.75)";
        }
    }, { passive: true });
});
