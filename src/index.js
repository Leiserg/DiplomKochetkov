'use strict';

import togglePopup from './modules/togglePopup'; //сделано
import topSlider from './modules/topSlider'; //сделано
import services from './modules/services';//сделано
import scrolling from './modules/scrolling'; //сделано
import carousel from './modules/carousel';//сделано
import sendForm from './modules/sendForm';//сделано

// Modal PopUp
togglePopup();

// Topslider
topSlider();

// ScrollButton and Scroll to the beginning
scrolling();

//Carousel
carousel.init();

// Services
services();

//Sending forms
sendForm();


