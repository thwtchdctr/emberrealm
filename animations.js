document.addEventListener("DOMContentLoaded", () => {
    // Combine all NodeLists into one array
    const texts = [...document.querySelectorAll("h1"),
    ...document.querySelectorAll("h2"),
    ...document.querySelectorAll("p")];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    texts.forEach((text) => observer.observe(text));
});