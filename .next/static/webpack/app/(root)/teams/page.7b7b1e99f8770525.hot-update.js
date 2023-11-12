"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/teams/page",{

/***/ "(app-pages-browser)/./components/pagination/LoadMoreTeams.tsx":
/*!*************************************************!*\
  !*** ./components/pagination/LoadMoreTeams.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoadMoreTeams; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_actions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/actions/actions */ \"(app-pages-browser)/./lib/actions/actions.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var _cards_TeamCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/TeamCard */ \"(app-pages-browser)/./components/cards/TeamCard.tsx\");\n/* harmony import */ var _ui_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/spinner */ \"(app-pages-browser)/./components/ui/spinner.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LoadMoreTeams(param) {\n    let { search, initialTeams, initialCaptains } = param;\n    _s();\n    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(1);\n    const [teams, setTeams] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(initialTeams);\n    const [captains, setCaptains] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(initialCaptains);\n    const [isTeams, setIsTeams] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    const loadMoreTeams = async ()=>{\n        var _newTeams, _newTeams1;\n        await delay(1000);\n        const nextPage = page + 1;\n        const newTeams = await (0,_lib_actions_actions__WEBPACK_IMPORTED_MODULE_1__.getSearchTeams)({\n            page: nextPage,\n            search\n        });\n        const newCaptains = await (0,_lib_actions_actions__WEBPACK_IMPORTED_MODULE_1__.getCaptains)(newTeams);\n        if ((_newTeams = newTeams) === null || _newTeams === void 0 ? void 0 : _newTeams.length) {\n            setPage(nextPage);\n            setTeams((prevTeams)=>[\n                    ...prevTeams,\n                    ...newTeams\n                ]);\n            setCaptains((prevCaptains)=>[\n                    ...prevCaptains,\n                    ...newCaptains\n                ]);\n        }\n        if (((_newTeams1 = newTeams) === null || _newTeams1 === void 0 ? void 0 : _newTeams1.length) < 12) {\n            setIsTeams(false);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        if (inView) {\n            loadMoreTeams();\n        }\n    }, [\n        inView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"teams_list-wrapper\",\n                children: teams.map((team, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_TeamCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        team: team,\n                        captainName: captains[index]\n                    }, team.id, false, {\n                        fileName: \"/Users/dmitriy/Desktop/besports/components/pagination/LoadMoreTeams.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dmitriy/Desktop/besports/components/pagination/LoadMoreTeams.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            isTeams && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center m-4\",\n                ref: ref,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_spinner__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n                    className: \"h-12 w-12\"\n                }, void 0, false, {\n                    fileName: \"/Users/dmitriy/Desktop/besports/components/pagination/LoadMoreTeams.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dmitriy/Desktop/besports/components/pagination/LoadMoreTeams.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoadMoreTeams, \"QMmwTBbYJ+yOT3cFxHzqti6bsdE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n_c = LoadMoreTeams;\nvar _c;\n$RefreshReg$(_c, \"LoadMoreTeams\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9Mb2FkTW9yZVRlYW1zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9FO0FBRTFDO0FBQzhCO0FBQ2Y7QUFDRDtBQUV6QixTQUFTTSxjQUFjLEtBUXJDO1FBUnFDLEVBQ3BDQyxNQUFNLEVBQ05DLFlBQVksRUFDWkMsZUFBZSxFQUtoQixHQVJxQzs7SUFTcEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULHFEQUFjLENBQUM7SUFDdkMsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLHFEQUFjLENBQWNNO0lBQ3RELE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHZCxxREFBYyxDQUFLTztJQUNuRCxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR2hCLHFEQUFjLENBQUM7SUFFN0MsTUFBTSxFQUFFaUIsR0FBRyxFQUFFQyxNQUFNLEVBQUUsR0FBR2pCLHNFQUFTQTtJQUVqQyxNQUFNa0IsUUFBUSxDQUFDQyxLQUNiLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBU0Y7SUFFL0MsTUFBTUksZ0JBQWdCO1lBTWhCQyxXQU1BQTtRQVhKLE1BQU1OLE1BQU07UUFDWixNQUFNTyxXQUFXbEIsT0FBTztRQUN4QixNQUFNaUIsV0FBVyxNQUFNMUIsb0VBQWNBLENBQUM7WUFBRVMsTUFBTWtCO1lBQVVyQjtRQUFPO1FBQy9ELE1BQU1zQixjQUFjLE1BQU03QixpRUFBV0EsQ0FBQzJCO1FBRXRDLEtBQUlBLFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUcsTUFBTSxFQUFFO1lBQ3BCbkIsUUFBUWlCO1lBQ1JkLFNBQVMsQ0FBQ2lCLFlBQTJCO3VCQUFJQTt1QkFBY0o7aUJBQVM7WUFDaEVYLFlBQVksQ0FBQ2dCLGVBQXFCO3VCQUFJQTt1QkFBaUJIO2lCQUFZO1FBQ3JFO1FBRUEsSUFBSUYsRUFBQUEsYUFBQUEsc0JBQUFBLGlDQUFBQSxXQUFVRyxNQUFNLElBQUcsSUFBSTtZQUN6QlosV0FBVztRQUNiO0lBQ0Y7SUFFQWhCLHNEQUFlLENBQUM7UUFDZCxJQUFJa0IsUUFBUTtZQUNWTTtRQUNGO0lBQ0YsR0FBRztRQUFDTjtLQUFPO0lBRVgscUJBQ0U7OzBCQUNFLDhEQUFDYztnQkFBSUMsV0FBVTswQkFDWnRCLE1BQU11QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDbEMsdURBQVFBO3dCQUFlaUMsTUFBTUE7d0JBQU1FLGFBQWF4QixRQUFRLENBQUN1QixNQUFNO3VCQUFqREQsS0FBS0csRUFBRTs7Ozs7Ozs7OztZQUl6QnZCLHlCQUNDLDhEQUFDaUI7Z0JBQUlDLFdBQVU7Z0JBQXVDaEIsS0FBS0E7MEJBQ3pELDRFQUFDZCxnREFBT0E7b0JBQUM4QixXQUFVOzs7Ozs7Ozs7Ozs7O0FBSzdCO0dBekR3QjdCOztRQWNFSCxrRUFBU0E7OztLQWRYRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2luYXRpb24vTG9hZE1vcmVUZWFtcy50c3g/NDcyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgZ2V0Q2FwdGFpbnMsIGdldFNlYXJjaFRlYW1zIH0gZnJvbSBcIkAvbGliL2FjdGlvbnMvYWN0aW9uc1wiO1xuaW1wb3J0IHsgVGVhbVByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBUZWFtQ2FyZCBmcm9tIFwiLi4vY2FyZHMvVGVhbUNhcmRcIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiLi4vdWkvc3Bpbm5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkTW9yZVRlYW1zKHtcbiAgc2VhcmNoLFxuICBpbml0aWFsVGVhbXMsXG4gIGluaXRpYWxDYXB0YWlucyxcbn06IHtcbiAgc2VhcmNoOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGluaXRpYWxUZWFtczogVGVhbVByb3BzW107XG4gIGluaXRpYWxDYXB0YWluczogW107XG59KSB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xuICBjb25zdCBbdGVhbXMsIHNldFRlYW1zXSA9IFJlYWN0LnVzZVN0YXRlPFRlYW1Qcm9wc1tdPihpbml0aWFsVGVhbXMpO1xuICBjb25zdCBbY2FwdGFpbnMsIHNldENhcHRhaW5zXSA9IFJlYWN0LnVzZVN0YXRlPFtdPihpbml0aWFsQ2FwdGFpbnMpO1xuICBjb25zdCBbaXNUZWFtcywgc2V0SXNUZWFtc10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoKTtcblxuICBjb25zdCBkZWxheSA9IChtczogbnVtYmVyKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbiAgY29uc3QgbG9hZE1vcmVUZWFtcyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkZWxheSgxMDAwKTtcbiAgICBjb25zdCBuZXh0UGFnZSA9IHBhZ2UgKyAxO1xuICAgIGNvbnN0IG5ld1RlYW1zID0gYXdhaXQgZ2V0U2VhcmNoVGVhbXMoeyBwYWdlOiBuZXh0UGFnZSwgc2VhcmNoIH0pO1xuICAgIGNvbnN0IG5ld0NhcHRhaW5zID0gYXdhaXQgZ2V0Q2FwdGFpbnMobmV3VGVhbXMpO1xuXG4gICAgaWYgKG5ld1RlYW1zPy5sZW5ndGgpIHtcbiAgICAgIHNldFBhZ2UobmV4dFBhZ2UpO1xuICAgICAgc2V0VGVhbXMoKHByZXZUZWFtczogVGVhbVByb3BzW10pID0+IFsuLi5wcmV2VGVhbXMsIC4uLm5ld1RlYW1zXSk7XG4gICAgICBzZXRDYXB0YWlucygocHJldkNhcHRhaW5zOiBbXSkgPT4gWy4uLnByZXZDYXB0YWlucywgLi4ubmV3Q2FwdGFpbnNdKTtcbiAgICB9XG5cbiAgICBpZiAobmV3VGVhbXM/Lmxlbmd0aCA8IDEyKSB7XG4gICAgICBzZXRJc1RlYW1zKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5WaWV3KSB7XG4gICAgICBsb2FkTW9yZVRlYW1zKCk7XG4gICAgfVxuICB9LCBbaW5WaWV3XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtc19saXN0LXdyYXBwZXJcIj5cbiAgICAgICAge3RlYW1zLm1hcCgodGVhbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8VGVhbUNhcmQga2V5PXt0ZWFtLmlkfSB0ZWFtPXt0ZWFtfSBjYXB0YWluTmFtZT17Y2FwdGFpbnNbaW5kZXhdfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7aXNUZWFtcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbS00XCIgcmVmPXtyZWZ9PlxuICAgICAgICAgIDxTcGlubmVyIGNsYXNzTmFtZT1cImgtMTIgdy0xMlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRDYXB0YWlucyIsImdldFNlYXJjaFRlYW1zIiwiUmVhY3QiLCJ1c2VJblZpZXciLCJUZWFtQ2FyZCIsIlNwaW5uZXIiLCJMb2FkTW9yZVRlYW1zIiwic2VhcmNoIiwiaW5pdGlhbFRlYW1zIiwiaW5pdGlhbENhcHRhaW5zIiwicGFnZSIsInNldFBhZ2UiLCJ1c2VTdGF0ZSIsInRlYW1zIiwic2V0VGVhbXMiLCJjYXB0YWlucyIsInNldENhcHRhaW5zIiwiaXNUZWFtcyIsInNldElzVGVhbXMiLCJyZWYiLCJpblZpZXciLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwibG9hZE1vcmVUZWFtcyIsIm5ld1RlYW1zIiwibmV4dFBhZ2UiLCJuZXdDYXB0YWlucyIsImxlbmd0aCIsInByZXZUZWFtcyIsInByZXZDYXB0YWlucyIsInVzZUVmZmVjdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInRlYW0iLCJpbmRleCIsImNhcHRhaW5OYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/pagination/LoadMoreTeams.tsx\n"));

/***/ })

});