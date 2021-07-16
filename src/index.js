'use strict';

import togglePopup from './modules/togglePopup'; //сделано
import topSlider from './modules/topSlider'; //сделано
import services from './modules/services';
import searchForServices from './modules/searchForServices';
import questions from './modules/questions';
import scrollBeginn from './modules/scrollBeginn';
import sendingForms from './modules/sendingForms';

// Modal PopUp
togglePopup();

// Topslider
topSlider();

// Services
services();

// Search for services
searchForServices();

// Questions
questions();

// scroll to the beginning
scrollBeginn();

//Sending forms
sendingForms();
