document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let slideIndex = 0;

    function showSlides() {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[slideIndex].classList.add("active");
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 5000);
    }

    showSlides();

    document.querySelector(".menu-toggle").addEventListener("click", () => {
        document.querySelector(".nav-menu").classList.toggle("active");
    });
});
