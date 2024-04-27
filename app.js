document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.navbar__menu');

    mobileMenuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle visibility of the navbar menu
        mobileMenuButton.classList.toggle('is-active'); // Toggle for transforming bars
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    var content = document.querySelector('.main__content');
    var imageContainer = document.querySelector('.main__img--container');

    // Add 'loaded' class to both elements
    content.classList.add('loaded');
    imageContainer.classList.add('loaded');
});

document.querySelector("#show-login").addEventListener("click",function(){document.querySelector(".popup").classList.add("active");});
document.querySelector(".popup .close-btn").addEventListener("click",function(){document.querySelector(".popup").classList.remove("active");});


