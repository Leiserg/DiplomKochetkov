'use strict';

import prices from './modules/prices';
import popUp from './modules/popUp';
import slider from './modules/slider';
import services from './modules/services';
import searchForServices from './modules/searchForServices';
import questions from './modules/questions';
import scrollBeginn from './modules/scrollBeginn';
import sendingForms from './modules/sendingForms';

//Prices
prices();

// Modal PopUp
popUp();

// Slider
slider();

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
