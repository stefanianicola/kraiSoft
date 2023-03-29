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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const child = document.getElementById('child');\nconst parent = document.getElementById('parent');\n let isDragging = false;\nlet dragOffset = { x: 0, y: 0 };\n\nchild !== null && child.addEventListener('mousedown', function(event) {\n\n  isDragging = true;\n  dragOffset.x = event.clientX - child.offsetLeft;\n  dragOffset.y = event.clientY - child.offsetTop;\n\n});\n\ndocument.addEventListener('mousemove', function(event) {\n  if (isDragging) {\n    const x = event.clientX - dragOffset.x;\n    const y = event.clientY - dragOffset.y;\n    const maxX = parent.clientWidth - child.offsetWidth;\n    const maxY = parent.clientHeight - child.offsetHeight;\n    const constrainedX = Math.max(0, Math.min(maxX, x));\n    const constrainedY = Math.max(0, Math.min(maxY, y));\n    child.style.left = constrainedX + 'px';\n    child.style.top = constrainedY + 'px';\n  }\n});\n\ndocument.addEventListener('mouseup', function() {\n  isDragging = false;\n});\n\n\nwindow.index = {\n  isDragging,\n  dragOffset\n};\n/* This code adds event listeners to the child element and the document that allow for dragging the child element within \nits parent. When the mouse is pressed down on the child element, isDragging is set to true and dragOffset is set to the \ndifference between the mouse coordinates and the child element's offsetLeft and offsetTop. When the mouse moves, if \nisDragging is true, then constrainedX and constrainedY are calculated based on maxX and maxY (the maximum x and y \n    coordinates of the parent element). The left and top style properties of the child element are then set to \n    these constrained coordinates. When the mouse is released, isDragging is set to false. */\n\n\n//# sourceURL=webpack://kraisoft/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;