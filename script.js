
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