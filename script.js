document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Interactive Ambient Mouse Glow (Premium UI standard)
    const glow = document.querySelector(".cursor-glow");
    
    document.addEventListener("mousemove", (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });

    // 2. High-End Scroll Reveal Effect using Intersection Observer
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Animates once for crisp experience
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of element is visible
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // 3. Dynamic Header Shadow on Scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
});
