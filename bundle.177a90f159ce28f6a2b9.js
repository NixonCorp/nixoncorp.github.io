/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n\n\nwindow.goToContactContainer = function () {\n  document.getElementById('contact').scrollIntoView({\n    behavior: \"smooth\"\n  });\n};\n\nwindow.animateScrollToTop = function (duration) {\n  // cancel if already on top\n  if (document.scrollingElement.scrollTop === 0) {\n    return;\n  }\n\n  var cosParameter = document.scrollingElement.scrollTop / 2;\n  var scrollCount = 0,\n      oldTimestamp = null;\n\n  function step(newTimestamp) {\n    if (oldTimestamp !== null) {\n      // if duration is 0 scrollCount will be Infinity\n      scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;\n\n      if (scrollCount >= Math.PI) {\n        return document.scrollingElement.scrollTop = 0;\n      }\n\n      document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);\n    }\n\n    oldTimestamp = newTimestamp;\n    window.requestAnimationFrame(step);\n  }\n\n  window.requestAnimationFrame(step);\n};\n\nvar particleWords = {\n  Particle: function Particle(x, y) {\n    this.x = x;\n    this.y = y;\n    this.radius = 3.5;\n\n    this.draw = function (ctx) {\n      ctx.save();\n      ctx.translate(this.x, this.y);\n      ctx.fillStyle = 'white';\n      ctx.fillRect(0, 0, this.radius, this.radius);\n      ctx.restore();\n    };\n  },\n  writeWords: function writeWords(textArray) {\n    particleWords.changeLetter(textArray);\n    particleWords.getPixels(particleWords.tmpCanvas, particleWords.tmpCtx);\n  },\n  init: function init(textArray) {\n    particleWords.canvas = document.querySelector('canvas');\n    particleWords.ctx = particleWords.canvas.getContext('2d');\n    particleWords.W = 700;\n    particleWords.H = 100;\n    particleWords.particlePositions = [];\n    particleWords.particles = [];\n    particleWords.tmpCanvas = document.createElement('canvas');\n    particleWords.tmpCtx = particleWords.tmpCanvas.getContext('2d');\n    particleWords.canvas.width = particleWords.W;\n    particleWords.canvas.height = particleWords.H;\n    particleWords.writeWords(textArray);\n    setInterval(function () {\n      particleWords.writeWords(textArray);\n    }, 2000);\n    particleWords.makeParticles(10000);\n    particleWords.animate();\n  },\n  currentPos: 0,\n  changeLetter: function changeLetter(textArray) {\n    var letters = textArray; //letters = letters.split('');\n\n    particleWords.time = letters[particleWords.currentPos];\n    particleWords.currentPos++;\n\n    if (particleWords.currentPos >= letters.length) {\n      particleWords.currentPos = 0;\n    }\n  },\n  makeParticles: function makeParticles(num) {\n    for (var i = 0; i <= num; i++) {\n      particleWords.particles.push(new particleWords.Particle(particleWords.W / 2 + Math.random() * 400 - 200, particleWords.H / 2 + Math.random() * 400 - 200));\n    }\n  },\n  getPixels: function getPixels(canvas, ctx) {\n    var keyword = particleWords.time,\n        gridX = 6,\n        gridY = 6;\n    canvas.width = 700;\n    canvas.height = 100;\n    ctx.fillStyle = 'red';\n    ctx.font = 'italic bold 80px Noto Serif';\n    ctx.fillText(keyword, 0, 25 + (ctx.measureText(keyword).fontBoundingBoxDescent + ctx.measureText(keyword).fontBoundingBoxAscent) / 2);\n    var idata = ctx.getImageData(0, 0, canvas.width, canvas.height);\n    var buffer32 = new Uint32Array(idata.data.buffer);\n    if (particleWords.particlePositions.length > 0) particleWords.particlePositions = [];\n\n    for (var y = 0; y < canvas.height; y += gridY) {\n      for (var x = 0; x < canvas.width; x += gridX) {\n        if (buffer32[y * canvas.width + x]) {\n          particleWords.particlePositions.push({\n            x: x,\n            y: y\n          });\n        }\n      }\n    }\n  },\n  animateParticles: function animateParticles() {\n    var p, pPos;\n\n    for (var i = 0, num = particleWords.particles.length; i < num; i++) {\n      p = particleWords.particles[i];\n      pPos = particleWords.particlePositions[i];\n\n      if (particleWords.particles.indexOf(p) === particleWords.particlePositions.indexOf(pPos)) {\n        p.x += (pPos.x - p.x) * .3;\n        p.y += (pPos.y - p.y) * .3;\n        p.draw(particleWords.ctx);\n      }\n    }\n  },\n  animate: function animate() {\n    requestAnimationFrame(particleWords.animate);\n    particleWords.ctx.fillStyle = '#1C1C1C';\n    particleWords.ctx.fillRect(0, 0, particleWords.W, particleWords.H);\n    particleWords.animateParticles();\n  }\n};\n\nwindow.onload = function () {\n  particleWords.init(['Timur Urazbakhtin', 'Frontend Developer']);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/js/index.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scss/styles.scss?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;