/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDiplomKochetkov"]("main",{

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var modalOverlay = document.querySelector('.modal-overlay'),\n      modalBtn = document.querySelectorAll('.callback-all-btn'),\n      modalBtnClose = document.querySelector('.modal-close'); // wrapperBtn = document.querySelectorAll('.stolb'); callback-all-btn\n\n  modalBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      modalOverlay.style.display = 'block';\n    });\n  });\n  modalBtnClose.addEventListener('click', function () {\n    modalOverlay.style.display = 'none';\n  });\n  modalOverlay.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('.popup-close')) {\n      modalOverlay.style.display = 'none';\n    } else {\n      target = target.closest('.modal-callback');\n      console.log(target);\n\n      if (!target) {\n        modalOverlay.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://DiplomKochetkov/./src/modules/togglePopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3512ba510424f8600bf2")
/******/ })();
/******/ 
/******/ }
);