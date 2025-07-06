// array of images
let arrImages = [
    "./images/pet1.jpg",
    "./images/pet2.jpg",
    "./images/pet3.jpg",
    "./images/pet4.jpg"
];

// array of descriptions
let arrDescription = [
    "Jen",
    "Pat",
    "Negrita",
    "Jen in a drawer"
];

// current slide tracker
let iCurrentSlide = 0;

// create a function that displays the current slideshow image
function displaySlideshowImage(iImgLocation) {
    // imgElement shorcut to imgSlide
    let imgElement = document.getElementById("imgSlide");

    // change image src in HTML
    imgElement.src = arrImages[iImgLocation];
}

// create a function that display the current slideshow description
function displaySlideshowDescription(iImgLocation) {
    // imgDescription shortcut to pSlide
    let imgDescription = document.getElementById("pSlide");

    // change text in HTML
    imgDescription.textContent = arrDescription[iImgLocation];
}

// create a function that changes the image to the previous slide
function previousSlide() {
    // subtract 1 from the slide tracker
    iCurrentSlide = iCurrentSlide - 1;

    // check if slide tracker is equal to less than 0
    if (iCurrentSlide < 0) {
        // changes slide tracker to the last possible value
        iCurrentSlide = arrImages.length - 1;
        iCurrentSlide = arrDescription.length - 1;
    }

    // call display function for image
    displaySlideshowImage(iCurrentSlide);
    // call display function for description
    displaySlideshowDescription(iCurrentSlide);
}

// create a function that changes the image to the next slide
function nextSlide() {
    // add 1 to the slide tracker
    iCurrentSlide = iCurrentSlide + 1;

    // check if slide tracker is the same as the lenght of both the image array and the description array
    if (iCurrentSlide == arrImages.length && iCurrentSlide == arrDescription.length) {
        // changes slide tracker to 0
        iCurrentSlide = 0;
        iCurrentSlide = 0;
    }

    // call display function for image
    displaySlideshowImage(iCurrentSlide);
    // call display function for description
    displaySlideshowDescription(iCurrentSlide);
}

// call display function for when the page loads for both image and description
displaySlideshowImage(iCurrentSlide);
displaySlideshowDescription(iCurrentSlide);