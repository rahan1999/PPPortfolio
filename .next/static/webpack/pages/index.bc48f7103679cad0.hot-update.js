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

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/logo.png */ \"./images/logo.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nlet menu_classList = \"duration-1000 w-[20%] text-center top_menu text-xs md:text-base\";\nlet bar_position = [\n    \"ml-[0%]\",\n    \"ml-[20%]\",\n    \"ml-[40%]\",\n    \"ml-[60%]\",\n    \"ml-[80%]\"\n];\nlet bar_toggle = 0;\nfunction Menu() {\n    _s();\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        window.onscroll = function() {\n            onView();\n        };\n    });\n    const onView = ()=>{\n        const box = document.querySelectorAll(\".box\");\n        for(let i = 0; i < box.length; i++){\n            let rect = box[i].getBoundingClientRect();\n            const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);\n            if (isInViewport === true) {\n                toggle(i);\n            }\n        }\n    };\n    const toggle = (id)=>{\n        let element = document.querySelectorAll(\".top_menu\");\n        let bar = document.getElementById(\"bar\");\n        let remove = bar_position[bar_toggle];\n        let bufor = bar_position[id];\n        for(let i = 0; i < element.length; i++){\n            element[i].classList.remove(\"font-extrabold\");\n        }\n        bar.classList.remove(remove);\n        element[id].classList.add(\"font-extrabold\");\n        bar.classList.add(bufor);\n        bar_toggle = id;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        id: \"menu\",\n        className: \"bg-fixed bg-cover bg-no-repeat flex flex-row justify-around w-screen md:ml-[5%] md:w-[90%] h-10 fixed px-3 z-10 rounded-[2rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _images_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                width: 80,\n                className: \"m-1 hidden md:block\"\n            }, void 0, false, {\n                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-evenly w-full lg:w-3/4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between align-middle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-extrabold \".concat(menu_classList),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#\",\n                                    children: \"TOP\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: menu_classList,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#about\",\n                                    children: \"O MNIE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: menu_classList,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#cv\",\n                                    children: \"CV\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: menu_classList,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#portfolio\",\n                                    children: \"PORTFOLIO\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: menu_classList,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#footer\",\n                                    children: \"KONTAKT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                id: \"bufor\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"duration-1000 h-0.5 w-[20%] bg-black rounded\",\n                                id: \"bar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Menu, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FBTWYsQ0FBQztHQWhGdUJ2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnUuanM/NjAxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG5sZXQgbWVudV9jbGFzc0xpc3QgPVxuICBcImR1cmF0aW9uLTEwMDAgdy1bMjAlXSB0ZXh0LWNlbnRlciB0b3BfbWVudSB0ZXh0LXhzIG1kOnRleHQtYmFzZVwiO1xubGV0IGJhcl9wb3NpdGlvbiA9IFtcIm1sLVswJV1cIiwgXCJtbC1bMjAlXVwiLCBcIm1sLVs0MCVdXCIsIFwibWwtWzYwJV1cIiwgXCJtbC1bODAlXVwiXTtcbmxldCBiYXJfdG9nZ2xlID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvblZpZXcoKTtcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBvblZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib3hcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJlY3QgPSBib3hbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGNvbnN0IGlzSW5WaWV3cG9ydCA9XG4gICAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgICAgcmVjdC5ib3R0b20gPD1cbiAgICAgICAgICAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICAgIHJlY3QucmlnaHQgPD1cbiAgICAgICAgICAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcblxuICAgICAgaWYgKGlzSW5WaWV3cG9ydCA9PT0gdHJ1ZSkge1xuICAgICAgICB0b2dnbGUoaSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZSA9IChpZCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3BfbWVudVwiKTtcbiAgICBsZXQgYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXJcIik7XG4gICAgbGV0IHJlbW92ZSA9IGJhcl9wb3NpdGlvbltiYXJfdG9nZ2xlXTtcbiAgICBsZXQgYnVmb3IgPSBiYXJfcG9zaXRpb25baWRdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbGVtZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJmb250LWV4dHJhYm9sZFwiKTtcbiAgICB9XG5cbiAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZShyZW1vdmUpO1xuXG4gICAgZWxlbWVudFtpZF0uY2xhc3NMaXN0LmFkZChcImZvbnQtZXh0cmFib2xkXCIpO1xuXG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoYnVmb3IpO1xuXG4gICAgYmFyX3RvZ2dsZSA9IGlkO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgaWQ9XCJtZW51XCJcbiAgICAgIGNsYXNzTmFtZT1cImJnLWZpeGVkIGJnLWNvdmVyIGJnLW5vLXJlcGVhdCBmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIHctc2NyZWVuIG1kOm1sLVs1JV0gbWQ6dy1bOTAlXSBoLTEwIGZpeGVkIHB4LTMgei0xMCByb3VuZGVkLVsycmVtXVwiXG4gICAgPlxuICAgICAgPEltYWdlIHNyYz17bG9nb30gd2lkdGg9ezgwfSBjbGFzc05hbWU9XCJtLTEgaGlkZGVuIG1kOmJsb2NrXCI+PC9JbWFnZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSB3LWZ1bGwgbGc6dy0zLzQgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb250LWV4dHJhYm9sZCAke21lbnVfY2xhc3NMaXN0fWB9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+VE9QPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW51X2NsYXNzTGlzdH0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNhYm91dFwiPk8gTU5JRTwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWVudV9jbGFzc0xpc3R9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jY3ZcIj5DVjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWVudV9jbGFzc0xpc3R9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jcG9ydGZvbGlvXCI+UE9SVEZPTElPPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW51X2NsYXNzTGlzdH0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNmb290ZXJcIj5LT05UQUtUPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBpZD1cImJ1Zm9yXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVyYXRpb24tMTAwMCBoLTAuNSB3LVsyMCVdIGJnLWJsYWNrIHJvdW5kZWRcIlxuICAgICAgICAgICAgaWQ9XCJiYXJcIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJJbWFnZSIsImxvZ28iLCJtZW51X2NsYXNzTGlzdCIsImJhcl9wb3NpdGlvbiIsImJhcl90b2dnbGUiLCJNZW51IiwidXNlRWZmZWN0Iiwid2luZG93Iiwib25zY3JvbGwiLCJvblZpZXciLCJib3giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImlzSW5WaWV3cG9ydCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwidG9nZ2xlIiwiaWQiLCJlbGVtZW50IiwiYmFyIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJidWZvciIsImNsYXNzTGlzdCIsImFkZCIsIm5hdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiZGl2IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/menu.js\n"));

/***/ })

});