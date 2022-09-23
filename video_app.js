"use strict";

const preloader = document.querySelector(".preloader")
const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// preloader
window.addEventListener('load', function(e) {
    preloader.classList.add('hide-preloader');
});


//click the switch button to play or pause video
switchBtn.addEventListener('click', function(e){
    // pause video - add slide
        if (!switchBtn.classList.contains('slide')){
        switchBtn.classList.add('slide');
        video.pause();
    } else {
    // play video - remove slide
        switchBtn.classList.remove('slide');
        video.play();
    }
});



