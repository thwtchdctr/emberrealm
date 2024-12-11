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

document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;

    function updateCarousel() {
        const imageWidth = images[0].clientWidth;
        carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel); // Adjust position on window resize
});
