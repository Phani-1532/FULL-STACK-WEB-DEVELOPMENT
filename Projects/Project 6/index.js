var a = document.getElementById('label')
var b = document.getElementById('dash')
var c = document.getElementById('label1')
a.addEventListener('click', function(){
    
    b.style.visibility = 'hidden'
    
})

c.addEventListener('click', function(){
    b.style.visibility = "visible"
    b.style.width = "100%"
})

//For Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the toast element
var toastEl = document.getElementById('liveToast');

// Create a new Bootstrap toast instance
var toast = new bootstrap.Toast(toastEl);

// Trigger the toast when the button is clicked
document.getElementById('addToCartButton').addEventListener('click', function () {
    toast.show();
});


var toast = new bootstrap.Toast(toastEl, {
    autohide: true,   // Auto-hide the toast after a timeout
    delay: 3000       // Set the delay to 3 seconds (3000 milliseconds)
});

/*var toast = new bootstrap.Toast(toastEl, {
    autohide: false   // Toast will not disappear automatically
});
*/