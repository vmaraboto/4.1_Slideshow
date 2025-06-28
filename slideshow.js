let arrImages = [
    "./images/pet1.jpg",
    "./images/pet2.jpg",
    "./images/pet3.jpg",
    "./images/pet4.jpg"
];

let arrDescription = [
    "Jen",
    "Pat",
    "Negrita",
    "Jen in a drawer"
];

let iCurrentSlide = 0;

function displaySlideshowImage(iImgLocation) {
    let imgElement = document.getElementById("imgSlide");

    imgElement.src = arrImages[iImgLocation];
}

function displaySlideshowDescription(iImgLocation) {
    let imgDescription = document.getElementById("pSlide");

    imgDescription.textContent = arrDescription[iImgLocation];
}

function previousSlide() {
    iCurrentSlide = iCurrentSlide - 1;

    if (iCurrentSlide < 0) {
        iCurrentSlide = arrImages.length - 1;
        iCurrentSlide = arrDescription.length - 1;
    }

    displaySlideshowImage(iCurrentSlide);
    displaySlideshowDescription(iCurrentSlide);
}

function nextSlide() {
    iCurrentSlide = iCurrentSlide + 1;

    if (iCurrentSlide == arrImages.length && iCurrentSlide == arrDescription.length) {
        iCurrentSlide = 0;
        iCurrentSlide = 0;
    }

    displaySlideshowImage(iCurrentSlide);
    displaySlideshowDescription(iCurrentSlide);
}

displaySlideshowImage(iCurrentSlide);
displaySlideshowDescription(iCurrentSlide);