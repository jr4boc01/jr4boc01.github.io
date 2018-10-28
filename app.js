//Add an image carousel. This can be a carousel of screenshots of your projects (perhaps they link to your projects)

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//Add a button in your navigation that will toggle the visibility of your actual site navigation.

//Add a button and collapsable description to your portfolio projects so when the user clicks the button the descriptions expand and collapse

//Create a modal box that pops up with your bio information whenever a button or link is pressed