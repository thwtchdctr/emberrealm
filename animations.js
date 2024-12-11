document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("h1");
    const paragraphs = document.querySelectorAll("p");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    headers.forEach((header) => observer.observe(header));
    paragraphs.forEach((paragraph) => observer.observe(paragraph));
});
