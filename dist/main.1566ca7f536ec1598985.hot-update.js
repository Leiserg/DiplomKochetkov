/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDiplomKochetkov"]("main",{

/***/ "./src/modules/services.js":
/*!*********************************!*\
  !*** ./src/modules/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar services = function services() {\n  var elementFaq = document.querySelectorAll('.element-faq'),\n      title = document.querySelectorAll('.question'),\n      element1 = document.getElementById('kok'),\n      elementContent = document.querySelectorAll('.answer');\n  element1.style.display = 'block';\n  console.log(element1);\n  elementFaq.forEach(function (elem, index) {\n    elem.addEventListener('click', function (event) {\n      event.preventDefault();\n      var target = event.target;\n      elementFaq.forEach(function (e, i) {\n        e.classList.remove('active');\n        elementContent[i].style.display = 'none';\n      });\n\n      if (target === title[index]) {\n        elem.classList.toggle('active');\n\n        if (elem.classList.contains('active')) {\n          elementContent[index].style.display = 'block';\n        } else {\n          elementContent[index].style.display = 'none';\n        }\n      }\n    });\n  });\n  console.log(1);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services);\n\n//# sourceURL=webpack://DiplomKochetkov/./src/modules/services.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5040d4c986e62db8968d")
/******/ })();
/******/ 
/******/ }
);