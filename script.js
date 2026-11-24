
document.addEventListener("DOMContentLoaded", () => {

    // نمایش تدریجی کارت‌ها
    const cards = document.querySelectorAll(".course-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach((card) => {
        card.classList.add("hidden");
        observer.observe(card);
    });


    // افکت دکمه شروع یادگیری
    const startButton = document.querySelector(".hero-button");

    if (startButton) {
        startButton.addEventListener("click", () => {
            const courses = document.querySelector("#courses");

            if (courses) {
                courses.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

});

