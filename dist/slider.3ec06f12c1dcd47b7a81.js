/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("const slideScrolling = [...document.querySelectorAll(\".slide\")].map(item => item.id);\r\nconst dots = [...document.querySelectorAll(\".slider-dot\")].map(item => item.id);\r\nlet dotNumber = 0;\r\n\r\nconst btnLeft = document.querySelector(\".slider-arrow-left\");\r\nconst btnRight = document.querySelector(\".slider-arrow-right\");\r\n\r\n\r\nsetTimeout(function run() {\r\n    if (dotNumber !== slideScrolling.length - 1) dotNumber++;\r\n    console.log(slideScrolling);\r\n    slideRolling(slideScrolling, dotNumber);\r\n  }, 10000);\r\n\r\nbtnRight.addEventListener(\"click\", () => {\r\n    if (dotNumber !== slideScrolling.length - 1) dotNumber++;\r\n    console.log(slideScrolling);\r\n    slideRolling(slideScrolling, dotNumber);\r\n\r\n});\r\nbtnLeft.addEventListener(\"click\", () => {\r\n    if (dotNumber !== 0) dotNumber--;\r\n    slideRolling(slideScrolling, dotNumber);\r\n});\r\n\r\nfunction slideRolling(slideScrolling, dotNumber){\r\n    const dotCheckpoint = document.getElementById(slideScrolling[dotNumber]);\r\n    console.log(dotCheckpoint);\r\n    dotCheckpoint.scrollIntoView({\r\n        block: \"nearest\",\r\n        inline: \"start\",\r\n        behavior: \"smooth\"\r\n    });\r\n}\n\n//# sourceURL=webpack://windowcraft/./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/slider.js"]();
/******/ 	
/******/ })()
;