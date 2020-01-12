
//Get the button
var mybutton = document.getElementById("arrowUpBtn");


// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}