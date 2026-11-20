
document.addEventListener("DOMContentLoaded", () => {

    // Reveal animations
    const revealElements = document.querySelectorAll(
        ".course-card, .manifesto-content, .feedback-box"
    );

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });

    // Smooth anchor navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Subtle pointer movement on hero artwork
    const hero = document.querySelector(".hero");
    const artwork = document.querySelector(".hero-art");

    if (hero && artwork && window.matchMedia("(pointer: fine)").matches) {
        hero.addEventListener("mousemove", event => {
            const x = (event.clientX / window.innerWidth - 0.5) * 12;
            const y = (event.clientY / window.innerHeight - 0.5) * 12;

            artwork.style.marginLeft = `${x}px`;
            artwork.style.marginTop = `${y}px`;
        });
    }

});
