/*
    Template for penguinmod-blocks-updater
    Used for scratch-blocks compiles

    Can be used to test scratch-blocks locally
    This file is modified to contain compiled info later.
*/
/* note: this code does not actually run, it is a template */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Blockly"] = factory();
	else
		root["Blockly"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./shim/vertical.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/imports-loader/index.js?Blockly=../shim/blocks_compressed_vertical,goog=../shim/blockly_compressed_vertical.goog!./node_modules/exports-loader/index.js?Blockly!./msg/messages.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/imports-loader?Blockly=../shim/blocks_compressed_vertical,goog=../shim/blockly_compressed_vertical.goog!./node_modules/exports-loader?Blockly!./msg/messages.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*** IMPORTS FROM imports-loader ***/\nvar Blockly = __webpack_require__(/*! ../shim/blocks_compressed_vertical */ \"./shim/blocks_compressed_vertical.js\");\nvar goog = __webpack_require__(/*! ../shim/blockly_compressed_vertical.goog */ \"./shim/blockly_compressed_vertical.goog.js\");\n\n{{{{!!__TEMPLATE_msg/messages.js__!!}}}}\n\n/*** EXPORTS FROM exports-loader ***/\nmodule.exports = Blockly;\n\n\n//# sourceURL=webpack://Blockly/./msg/messages.js?./node_modules/imports-loader?Blockly=../shim/blocks_compressed_vertical,goog=../shim/blockly_compressed_vertical.goog!./node_modules/exports-loader?Blockly");

/***/ }),

/***/ "./node_modules/imports-loader/index.js?Blockly=../shim/blocks_compressed_vertical-blockly_compressed_vertical-messages,goog=../shim/blockly_compressed_vertical.goog!./node_modules/exports-loader/index.js?Blockly!./msg/scratch_msgs.js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/imports-loader?Blockly=../shim/blocks_compressed_vertical-blockly_compressed_vertical-messages,goog=../shim/blockly_compressed_vertical.goog!./node_modules/exports-loader?Blockly!./msg/scratch_msgs.js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*** IMPORTS FROM imports-loader ***/\nvar Blockly = __webpack_require__(/*! ../shim/blocks_compressed_vertical-blockly_compressed_vertical-messages */ \"./shim/blocks_compressed_vertical-blockly_compressed_vertical-messages.js\");\nvar goog = __webpack_require__(/*! ../shim/blockly_compressed_vertical.goog */ \"./shim/blockly_compressed_vertical.goog.js\");\n\n{{{{!!__TEMPLATE_msg/scratch_msgs.js__!!}}}}\n\n/*** EXPORTS FROM exports-loader ***/\nmodule.exports = Blockly;\n\n\n//# sourceURL=webpack://Blockly/./msg/scratch_msgs.js?./node_modules/imports-loader?Blockly=../shim/blocks_compressed_vertical-blockly_compressed_vertical-messages,goog=../shim/blockly_compressed_vertical.goog!./node_modules/exports-loader?Blockly");

/***/ }),

/***/ "./node_modules/imports-loader/index.js?Blockly=./shim/blockly_compressed_vertical.Blockly!./node_modules/exports-loader/index.js?Blockly!./blocks_compressed.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/imports-loader?Blockly=./shim/blockly_compressed_vertical.Blockly!./node_modules/exports-loader?Blockly!./blocks_compressed.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*** IMPORTS FROM imports-loader ***/\nvar Blockly = __webpack_require__(/*! ./shim/blockly_compressed_vertical.Blockly */ \"./shim/blockly_compressed_vertical.Blockly.js\");\n\n{{{{!!__TEMPLATE_blocks_compressed.js__!!}}}}\n\n/*** EXPORTS FROM exports-loader ***/\nmodule.exports = Blockly;\n\n\n//# sourceURL=webpack://Blockly/./blocks_compressed.js?./node_modules/imports-loader?Blockly=./shim/blockly_compressed_vertical.Blockly!./node_modules/exports-loader?Blockly");

/***/ }),

/***/ "./node_modules/imports-loader/index.js?goog=./shim/blockly_compressed_vertical.goog,Blockly=./shim/blockly_compressed_vertical-blocks_compressed!./node_modules/exports-loader/index.js?Blockly!./blocks_compressed_vertical.js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/imports-loader?goog=./shim/blockly_compressed_vertical.goog,Blockly=./shim/blockly_compressed_vertical-blocks_compressed!./node_modules/exports-loader?Blockly!./blocks_compressed_vertical.js ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/\nvar goog = __webpack_require__(/*! ./shim/blockly_compressed_vertical.goog */ \"./shim/blockly_compressed_vertical.goog.js\");\nvar Blockly = __webpack_require__(/*! ./shim/blockly_compressed_vertical-blocks_compressed */ \"./shim/blockly_compressed_vertical-blocks_compressed.js\");\n\n// Do not edit this file; automatically generated by build.py.\n'use strict';\n\nvar $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||\"function\"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return\"undefined\"!=typeof window&&window===a?a:\"undefined\"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX=\"jscomp_symbol_\";\n$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var a=0;return function(b){return $jscomp.SYMBOL_PREFIX+(b||\"\")+a++}}();\n$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol(\"iterator\"));\"function\"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};\n$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var b=a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};\n$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError(\"The 'this' value for String.prototype.\"+c+\" must not be null or undefined\");if(b instanceof RegExp)throw new TypeError(\"First argument to String.prototype.\"+c+\" must not be a regular expression\");return a+\"\"};\n$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(\".\");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};\n$jscomp.polyfill(\"String.prototype.startsWith\",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,\"startsWith\");a+=\"\";var e=b.length,f=a.length;c=Math.max(0,Math.min(c|0,b.length));for(var g=0;g<f&&c<e;)if(b[c++]!=a[g++])return!1;return g>=f}},\"es6\",\"es3\");{{{{!!__TEMPLATE_blocks_compressed_vertical.js__!!}}}}\n\n\n/*** EXPORTS FROM exports-loader ***/\nmodule.exports = Blockly;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Blockly/./blocks_compressed_vertical.js?./node_modules/imports-loader?goog=./shim/blockly_compressed_vertical.goog,Blockly=./shim/blockly_compressed_vertical-blocks_compressed!./node_modules/exports-loader?Blockly");

/***/ }),

/***/ "./node_modules/imports-loader/index.js?this=>window!./node_modules/exports-loader/index.js?Blockly&goog!./blockly_compressed_vertical.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/imports-loader?this=>window!./node_modules/exports-loader?Blockly&goog!./blockly_compressed_vertical.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/\n(function() {\n\n{{{{!!__TEMPLATE_blockly_compressed_vertical.js__!!}}}}\n\n\n/*** EXPORTS FROM exports-loader ***/\nexports[\"Blockly\"] = (Blockly);\nexports[\"goog\"] = (goog);\n}.call(window));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Blockly/./blockly_compressed_vertical.js?./node_modules/imports-loader?this=%3Ewindow!./node_modules/exports-loader?Blockly&goog");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Blockly/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./shim/blockly_compressed_vertical-blocks_compressed.js":
/*!***************************************************************!*\
  !*** ./shim/blockly_compressed_vertical-blocks_compressed.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! imports-loader?Blockly=./shim/blockly_compressed_vertical.Blockly!exports-loader?Blockly!../blocks_compressed */ \"./node_modules/imports-loader/index.js?Blockly=./shim/blockly_compressed_vertical.Blockly!./node_modules/exports-loader/index.js?Blockly!./blocks_compressed.js\");\n\n\n//# sourceURL=webpack://Blockly/./shim/blockly_compressed_vertical-blocks_compressed.js?");

/***/ }),

/***/ "./shim/blockly_compressed_vertical.Blockly.js":
/*!*****************************************************!*\
  !*** ./shim/blockly_compressed_vertical.Blockly.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./blockly_compressed_vertical */ \"./shim/blockly_compressed_vertical.js\").Blockly;\n\n\n//# sourceURL=webpack://Blockly/./shim/blockly_compressed_vertical.Blockly.js?");

/***/ }),

/***/ "./shim/blockly_compressed_vertical.goog.js":
/*!**************************************************!*\
  !*** ./shim/blockly_compressed_vertical.goog.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./blockly_compressed_vertical */ \"./shim/blockly_compressed_vertical.js\").goog;\n\n\n//# sourceURL=webpack://Blockly/./shim/blockly_compressed_vertical.goog.js?");

/***/ }),

/***/ "./shim/blockly_compressed_vertical.js":
/*!*********************************************!*\
  !*** ./shim/blockly_compressed_vertical.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! imports-loader?this=>window!exports-loader?Blockly&goog!../blockly_compressed_vertical */ \"./node_modules/imports-loader/index.js?this=>window!./node_modules/exports-loader/index.js?Blockly&goog!./blockly_compressed_vertical.js\");\n\n\n//# sourceURL=webpack://Blockly/./shim/blockly_compressed_vertical.js?");

/***/ }),

/***/ "./shim/blocks_compressed_vertical-blockly_compressed_vertical-messages.js":
/*!*********************************************************************************!*\
  !*** ./shim/blocks_compressed_vertical-blockly_compressed_vertical-messages.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! imports-loader?Blockly=../shim/blocks_compressed_vertical,goog=../shim/blockly_compressed_vertical.goog!exports-loader?Blockly!../msg/messages */ \"./node_modules/imports-loader/index.js?Blockly=../shim/blocks_compressed_vertical,goog=../shim/blockly_compressed_vertical.goog!./node_modules/exports-loader/index.js?Blockly!./msg/messages.js\");\n\n\n//# sourceURL=webpack://Blockly/./shim/blocks_compressed_vertical-blockly_compressed_vertical-messages.js?");

/***/ }),

/***/ "./shim/blocks_compressed_vertical.js":
/*!********************************************!*\
  !*** ./shim/blocks_compressed_vertical.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! imports-loader?goog=./shim/blockly_compressed_vertical.goog,Blockly=./shim/blockly_compressed_vertical-blocks_compressed!exports-loader?Blockly!../blocks_compressed_vertical */ \"./node_modules/imports-loader/index.js?goog=./shim/blockly_compressed_vertical.goog,Blockly=./shim/blockly_compressed_vertical-blocks_compressed!./node_modules/exports-loader/index.js?Blockly!./blocks_compressed_vertical.js\");\n\n\n//# sourceURL=webpack://Blockly/./shim/blocks_compressed_vertical.js?");

/***/ }),

/***/ "./shim/vertical.js":
/*!**************************!*\
  !*** ./shim/vertical.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! imports-loader?Blockly=../shim/blocks_compressed_vertical-blockly_compressed_vertical-messages,goog=../shim/blockly_compressed_vertical.goog!exports-loader?Blockly!../msg/scratch_msgs */ \"./node_modules/imports-loader/index.js?Blockly=../shim/blocks_compressed_vertical-blockly_compressed_vertical-messages,goog=../shim/blockly_compressed_vertical.goog!./node_modules/exports-loader/index.js?Blockly!./msg/scratch_msgs.js\");\n\n\n//# sourceURL=webpack://Blockly/./shim/vertical.js?");

/***/ })

/******/ });
});