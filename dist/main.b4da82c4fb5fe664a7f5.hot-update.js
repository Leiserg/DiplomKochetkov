/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDiplomKochetkov"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Ошибка',\n      loadMessage = 'Идет отправка',\n      succesMessage = 'Отправлено';\n  var form = document.getElementById('callback-sandform'),\n      titleForm = document.getElementById('koch-submit');\n  var statusMessage = document.createElement('div');\n  var body = document.querySelector('body');\n  body.addEventListener('input', function (e) {\n    var target = e.target;\n\n    if (e.inputType === 'insertFromPaste') {\n      target.value = '';\n      return;\n    }\n\n    if (target.matches('.fio')) {\n      target.value = target.value.replace(/[^а-я\\s\\-]/i, '');\n    } else if (target.matches('.tel')) {\n      target.value = target.value.replace(/[^\\+\\d\\(\\)\\-]/i, '');\n    }\n  });\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    titleForm.style.в = 'none';\n    form.appendChild(statusMessage);\n    var request = new XMLHttpRequest();\n    request.addEventListener('readystatechange', function () {\n      statusMessage.textContent = loadMessage;\n\n      if (request.readyState !== 4) {\n        return;\n      }\n\n      if (request.status === 200) {\n        statusMessage.textContent = succesMessage;\n      } else {\n        statusMessage.textContent = errorMessage;\n      }\n    });\n    request.open('POST', './server.php');\n    request.setRequestHeader('Content-Type', 'aplication/json');\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    request.send(JSON.stringify(body));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://DiplomKochetkov/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c9702e2dc86570e973e5")
/******/ })();
/******/ 
/******/ }
);