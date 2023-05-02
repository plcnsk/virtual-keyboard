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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #d2dce5;\\n}\\n\\n.keyboard_output {\\n  border: solid 1px;\\n  min-height: 130px;\\n  width: 768px;\\n  margin-bottom: 15px;\\n  background-color: #f0f7fd;\\n}\\n\\n.keyboard_row {\\n  display: flex;\\n  user-select: none;\\n  width: 768px;\\n  height: 45px;\\n}\\n\\n.keyboard_key {\\n  margin: 2px;\\n  background-color: #0e0e0e;\\n  color: #fff;\\n  padding: 5px;\\n  flex-basis: 100%; \\n  text-align: center;\\n  cursor: pointer;\\n  user-select: none;\\n}\\n\\n.keyboard_key_twice {\\n  flex-basis: 200%;\\n} \\n\\n.keyboard_key_space {\\n  flex-basis: 400%;\\n}\\n\\n.keyboard_key__down {\\n  transform: scale(0.9);\\n}\\n\\n.keyboard_key__hover {\\n  background-color: #222;\\n}\\n\\n.keyboard_wrapper {\\n  border: solid Ipx;\\n}\\n \\n.hl_1 {\\n  font-weight: bold;\\n}\\n\\n.codeLine {\\n  display: flex;\\n}\\n\\n.lineIndex {\\n  width: 50px;\\n  text-align: end;\\n  margin-right: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/control */ \"./src/common/control.ts\");\n/* harmony import */ var _keys_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys/key */ \"./src/keys/key.ts\");\n/* harmony import */ var _keys_keyLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys/keyLang */ \"./src/keys/keyLang.ts\");\n/* harmony import */ var _keys_keyBackspace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keys/keyBackspace */ \"./src/keys/keyBackspace.ts\");\n/* harmony import */ var _keys_keyCapsLock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys/keyCapsLock */ \"./src/keys/keyCapsLock.ts\");\n/* harmony import */ var _keys_keyShift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keys/keyShift */ \"./src/keys/keyShift.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\n\n\nvar classMap = {\n    'Backspace': _keys_keyBackspace__WEBPACK_IMPORTED_MODULE_3__.KeyBackspace,\n    'ShiftLeft': _keys_keyShift__WEBPACK_IMPORTED_MODULE_5__.KeyShift,\n    'CapsLock': _keys_keyCapsLock__WEBPACK_IMPORTED_MODULE_4__.KeyCapsLock,\n    'Lang': _keys_keyLang__WEBPACK_IMPORTED_MODULE_2__.KeyLang,\n};\nvar Board = /** @class */ (function (_super) {\n    __extends(Board, _super);\n    function Board(parentNode, layoutConfig, state) {\n        var _this = _super.call(this, parentNode) || this;\n        _this.keyMap = {};\n        layoutConfig.forEach(function (row) {\n            var rowView = new _common_control__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this.node, 'div', 'keyboard_row');\n            row.forEach(function (keyCode) {\n                var KeyConstructor = classMap[keyCode] || _keys_key__WEBPACK_IMPORTED_MODULE_1__.Key;\n                var key = new KeyConstructor(rowView.node, keyCode, state);\n                _this.keyMap[keyCode] = key;\n            });\n        });\n        return _this;\n    }\n    Board.prototype.setLanguage = function (boardConfig) {\n        for (var keyCode in boardConfig) {\n            this.keyMap[keyCode].setData(boardConfig[keyCode]);\n        }\n    };\n    Board.prototype.handleDown = function (keyCode) {\n        var currentKey = this.keyMap[keyCode];\n        if (currentKey) {\n            currentKey.handleDown();\n        }\n    };\n    Board.prototype.handleUp = function (keyCode) {\n        var currentKey = this.keyMap[keyCode];\n        if (currentKey) {\n            currentKey.handleUp();\n        }\n    };\n    return Board;\n}(_common_control__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/board.ts?");

/***/ }),

/***/ "./src/common/control.ts":
/*!*******************************!*\
  !*** ./src/common/control.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Control = /** @class */ (function () {\n    function Control(parentNode, tagName, className, content) {\n        if (tagName === void 0) { tagName = 'div'; }\n        if (className === void 0) { className = ''; }\n        if (content === void 0) { content = ''; }\n        var el = document.createElement(tagName);\n        el.className = className;\n        el.innerHTML = content;\n        if (parentNode) {\n            parentNode.append(el);\n        }\n        this.node = el;\n    }\n    Control.prototype.destroy = function () {\n        this.node.remove();\n    };\n    return Control;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/common/control.ts?");

/***/ }),

/***/ "./src/common/signal.ts":
/*!******************************!*\
  !*** ./src/common/signal.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Signal = /** @class */ (function () {\n    function Signal() {\n        this.listeners = [];\n    }\n    Signal.prototype.add = function (listener) {\n        this.listeners.push(listener);\n    };\n    Signal.prototype.remove = function (listener) {\n        this.listeners = this.listeners.filter(function (elem) { return elem !== listener; });\n    };\n    Signal.prototype.emit = function (params) {\n        this.listeners.forEach(function (listener) { return listener(params); });\n    };\n    return Signal;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signal);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/common/signal.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard.ts\");\n/* harmony import */ var _keyboardState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboardState */ \"./src/keyboardState.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nvar loaded = localStorage.getItem('savedState');\nvar defaultData = {\n    content: '',\n    langIndex: 0,\n    shift: false,\n    caps: false,\n};\nvar KeyboardData = /** @class */ (function () {\n    function KeyboardData(data) {\n        if (typeof data.content != 'string')\n            throw new Error('');\n        if (typeof data.langIndex != 'number')\n            throw new Error('');\n        if (typeof data.shift != 'boolean')\n            throw new Error('');\n        if (typeof data.caps != 'boolean')\n            throw new Error('');\n        this.content = data.content;\n        this.langIndex = data.langIndex;\n        this.shift = data.shift;\n        this.caps = data.caps;\n    }\n    KeyboardData.load = function () {\n        var loaded = localStorage.getItem('savedState');\n        return new KeyboardData(JSON.parse(loaded));\n    };\n    KeyboardData.prototype.save = function () {\n        localStorage.setItem('savedState', JSON.stringify(this));\n    };\n    return KeyboardData;\n}());\nvar data;\ntry {\n    data = KeyboardData.load();\n}\ncatch (e) {\n    data = new KeyboardData(defaultData);\n}\nvar state = new _keyboardState__WEBPACK_IMPORTED_MODULE_1__.KeyboardState(data);\nvar keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__.Keyboard(document.body, state);\nwindow.keyboard = keyboard;\nwindow.onbeforeunload = function () {\n    new KeyboardData(state.data).save();\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/keyboard.ts":
/*!*************************!*\
  !*** ./src/keyboard.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/control */ \"./src/common/control.ts\");\n/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output */ \"./src/output.ts\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _languages_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languages/layout */ \"./src/languages/layout.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\nvar Keyboard = /** @class */ (function (_super) {\n    __extends(Keyboard, _super);\n    function Keyboard(parentNode, state) {\n        var _this = _super.call(this, parentNode) || this;\n        _this.langIndex = 0;\n        var update = function (data) {\n            _this.output.content = data.content;\n            var currentBoard = state.languages[data.langIndex];\n            if (data.shift) {\n                _this.board.setLanguage(currentBoard.shift);\n            }\n            else if (data.caps) {\n                _this.board.setLanguage(currentBoard.caps);\n            }\n            else {\n                _this.board.setLanguage(currentBoard.base);\n            }\n        };\n        state.onChange.add(update);\n        _this.output = new _output__WEBPACK_IMPORTED_MODULE_1__.Output(_this.node);\n        _this.board = new _board__WEBPACK_IMPORTED_MODULE_2__.Board(_this.node, _languages_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], state);\n        document.addEventListener('keydown', function (e) {\n            console.log(e.code);\n            _this.board.handleDown(e.code);\n        });\n        document.addEventListener('keyup', function (e) {\n            console.log(e.code);\n            _this.board.handleUp(e.code);\n        });\n        update(state.data);\n        return _this;\n    }\n    return Keyboard;\n}(_common_control__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/keyboard.ts?");

/***/ }),

/***/ "./src/keyboardState.ts":
/*!******************************!*\
  !*** ./src/keyboardState.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyboardState\": () => (/* binding */ KeyboardState)\n/* harmony export */ });\n/* harmony import */ var _common_signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/signal */ \"./src/common/signal.ts\");\n/* harmony import */ var _languages_eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages/eng */ \"./src/languages/eng.ts\");\n/* harmony import */ var _languages_rus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages/rus */ \"./src/languages/rus.ts\");\n\n\n\nvar KeyboardState = /** @class */ (function () {\n    function KeyboardState(initial) {\n        this.languages = [\n            _languages_eng__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            _languages_rus__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        ];\n        this.onChange = new _common_signal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this._data = initial;\n    }\n    Object.defineProperty(KeyboardState.prototype, \"data\", {\n        get: function () {\n            return this._data;\n        },\n        set: function (value) {\n            this._data = value;\n            this.onChange.emit(this._data);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return KeyboardState;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/keyboardState.ts?");

/***/ }),

/***/ "./src/keys/key.ts":
/*!*************************!*\
  !*** ./src/keys/key.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Key\": () => (/* binding */ Key)\n/* harmony export */ });\n/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/control */ \"./src/common/control.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar Key = /** @class */ (function (_super) {\n    __extends(Key, _super);\n    function Key(parentNode, data, state) {\n        var _this = _super.call(this, parentNode, 'div', 'keyboard_key') || this;\n        _this.state = state;\n        _this.data = data;\n        _this.node.textContent = data;\n        _this.node.onmousedown = function () {\n            _this.down();\n            document.addEventListener('mouseup', function () {\n                _this.input();\n                _this.up();\n            }, { once: true });\n        };\n        _this.node.onmouseenter = function () {\n            _this.node.classList.add('keyboard_key__hover');\n        };\n        _this.node.onmouseleave = function () {\n            _this.node.classList.remove('keyboard_key__hover');\n        };\n        return _this;\n    }\n    Key.prototype.handleDown = function () {\n        this.input();\n        this.down();\n    };\n    Key.prototype.handleUp = function () {\n        this.up();\n    };\n    Key.prototype.input = function () {\n        var state = this.state;\n        state.data = __assign(__assign({}, state.data), { content: state.data.content + this.data });\n    };\n    Key.prototype.down = function () {\n        this.node.classList.add('keyboard_key__down');\n    };\n    Key.prototype.up = function () {\n        this.node.classList.remove('keyboard_key__down');\n    };\n    Key.prototype.setData = function (data) {\n        this.data = data;\n        this.node.textContent = data;\n    };\n    return Key;\n}(_common_control__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/keys/key.ts?");

/***/ }),

/***/ "./src/keys/keyBackspace.ts":
/*!**********************************!*\
  !*** ./src/keys/keyBackspace.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyBackspace\": () => (/* binding */ KeyBackspace)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/keys/key.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar KeyBackspace = /** @class */ (function (_super) {\n    __extends(KeyBackspace, _super);\n    function KeyBackspace() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    KeyBackspace.prototype.input = function () {\n        var state = this.state;\n        state.data = __assign(__assign({}, state.data), { content: state.data.content.slice(0, -1) });\n    };\n    return KeyBackspace;\n}(_key__WEBPACK_IMPORTED_MODULE_0__.Key));\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/keys/keyBackspace.ts?");

/***/ }),

/***/ "./src/keys/keyCapsLock.ts":
/*!*********************************!*\
  !*** ./src/keys/keyCapsLock.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyCapsLock\": () => (/* binding */ KeyCapsLock)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/keys/key.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar KeyCapsLock = /** @class */ (function (_super) {\n    __extends(KeyCapsLock, _super);\n    function KeyCapsLock() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    KeyCapsLock.prototype.input = function () {\n        var state = this.state;\n        state.data = __assign(__assign({}, state.data), { caps: !state.data.caps });\n        if (state.data.caps) {\n            this.node.classList.add('keyboard_key__down');\n        }\n        else {\n            this.node.classList.remove('keyboard_key__down');\n        }\n    };\n    KeyCapsLock.prototype.down = function () {\n    };\n    KeyCapsLock.prototype.up = function () {\n    };\n    return KeyCapsLock;\n}(_key__WEBPACK_IMPORTED_MODULE_0__.Key));\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/keys/keyCapsLock.ts?");

/***/ }),

/***/ "./src/keys/keyLang.ts":
/*!*****************************!*\
  !*** ./src/keys/keyLang.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyLang\": () => (/* binding */ KeyLang)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/keys/key.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar KeyLang = /** @class */ (function (_super) {\n    __extends(KeyLang, _super);\n    function KeyLang() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    KeyLang.prototype.input = function () {\n        var state = this.state;\n        state.data = __assign(__assign({}, state.data), { langIndex: (state.data.langIndex + 1) % state.languages.length });\n    };\n    return KeyLang;\n}(_key__WEBPACK_IMPORTED_MODULE_0__.Key));\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/keys/keyLang.ts?");

/***/ }),

/***/ "./src/keys/keyShift.ts":
/*!******************************!*\
  !*** ./src/keys/keyShift.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyShift\": () => (/* binding */ KeyShift)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/keys/key.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar KeyShift = /** @class */ (function (_super) {\n    __extends(KeyShift, _super);\n    function KeyShift() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    KeyShift.prototype.input = function () {\n    };\n    KeyShift.prototype.down = function () {\n        var state = this.state;\n        state.data = __assign(__assign({}, state.data), { shift: true });\n        _super.prototype.down.call(this);\n    };\n    KeyShift.prototype.up = function () {\n        var state = this.state;\n        state.data = __assign(__assign({}, state.data), { shift: false });\n        _super.prototype.up.call(this);\n    };\n    return KeyShift;\n}(_key__WEBPACK_IMPORTED_MODULE_0__.Key));\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/keys/keyShift.ts?");

/***/ }),

/***/ "./src/languages/eng.ts":
/*!******************************!*\
  !*** ./src/languages/eng.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar functional = {\n    \"CapsLock\": \"⇪\",\n    \"ShiftLeft\": \"⇧\",\n    \"Enter\": \"\\n\",\n    \"Backspace\": \"⌫\",\n    \"Tab\": \"⇥\",\n    \"ShiftRight\": \"⇧\",\n    \"ControlLeft\": \"^\",\n    \"AltLeft\": \"\",\n    \"Space\": \" \",\n    \"AltRight\": \"\",\n    \"ControlRight\": \"^\",\n    \"ArrowUp\": \"\",\n    \"ArrowLeft\": \"\",\n    \"ArrowDown\": \"\",\n    \"ArrowRight\": \"\",\n    \"Lang\": \"fn lang\",\n};\nvar base = __assign(__assign({}, functional), { \"Backquote\": \"`\", \"Digit1\": \"1\", \"Digit2\": \"2\", \"Digit3\": \"3\", \"Digit4\": \"4\", \"Digit5\": \"5\", \"Digit6\": \"6\", \"Digit7\": \"7\", \"Digit8\": \"8\", \"Digit9\": \"9\", \"Digit0\": \"0\", \"Minus\": \"-\", \"Equal\": \"=\", \"KeyQ\": \"q\", \"KeyW\": \"w\", \"KeyE\": \"e\", \"KeyR\": \"r\", \"КeуT\": \"t\", \"KeyY\": \"y\", \"KeyU\": \"u\", \"KeyI\": \"i\", \"KeyO\": \"o\", \"KeyP\": \"p\", \"BracketLeft\": \"[\", \"BracketRight\": \"]\", \"Backslash\": \"\\\\\", \"KeyA\": \"a\", \"KeyS\": \"s\", \"KeyD\": \"d\", \"KeyF\": \"f\", \"КeуG\": \"g\", \"KeyH\": \"h\", \"KeyJ\": \"j\", \"KeyK\": \"k\", \"KeyL\": \"l\", \"Semicolon\": \";\", \"Quote\": \"'\", \"KeyZ\": \"z\", \"KeyX\": \"x\", \"KeyC\": \"c\", \"KeyV\": \"v\", \"КeуB\": \"b\", \"KeyN\": \"n\", \"KeyM\": \"m\", \"Comma\": \",\", \"Period\": \".\", \"Slash\": \"/\" });\nvar shift = __assign(__assign({}, functional), { \"Backquote\": \"~\", \"Digit1\": \"!\", \"Digit2\": \"@\", \"Digit3\": \"#\", \"Digit4\": \"$\", \"Digit5\": \"%\", \"Digit6\": \"^\", \"Digit7\": \"&\", \"Digit8\": \"*\", \"Digit9\": \"(\", \"Digit0\": \")\", \"Minus\": \"_\", \"Equal\": \"+\", \"KeyQ\": \"Q\", \"KeyW\": \"W\", \"KeyE\": \"E\", \"KeyR\": \"R\", \"КeуT\": \"T\", \"KeyY\": \"Y\", \"KeyU\": \"U\", \"KeyI\": \"I\", \"KeyO\": \"O\", \"KeyP\": \"P\", \"BracketLeft\": \"{\", \"BracketRight\": \"}\", \"Backslash\": \"\\\\\", \"KeyA\": \"A\", \"KeyS\": \"S\", \"KeyD\": \"D\", \"KeyF\": \"F\", \"КeуG\": \"G\", \"KeyH\": \"H\", \"KeyJ\": \"J\", \"KeyK\": \"K\", \"KeyL\": \"L\", \"Semicolon\": \":\", \"Quote\": '\"', \"KeyZ\": \"Z\", \"KeyX\": \"X\", \"KeyC\": \"C\", \"KeyV\": \"V\", \"КeуB\": \"B\", \"KeyN\": \"N\", \"KeyM\": \"M\", \"Comma\": \"<\", \"Period\": \">\", \"Slash\": \"?\" });\nvar caps = __assign(__assign({}, functional), { \"Backquote\": \"`\", \"Digit1\": \"1\", \"Digit2\": \"2\", \"Digit3\": \"3\", \"Digit4\": \"4\", \"Digit5\": \"5\", \"Digit6\": \"6\", \"Digit7\": \"7\", \"Digit8\": \"8\", \"Digit9\": \"9\", \"Digit0\": \"0\", \"Minus\": \"-\", \"Equal\": \"=\", \"KeyQ\": \"Q\", \"KeyW\": \"W\", \"KeyE\": \"E\", \"KeyR\": \"R\", \"КeуT\": \"T\", \"KeyY\": \"Y\", \"KeyU\": \"U\", \"KeyI\": \"I\", \"KeyO\": \"O\", \"KeyP\": \"P\", \"BracketLeft\": \"[\", \"BracketRight\": \"]\", \"Backslash\": \"\\\\\", \"KeyA\": \"A\", \"KeyS\": \"S\", \"KeyD\": \"D\", \"KeyF\": \"F\", \"КeуG\": \"G\", \"KeyH\": \"H\", \"KeyJ\": \"J\", \"KeyK\": \"K\", \"KeyL\": \"L\", \"Semicolon\": \";\", \"Quote\": \"'\", \"KeyZ\": \"Z\", \"KeyX\": \"X\", \"KeyC\": \"C\", \"KeyV\": \"V\", \"КeуB\": \"B\", \"KeyN\": \"N\", \"KeyM\": \"M\", \"Comma\": \",\", \"Period\": \".\", \"Slash\": \"/\" });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ base: base, shift: shift, caps: caps });\n\n\n//# sourceURL=webpack://my-webpack-project/./src/languages/eng.ts?");

/***/ }),

/***/ "./src/languages/layout.ts":
/*!*********************************!*\
  !*** ./src/languages/layout.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"eng\": () => (/* binding */ eng),\n/* harmony export */   \"layout\": () => (/* binding */ layout),\n/* harmony export */   \"rus\": () => (/* binding */ rus)\n/* harmony export */ });\nvar layoutTest = [\n    [\n        'Digit1',\n        'Digit2',\n        'Backspace',\n        'ShiftLeft',\n        'CapsLock',\n        'Lang'\n    ]\n];\nvar layout = [\n    [\n        \"Backquote\",\n        \"Digit1\",\n        \"Digit2\",\n        \"Digit3\",\n        \"Digit4\",\n        \"Digit5\",\n        \"Digit6\",\n        \"Digit7\",\n        \"Digit8\",\n        \"Digit9\",\n        \"Digit0\",\n        \"Minus\",\n        \"Equal\",\n        \"Backspace\",\n    ],\n    [\n        \"Tab\",\n        \"KeyQ\",\n        \"KeyW\",\n        \"KeyE\",\n        \"KeyR\",\n        \"КeуT\",\n        \"KeyY\",\n        \"KeyU\",\n        \"KeyI\",\n        \"KeyO\",\n        \"KeyP\",\n        \"BracketLeft\",\n        \"BracketRight\",\n        \"Backslash\",\n    ],\n    [\n        \"CapsLock\",\n        \"KeyA\",\n        \"KeyS\",\n        \"KeyD\",\n        \"KeyF\",\n        \"КeуG\",\n        \"KeyH\",\n        \"KeyJ\",\n        \"KeyK\",\n        \"KeyL\",\n        \"Semicolon\",\n        \"Quote\",\n        \"Enter\",\n    ],\n    [\n        \"ShiftLeft\",\n        \"KeyZ\",\n        \"KeyX\",\n        \"KeyC\",\n        \"KeyV\",\n        \"КeуB\",\n        \"KeyN\",\n        \"KeyM\",\n        \"Comma\",\n        \"Period\",\n        \"Slash\",\n        \"ArrowUp\",\n        \"ShiftRight\",\n    ],\n    [\n        \"Lang\",\n        \"ControlLeft\",\n        \"AltLeft\",\n        \"Space\",\n        \"AltRight\",\n        \"ControlRight\",\n        \"ArrowLeft\",\n        \"ArrowDown\",\n        \"ArrowRight\",\n    ]\n];\nvar eng = {\n    \"Backquote\": \"`\",\n    \"Digit1\": \"1\",\n    \"Digit2\": \"2\",\n    \"Digit3\": \"3\",\n    \"Digit4\": \"4\",\n    \"Digit5\": \"5\",\n    \"Digit6\": \"6\",\n    \"Digit7\": \"7\",\n    \"Digit8\": \"8\",\n    \"Digit9\": \"9\",\n    \"Digit0\": \"0\",\n    \"Minus\": \"-\",\n    \"Equal\": \"=\",\n    \"Backspace\": \"\",\n    \"Tab\": \"\",\n    \"KeyQ\": \"q\",\n    \"KeyW\": \"w\",\n    \"KeyE\": \"e\",\n    \"KeyR\": \"r\",\n    \"КeуT\": \"t\",\n    \"KeyY\": \"y\",\n    \"KeyU\": \"u\",\n    \"KeyI\": \"i\",\n    \"KeyO\": \"o\",\n    \"KeyP\": \"p\",\n    \"BracketLeft\": \"[\",\n    \"BracketRight\": \"]\",\n    \"Backslash\": \"\\\\\",\n    \"CapsLock\": \"\",\n    \"KeyA\": \"a\",\n    \"KeyS\": \"s\",\n    \"KeyD\": \"d\",\n    \"KeyF\": \"f\",\n    \"КeуG\": \"g\",\n    \"KeyH\": \"h\",\n    \"KeyJ\": \"j\",\n    \"KeyK\": \"k\",\n    \"KeyL\": \"l\",\n    \"Semicolon\": \";\",\n    \"Quote\": \"'\",\n    \"Enter\": \"\\n\",\n    \"ShiftLeft\": \"\",\n    \"KeyZ\": \"z\",\n    \"KeyX\": \"x\",\n    \"KeyC\": \"c\",\n    \"KeyV\": \"v\",\n    \"КeуB\": \"b\",\n    \"KeyN\": \"n\",\n    \"KeyM\": \"m\",\n    \"Comma\": \",\",\n    \"Period\": \".\",\n    \"Slash\": \"/\",\n    \"ArrowUp\": \"\",\n    \"ShiftRight\": \"\",\n    \"Lang\": \"fn lang\",\n    \"ControlLeft\": \"\",\n    \"AltLeft\": \"\",\n    \"Space\": \" \",\n    \"AltRight\": \"\",\n    \"ControlRight\": \"\",\n    \"ArrowLeft\": \"\",\n    \"ArrowDown\": \"\",\n    \"ArrowRight\": \"\",\n};\nvar rus = {\n    \"Backquote\": \"ё\",\n    \"Digit1\": \"1\",\n    \"Digit2\": \"2\",\n    \"Digit3\": \"3\",\n    \"Digit4\": \"4\",\n    \"Digit5\": \"5\",\n    \"Digit6\": \"6\",\n    \"Digit7\": \"7\",\n    \"Digit8\": \"8\",\n    \"Digit9\": \"9\",\n    \"Digit0\": \"0\",\n    \"Minus\": \"-\",\n    \"Equal\": \"=\",\n    \"Backspace\": \"\",\n    \"Tab\": \"\",\n    \"KeyQ\": \"й\",\n    \"KeyW\": \"ц\",\n    \"KeyE\": \"у\",\n    \"KeyR\": \"к\",\n    \"КeуT\": \"е\",\n    \"KeyY\": \"н\",\n    \"KeyU\": \"г\",\n    \"KeyI\": \"ш\",\n    \"KeyO\": \"щ\",\n    \"KeyP\": \"з\",\n    \"BracketLeft\": \"х\",\n    \"BracketRight\": \"ъ\",\n    \"Backslash\": \"\\\\\",\n    \"CapsLock\": \"\",\n    \"KeyA\": \"ф\",\n    \"KeyS\": \"ы\",\n    \"KeyD\": \"в\",\n    \"KeyF\": \"а\",\n    \"КeуG\": \"п\",\n    \"KeyH\": \"р\",\n    \"KeyJ\": \"о\",\n    \"KeyK\": \"л\",\n    \"KeyL\": \"д\",\n    \"Semicolon\": \"ж\",\n    \"Quote\": \"э\",\n    \"Enter\": \"\\n\",\n    \"ShiftLeft\": \"\",\n    \"KeyZ\": \"я\",\n    \"KeyX\": \"ч\",\n    \"KeyC\": \"с\",\n    \"KeyV\": \"м\",\n    \"КeуB\": \"и\",\n    \"KeyN\": \"т\",\n    \"KeyM\": \"ь\",\n    \"Comma\": \"б\",\n    \"Period\": \"ю\",\n    \"Slash\": \"/\",\n    \"ArrowUp\": \"\",\n    \"ShiftRight\": \"\",\n    \"Lang\": \"fn lang\",\n    \"ControlLeft\": \"\",\n    \"AltLeft\": \"\",\n    \"Space\": \" \",\n    \"AltRight\": \"\",\n    \"ControlRight\": \"\",\n    \"ArrowLeft\": \"\",\n    \"ArrowDown\": \"\",\n    \"ArrowRight\": \"\",\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/languages/layout.ts?");

/***/ }),

/***/ "./src/languages/rus.ts":
/*!******************************!*\
  !*** ./src/languages/rus.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar base = {\n    \"Backquote\": \"ё\",\n    \"Digit1\": \"1\",\n    \"Digit2\": \"2\",\n    \"Digit3\": \"3\",\n    \"Digit4\": \"4\",\n    \"Digit5\": \"5\",\n    \"Digit6\": \"6\",\n    \"Digit7\": \"7\",\n    \"Digit8\": \"8\",\n    \"Digit9\": \"9\",\n    \"Digit0\": \"0\",\n    \"Minus\": \"-\",\n    \"Equal\": \"=\",\n    \"Backspace\": \"⌫\",\n    \"Tab\": \"⇥\",\n    \"KeyQ\": \"й\",\n    \"KeyW\": \"ц\",\n    \"KeyE\": \"у\",\n    \"KeyR\": \"к\",\n    \"КeуT\": \"е\",\n    \"KeyY\": \"н\",\n    \"KeyU\": \"г\",\n    \"KeyI\": \"ш\",\n    \"KeyO\": \"щ\",\n    \"KeyP\": \"з\",\n    \"BracketLeft\": \"х\",\n    \"BracketRight\": \"ъ\",\n    \"Backslash\": \"\\\\\",\n    \"CapsLock\": \"⇪\",\n    \"KeyA\": \"ф\",\n    \"KeyS\": \"ы\",\n    \"KeyD\": \"в\",\n    \"KeyF\": \"а\",\n    \"КeуG\": \"п\",\n    \"KeyH\": \"р\",\n    \"KeyJ\": \"о\",\n    \"KeyK\": \"л\",\n    \"KeyL\": \"д\",\n    \"Semicolon\": \"ж\",\n    \"Quote\": \"э\",\n    \"Enter\": \"\\n\",\n    \"ShiftLeft\": \"⇧\",\n    \"KeyZ\": \"я\",\n    \"KeyX\": \"ч\",\n    \"KeyC\": \"с\",\n    \"KeyV\": \"м\",\n    \"КeуB\": \"и\",\n    \"KeyN\": \"т\",\n    \"KeyM\": \"ь\",\n    \"Comma\": \"б\",\n    \"Period\": \"ю\",\n    \"Slash\": \"/\",\n    \"ArrowUp\": \"\",\n    \"ShiftRight\": \"⇧\",\n    \"ControlLeft\": \"^\",\n    \"AltLeft\": \"\",\n    \"Space\": \" \",\n    \"AltRight\": \"\",\n    \"ControlRight\": \"^\",\n    \"ArrowLeft\": \"\",\n    \"ArrowDown\": \"\",\n    \"ArrowRight\": \"\",\n    \"Lang\": \"fn lang\",\n};\nvar shift = {\n    \"Backquote\": \"Ё\",\n    \"Digit1\": \"!\",\n    \"Digit2\": '\"',\n    \"Digit3\": \"№\",\n    \"Digit4\": \"%\",\n    \"Digit5\": \":\",\n    \"Digit6\": \",\",\n    \"Digit7\": \".\",\n    \"Digit8\": \";\",\n    \"Digit9\": \"(\",\n    \"Digit0\": \")\",\n    \"Minus\": \"_\",\n    \"Equal\": \"+\",\n    \"Backspace\": \"⌫\",\n    \"Tab\": \"⇥\",\n    \"KeyQ\": \"Й\",\n    \"KeyW\": \"Ц\",\n    \"KeyE\": \"У\",\n    \"KeyR\": \"К\",\n    \"КeуT\": \"Е\",\n    \"KeyY\": \"Н\",\n    \"KeyU\": \"Г\",\n    \"KeyI\": \"Ш\",\n    \"KeyO\": \"Щ\",\n    \"KeyP\": \"З\",\n    \"BracketLeft\": \"Х\",\n    \"BracketRight\": \"Ъ\",\n    \"Backslash\": \"\\\\\",\n    \"CapsLock\": \"⇪\",\n    \"KeyA\": \"Ф\",\n    \"KeyS\": \"Ы\",\n    \"KeyD\": \"В\",\n    \"KeyF\": \"А\",\n    \"КeуG\": \"П\",\n    \"KeyH\": \"Р\",\n    \"KeyJ\": \"О\",\n    \"KeyK\": \"Л\",\n    \"KeyL\": \"Д\",\n    \"Semicolon\": \"Ж\",\n    \"Quote\": \"Э\",\n    \"Enter\": \"\\n\",\n    \"ShiftLeft\": \"⇧\",\n    \"KeyZ\": \"Я\",\n    \"KeyX\": \"Ч\",\n    \"KeyC\": \"С\",\n    \"KeyV\": \"М\",\n    \"КeуB\": \"И\",\n    \"KeyN\": \"Т\",\n    \"KeyM\": \"Ь\",\n    \"Comma\": \"Б\",\n    \"Period\": \"Ю\",\n    \"Slash\": \"?\",\n    \"ArrowUp\": \"\",\n    \"ShiftRight\": \"⇧\",\n    \"ControlLeft\": \"^\",\n    \"AltLeft\": \"\",\n    \"Space\": \" \",\n    \"AltRight\": \"\",\n    \"ControlRight\": \"^\",\n    \"ArrowLeft\": \"\",\n    \"ArrowDown\": \"\",\n    \"ArrowRight\": \"\",\n    \"Lang\": \"fn lang\",\n};\nvar caps = {\n    \"Backquote\": \"ё\",\n    \"Digit1\": \"1\",\n    \"Digit2\": \"2\",\n    \"Digit3\": \"3\",\n    \"Digit4\": \"4\",\n    \"Digit5\": \"5\",\n    \"Digit6\": \"6\",\n    \"Digit7\": \"7\",\n    \"Digit8\": \"8\",\n    \"Digit9\": \"9\",\n    \"Digit0\": \"0\",\n    \"Minus\": \"-\",\n    \"Equal\": \"=\",\n    \"Backspace\": \"⌫\",\n    \"Tab\": \"⇥\",\n    \"KeyQ\": \"Й\",\n    \"KeyW\": \"Ц\",\n    \"KeyE\": \"У\",\n    \"KeyR\": \"К\",\n    \"КeуT\": \"Е\",\n    \"KeyY\": \"Н\",\n    \"KeyU\": \"Г\",\n    \"KeyI\": \"Ш\",\n    \"KeyO\": \"Щ\",\n    \"KeyP\": \"З\",\n    \"BracketLeft\": \"Х\",\n    \"BracketRight\": \"Ъ\",\n    \"Backslash\": \"\\\\\",\n    \"CapsLock\": \"⇪\",\n    \"KeyA\": \"Ф\",\n    \"KeyS\": \"Ы\",\n    \"KeyD\": \"В\",\n    \"KeyF\": \"А\",\n    \"КeуG\": \"П\",\n    \"KeyH\": \"Р\",\n    \"KeyJ\": \"О\",\n    \"KeyK\": \"Л\",\n    \"KeyL\": \"Д\",\n    \"Semicolon\": \"Ж\",\n    \"Quote\": \"Э\",\n    \"Enter\": \"\\n\",\n    \"ShiftLeft\": \"⇧\",\n    \"KeyZ\": \"Я\",\n    \"KeyX\": \"Ч\",\n    \"KeyC\": \"С\",\n    \"KeyV\": \"М\",\n    \"КeуB\": \"И\",\n    \"KeyN\": \"Т\",\n    \"KeyM\": \"Ь\",\n    \"Comma\": \"Б\",\n    \"Period\": \"Ю\",\n    \"Slash\": \"/\",\n    \"ArrowUp\": \"\",\n    \"ShiftRight\": \"⇧\",\n    \"ControlLeft\": \"^\",\n    \"AltLeft\": \"\",\n    \"Space\": \" \",\n    \"AltRight\": \"\",\n    \"ControlRight\": \"^\",\n    \"ArrowLeft\": \"\",\n    \"ArrowDown\": \"\",\n    \"ArrowRight\": \"\",\n    \"Lang\": \"fn lang\",\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ base: base, shift: shift, caps: caps });\n\n\n//# sourceURL=webpack://my-webpack-project/./src/languages/rus.ts?");

/***/ }),

/***/ "./src/output.ts":
/*!***********************!*\
  !*** ./src/output.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Output\": () => (/* binding */ Output)\n/* harmony export */ });\n/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/control */ \"./src/common/control.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Output = /** @class */ (function (_super) {\n    __extends(Output, _super);\n    function Output(parentNode) {\n        return _super.call(this, parentNode, 'div', 'keyboard_output') || this;\n    }\n    Object.defineProperty(Output.prototype, \"content\", {\n        set: function (value) {\n            this.node.textContent = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Output;\n}(_common_control__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/output.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;