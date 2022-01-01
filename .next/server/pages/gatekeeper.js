"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/gatekeeper";
exports.ids = ["pages/gatekeeper"];
exports.modules = {

/***/ "./pages/gatekeeper.js":
/*!*****************************!*\
  !*** ./pages/gatekeeper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GateKeeper)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction GateKeeper() {\n    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: ready , 1: setReady  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const submitAddress = ()=>{\n        console.log(address);\n        setReady(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (ready) {\n            // Navigate to {root_url}/access-pass-generator with the address as a query parameter\n            window.location.href = `${window.location.origin}/access-pass-generator?address=${address}`;\n        }\n    }, [\n        ready\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: 'matrix',\n        __source: {\n            fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/pages/gatekeeper.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/pages/gatekeeper.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \" GateKeeper \"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"text\",\n                onChange: (e)=>setAddress(e.target.value)\n                ,\n                placeholder: \"Enter metaverse address\",\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/pages/gatekeeper.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"button\",\n                onClick: ()=>submitAddress()\n                ,\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/pages/gatekeeper.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Teleport\"\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYXRla2VlcGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUVuQyxRQUFRLENBQUNHLFVBQVUsR0FBRyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsT0FBTyxNQUFFQyxVQUFVLE1BQUlKLCtDQUFRLENBQUMsS0FBSztJQUM1QyxLQUFLLE1BQUVLLEtBQUssTUFBRUMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLEtBQUs7SUFFeEMsS0FBSyxDQUFDTyxhQUFhLE9BQVMsQ0FBQztRQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLE9BQU87UUFDbkJHLFFBQVEsQ0FBQyxJQUFJO0lBQ2YsQ0FBQztJQUVETCxnREFBUyxLQUFPLENBQUM7UUFDZixFQUFFLEVBQUVJLEtBQUssRUFBRSxDQUFDO1lBQ1YsRUFBcUY7WUFDckZLLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLE1BQU1GLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRSxNQUFNLENBQUMsK0JBQStCLEVBQUVWLE9BQU87UUFDM0YsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDRTtRQUFBQSxLQUFLO0lBQUEsQ0FBQztJQUNSLE1BQU0sdUVBQ0hTLENBQUc7UUFDQUMsU0FBUyxFQUFFLENBQVE7Ozs7Ozs7O2lGQUNoQkMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFZOztpRkFDZkMsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Z0JBQUNDLFFBQVEsR0FBR0MsQ0FBQyxHQUFLaEIsVUFBVSxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7O2dCQUFHQyxXQUFXLEVBQUMsQ0FBeUI7Ozs7Ozs7O2lGQUNwR1QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVE7Z0JBQUNTLE9BQU8sTUFBUWpCLGFBQWE7Ozs7Ozs7OzBCQUFJLENBQVE7Ozs7QUFHMUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsZWVrLWRlcGxveW1lbnQvLi9wYWdlcy9nYXRla2VlcGVyLmpzP2IwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2F0ZUtlZXBlcigpIHtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IHN1Ym1pdEFkZHJlc3MgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWRkcmVzcylcbiAgICBzZXRSZWFkeSh0cnVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWFkeSkge1xuICAgICAgLy8gTmF2aWdhdGUgdG8ge3Jvb3RfdXJsfS9hY2Nlc3MtcGFzcy1nZW5lcmF0b3Igd2l0aCB0aGUgYWRkcmVzcyBhcyBhIHF1ZXJ5IHBhcmFtZXRlclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hY2Nlc3MtcGFzcy1nZW5lcmF0b3I/YWRkcmVzcz0ke2FkZHJlc3N9YDtcbiAgICB9XG4gIH0sIFtyZWFkeV0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXsnbWF0cml4J30+XG4gICAgICAgICAgICA8aDE+IEdhdGVLZWVwZXIgPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiRW50ZXIgbWV0YXZlcnNlIGFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzdWJtaXRBZGRyZXNzKCl9PlRlbGVwb3J0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdhdGVLZWVwZXIiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInJlYWR5Iiwic2V0UmVhZHkiLCJzdWJtaXRBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm9yaWdpbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/gatekeeper.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/gatekeeper.js"));
module.exports = __webpack_exports__;

})();