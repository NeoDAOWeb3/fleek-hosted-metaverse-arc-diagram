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

/***/ "./utils/getWeb3.js":
/*!**************************!*\
  !*** ./utils/getWeb3.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar getWeb3 = function() {\n    return new Promise(function(resolve) {\n        window.addEventListener('load', function() {\n            var currentWeb3;\n            if (window.ethereum) {\n                console.log('ethereum');\n                currentWeb3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);\n                try {\n                    // Request account access if needed\n                    window.ethereum.enable();\n                    // Acccounts now exposed\n                    resolve(currentWeb3);\n                } catch (error) {\n                    // User denied account access...\n                    alert('Please allow access for the app to work');\n                }\n            } else if (window.web3) {\n                console.log('Using web3 detected from external source.');\n                window.web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(web3.currentProvider);\n                // Acccounts always exposed\n                resolve(currentWeb3);\n            } else {\n                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');\n            }\n        });\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getWeb3);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZXRXZWIzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBdUI7QUFFdkIsR0FBSyxDQUFDQyxPQUFPLEdBQUcsUUFBUTtJQUFGLE1BQU0sQ0FBTixHQUFHLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO1FBQzlDQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLENBQU0sT0FBRSxRQUNsQyxHQUR3QyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQ0MsV0FBVztZQUVmLEVBQUUsRUFBRUYsTUFBTSxDQUFDRyxRQUFRLEVBQUUsQ0FBQztnQkFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVU7Z0JBQ3RCSCxXQUFXLEdBQUcsR0FBRyxDQUFDTiw2Q0FBSSxDQUFDSSxNQUFNLENBQUNHLFFBQVE7Z0JBQ3RDLEdBQUcsQ0FBQyxDQUFDO29CQUNILEVBQW1DO29CQUNuQ0gsTUFBTSxDQUFDRyxRQUFRLENBQUNHLE1BQU07b0JBQ3RCLEVBQXdCO29CQUN4QlAsT0FBTyxDQUFDRyxXQUFXO2dCQUNyQixDQUFDLENBQUMsS0FBSyxFQUFFSyxLQUFLLEVBQUUsQ0FBQztvQkFDZixFQUFnQztvQkFDaENDLEtBQUssQ0FBQyxDQUF5QztnQkFDakQsQ0FBQztZQUNILENBQUMsTUFBTSxFQUFFLEVBQUVSLE1BQU0sQ0FBQ1MsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUEyQztnQkFDdkRMLE1BQU0sQ0FBQ1MsSUFBSSxHQUFHLEdBQUcsQ0FBQ2IsNkNBQUksQ0FBQ2EsSUFBSSxDQUFDQyxlQUFlO2dCQUMzQyxFQUEyQjtnQkFDM0JYLE9BQU8sQ0FBQ0csV0FBVztZQUNyQixDQUFDLE1BQU0sQ0FBQztnQkFDTkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBcUU7WUFDbkYsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDOztBQUdELCtEQUFlUixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ2V0V2ViMy5qcz9lYWQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5jb25zdCBnZXRXZWIzID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRXZWIzO1xuXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5sb2coJ2V0aGVyZXVtJyk7XG4gICAgICBjdXJyZW50V2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBSZXF1ZXN0IGFjY291bnQgYWNjZXNzIGlmIG5lZWRlZFxuICAgICAgICB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgICAgIC8vIEFjY2NvdW50cyBub3cgZXhwb3NlZFxuICAgICAgICByZXNvbHZlKGN1cnJlbnRXZWIzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIFVzZXIgZGVuaWVkIGFjY291bnQgYWNjZXNzLi4uXG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgYWxsb3cgYWNjZXNzIGZvciB0aGUgYXBwIHRvIHdvcmsnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNpbmcgd2ViMyBkZXRlY3RlZCBmcm9tIGV4dGVybmFsIHNvdXJjZS4nKTtcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuICAgICAgLy8gQWNjY291bnRzIGFsd2F5cyBleHBvc2VkXG4gICAgICByZXNvbHZlKGN1cnJlbnRXZWIzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayEnKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2ViMzsiXSwibmFtZXMiOlsiV2ViMyIsImdldFdlYjMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50V2ViMyIsImV0aGVyZXVtIiwiY29uc29sZSIsImxvZyIsImVuYWJsZSIsImVycm9yIiwiYWxlcnQiLCJ3ZWIzIiwiY3VycmVudFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/getWeb3.js\n");

/***/ })

});