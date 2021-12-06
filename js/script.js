'use strict'

// Initialize Swiper 
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



/* Specialities */
// Speciality 1
let txtSpeciality1 = document.querySelector(".txt-speciality-1");
let getImgSpeciality1 = document.querySelector(".img-speciality-1");

getImgSpeciality1.addEventListener("mouseover", transparencyEffectSpeciality1);

function transparencyEffectSpeciality1() {

    let mediaqueryMediumDevice = window.matchMedia("(min-width: 991.98px)");
    if (mediaqueryMediumDevice.matches) {
        txtSpeciality1.style.setProperty("width", "100%");
    }
}

getImgSpeciality1.addEventListener("mouseout", reverseTransparencyEffectSpeciality1);

function reverseTransparencyEffectSpeciality1() {

    let mediaqueryMediumDevice = window.matchMedia("(min-width: 991.98px)");
    if (mediaqueryMediumDevice.matches) {
        txtSpeciality1.style.setProperty("width", "0%");
    }
}

// Speciality 2
let txtSpeciality2 = document.querySelector(".txt-speciality-2");
let getImgSpeciality2 = document.querySelector(".img-speciality-2");

getImgSpeciality2.addEventListener("mouseover", transparencyEffectSpeciality2);

function transparencyEffectSpeciality2() {

    let mediaqueryMediumDevice = window.matchMedia("(min-width: 991.98px)");
    if (mediaqueryMediumDevice.matches) {
        txtSpeciality2.style.setProperty("height", "100%");
    }
}

getImgSpeciality2.addEventListener("mouseout", reverseTransparencyEffectSpeciality2);

function reverseTransparencyEffectSpeciality2() {

    let mediaqueryMediumDevice = window.matchMedia("(min-width: 991.98px)");
    if (mediaqueryMediumDevice.matches) {
        txtSpeciality2.style.setProperty("height", "0%");
    }
}

// Speciality 3
let txtSpeciality3 = document.querySelector(".txt-speciality-3");
let getImgSpeciality3 = document.querySelector(".img-speciality-3");

getImgSpeciality3.addEventListener("mouseover", transparencyEffectSpecialitySpeciality3);

function transparencyEffectSpecialitySpeciality3() {

    let mediaqueryMediumDevice = window.matchMedia("(min-width: 991.98px)");
    if (mediaqueryMediumDevice.matches) {
        txtSpeciality3.style.setProperty("height", "100%");
    }
}

getImgSpeciality3.addEventListener("mouseout", reverseTransparencyEffectSpecialitySpeciality3);

function reverseTransparencyEffectSpecialitySpeciality3() {

    let mediaqueryMediumDevice = window.matchMedia("(min-width: 991.98px)");
    if (mediaqueryMediumDevice.matches) {
        txtSpeciality3.style.setProperty("height", "0%");
    }
}

// Speciality 4
let txtSpeciality4 = document.querySelector(".txt-speciality-4");
let getImgSpeciality4 = document.querySelector(".img-speciality-4");

getImgSpeciality4.addEventListener("mouseover", transparencyEffectSpecialitySpeciality4);

function transparencyEffectSpecialitySpeciality4() {

    let mediaqueryMediumDevice = window.matchMedia("(min-width: 991.98px)");
    if (mediaqueryMediumDevice.matches) {
        txtSpeciality4.style.setProperty("height", "100%");
    }
}

getImgSpeciality4.addEventListener("mouseout", reverseTransparencyEffectSpecialitySpeciality4);

function reverseTransparencyEffectSpecialitySpeciality4() {

    let mediaqueryMediumDevice = window.matchMedia("(min-width: 991.98px)");
    if (mediaqueryMediumDevice.matches) {
        txtSpeciality4.style.setProperty("height", "0%");
    }
}