
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const primaryNav = document.querySelector('.primary-nav');
    
    if (mobileToggle && primaryNav) {
        mobileToggle.addEventListener('click', function() {
            primaryNav.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.primary-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 767) {
                primaryNav.classList.remove('active');
            }
        });
    });
});



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
