"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_matrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/matrix.js */ \"./components/matrix.js\");\n/* harmony import */ var _utils_getWeb3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getWeb3 */ \"./utils/getWeb3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Index() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), selection = ref[0], setSelection = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (selection) {\n            console.log(selection);\n            web3Getter();\n        }\n    }, [\n        selection\n    ]);\n    var web3Getter = function() {\n        (0,_utils_getWeb3__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().then(function(results) {\n            console.log(results);\n        }).catch(function() {\n            console.log('Error finding web3.');\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    __source: {\n                        fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"preload\",\n                        href: \"/fonts/orange_kid.ttf\",\n                        as: \"font\",\n                        crossOrigin: \"\",\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: 'matrix',\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Welcome to Scion.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"You know what you must do.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: 'row',\n                                __source: {\n                                    fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"button\",\n                                        onClick: function() {\n                                            return setSelection(true);\n                                        },\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: \" Red pill \"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 13\n                                        },\n                                        __self: this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"button\",\n                                        onClick: function() {\n                                            return setSelection(false);\n                                        },\n                                        __source: {\n                                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: \" Blue pill \"\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_matrix_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        selection: true,\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/community-projects/fleek-deployment/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Index, \"J2ZUa9KThBV6uW+KTtJO6m6y82E=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0E7QUFDc0I7QUFDSjtBQUNSOztBQUV2QixRQUFRLENBQUNPLEtBQUssR0FBRyxDQUFDOztJQUMvQixHQUFLLENBQTZCSixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q0ssU0FBUyxHQUFrQkwsR0FBYyxLQUE5Qk0sWUFBWSxHQUFJTixHQUFjO0lBR2hEQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztJQUVqQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUpBLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFSSxTQUFTLEVBQUUsQ0FBQztZQUNkRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsU0FBUztZQUNyQkksVUFBVTtRQUNaLENBQUM7SUFDSCxDQUFDLEVBQUMsQ0FBQ0o7UUFBQUEsU0FBUztJQUFBLENBQUM7SUFFYixHQUFLLENBQUNJLFVBQVUsR0FBRyxRQUNyQixHQUQyQixDQUFDO1FBQ3hCTiwwREFBTyxHQUFHTyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsT0FBTyxFQUFJLENBQUM7WUFDekJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxPQUFPO1FBQ3JCLENBQUMsRUFBRUMsS0FBSyxDQUFDLFFBQ2IsR0FEbUIsQ0FBQztZQUNkTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFxQjtRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU07O2lGQUdESyxDQUFHOzs7Ozs7OytGQUNEaEIsa0RBQUk7Ozs7Ozs7bUdBQ0ZpQixDQUFJO3dCQUNIQyxHQUFHLEVBQUMsQ0FBUzt3QkFDYkMsSUFBSSxFQUFDLENBQXVCO3dCQUM1QkMsRUFBRSxFQUFDLENBQU07d0JBQ1RDLFdBQVcsRUFBQyxDQUFFOzs7Ozs7Ozs7Ozs7MEZBTWpCTCxDQUFHO3dCQUNKTSxTQUFTLEVBQUUsQ0FBUTs7Ozs7Ozs7aUdBQ2hCQyxDQUFFOzs7Ozs7OzBDQUFDLENBQWlCOztpR0FDcEJDLENBQUM7Ozs7Ozs7MENBQUMsQ0FBMEI7O2tHQUM1QlIsQ0FBRztnQ0FBQ00sU0FBUyxFQUFFLENBQUs7Ozs7Ozs7O3lHQUNoQk4sQ0FBRzt3Q0FDRk0sU0FBUyxFQUFDLENBQVE7d0NBQ2xCRyxPQUFPLEVBQUUsUUFBUTs0Q0FBRmhCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLElBQUk7Ozs7Ozs7O2tEQUNqQyxDQUFVOzt5R0FDWmlCLENBQUU7Ozs7Ozs7O3lHQUVBVixDQUFHO3dDQUFDTSxTQUFTLEVBQUMsQ0FBUTt3Q0FBQ0csT0FBTyxFQUFFLFFBQVE7NENBQUZoQixNQUFNLENBQU5BLFlBQVksQ0FBQyxLQUFLOzs7Ozs7OztrREFBRyxDQUFXOzs7Ozs7eUZBRzVFSiw2REFBUTt3QkFBQ0csU0FBUyxFQUFFLElBQUk7Ozs7Ozs7Ozs7OztBQUlqQyxDQUFDO0dBdkR1QkQsS0FBSztLQUFMQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYXRyaXhCRyBmcm9tIFwiLi4vY29tcG9uZW50cy9tYXRyaXguanNcIjtcbmltcG9ydCBnZXRXZWIzIGZyb20gJy4uL3V0aWxzL2dldFdlYjMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICB9LFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgY29uc29sZS5sb2coc2VsZWN0aW9uKTtcbiAgICAgIHdlYjNHZXR0ZXIoKTtcbiAgICB9XG4gIH0sW3NlbGVjdGlvbl0pXG5cbiAgY29uc3Qgd2ViM0dldHRlciA9ICgpID0+IHtcbiAgICBnZXRXZWIzKCkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZpbmRpbmcgd2ViMy4nKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcblxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPVwiL2ZvbnRzL29yYW5nZV9raWQudHRmXCJcbiAgICAgICAgICAgIGFzPVwiZm9udFwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cIlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzTmFtZT17J21hdHJpeCd9PlxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIFNjaW9uLjwvaDE+XG4gICAgICAgICAgPHA+WW91IGtub3cgd2hhdCB5b3UgbXVzdCBkby48L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cnfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGlvbih0cnVlKX1cbiAgICAgICAgICAgICAgPiBSZWQgcGlsbCA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGlvbihmYWxzZSl9PiBCbHVlIHBpbGwgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWF0cml4Qkcgc2VsZWN0aW9uPXt0cnVlfSAvPlxuICAgICAgPC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWF0cml4QkciLCJnZXRXZWIzIiwiSW5kZXgiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwid2ViM0dldHRlciIsInRoZW4iLCJyZXN1bHRzIiwiY2F0Y2giLCJkaXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsImFzIiwiY3Jvc3NPcmlnaW4iLCJjbGFzc05hbWUiLCJoMSIsInAiLCJvbkNsaWNrIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});