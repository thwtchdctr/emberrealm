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



//Image carousel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;
    let currentTransform = 0;
    let currentImage = images[currentIndex];
    function updateCarousel() {

        // Adjust carousel height to fit the current image
        carousel.style.height = `${currentImage.clientHeight}px`;

        // Update the transform property to display the current image
        carouselImages.style.transform = `translateX(${currentTransform}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        currentImage = images[currentIndex];
        if (currentIndex > 0) {
            currentTransform -= currentImage.clientWidth;
        }
        else {
            currentTransform = 0;
        }
        updateCarousel();
        
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
        currentImage = images[currentIndex];
        if (currentIndex < images.length - 1) {
            currentTransform += currentImage.clientWidth;
        }
        else {
            let maxTransform = 0;
            for (let i = 0; i < images.length; i++) {
                maxTransform += images[i].getBoundingClientRect().width;
            }
            currentTransform = maxTransform;
        }
        updateCarousel();
    });

    // Ensure the carousel adjusts on window resize
    window.addEventListener('resize', updateCarousel);

    // Initialize carousel size
    updateCarousel();
});
