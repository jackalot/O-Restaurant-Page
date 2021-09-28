/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactContent.js":
/*!*******************************!*\
  !*** ./src/contactContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \n    Make a module that displays all the\n  content for the contact us page.\n*/\nfunction makeContactPage () {\n    const newDiv = document.createElement(\"div\");\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"This is the Contact Page\";\n    newDiv.appendChild(heading);\n    return newDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContactPage());\n\n//# sourceURL=webpack://O-Restaurant-Page/./src/contactContent.js?");

/***/ }),

/***/ "./src/homeContent.js":
/*!****************************!*\
  !*** ./src/homeContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \n    Make a module that displays all the\n  content for the home page.\n*/\nfunction makeHomePage () {\n    const newDiv = document.createElement(\"div\");\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"This is the Home Page\";\n    newDiv.appendChild(heading);\n    return newDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHomePage());\n\n//# sourceURL=webpack://O-Restaurant-Page/./src/homeContent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeContent */ \"./src/homeContent.js\");\n/* harmony import */ var _contactContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactContent */ \"./src/contactContent.js\");\n\n\nfunction component () {\n    const content = document.querySelector(\"#content\");\n    const header = document.createElement(\"header\");\n        content.append(header);\n        const homeBtn = document.createElement(\"button\");\n            homeBtn.textContent = \"Home\";\n            homeBtn.classList.add(\"Home\");\n            header.append(homeBtn);\n            homeBtn.addEventListener('click', () =>{ \n                doPage(_homeContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n            })\n        const contactBtn = document.createElement(\"button\");\n            contactBtn.textContent = \"Contact Us\";\n            contactBtn.classList.add(\"Contact-Us\");\n            header.append(contactBtn);\n            contactBtn.addEventListener('click', () =>{ \n                doPage(_contactContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n            })\n        const menuBtn = document.createElement(\"button\");\n            menuBtn.textContent = \"Menu\";\n            menuBtn.classList.add(\"Menu\");\n            header.append(menuBtn);\n    return content;\n}\nfunction doPage(func) {\n    console.log(\"hi\");\n    const oldContent = document.querySelector(\"#content\");\n    \n    let newContent = func();\n    document.body.appendChild(func);\n}\nwindow.onload = () => {\ndocument.body.appendChild(component());\n}\n\n//# sourceURL=webpack://O-Restaurant-Page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;