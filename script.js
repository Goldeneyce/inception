
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileBtn && mainNav) {
        mobileBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            mobileBtn.innerHTML = mainNav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Image lazy loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}





function register() {
var username = 
document.getElementById("usernameInput").value;

 document.getElementById("message").innerHTML = "Welcome " + username + "!";
 console.log(username);
}

function addReview() {
let review =
document.getElementById("reviewText").value;

let addedReview = 
document.getElementById("addedReview");
addedReview.innerHTML = review;
}
