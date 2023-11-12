"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/tournaments/page",{

/***/ "(app-pages-browser)/./lib/actions/actions.ts":
/*!********************************!*\
  !*** ./lib/actions/actions.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCaptains: function() { return /* binding */ getCaptains; },
/* harmony export */   getCurrentUser: function() { return /* binding */ getCurrentUser; },
/* harmony export */   getCurrentUserToken: function() { return /* binding */ getCurrentUserToken; },
/* harmony export */   getNewsData: function() { return /* binding */ getNewsData; },
/* harmony export */   getNewsList: function() { return /* binding */ getNewsList; },
/* harmony export */   getSearchTeams: function() { return /* binding */ getSearchTeams; },
/* harmony export */   getSearchTournaments: function() { return /* binding */ getSearchTournaments; },
/* harmony export */   getTeamData: function() { return /* binding */ getTeamData; },
/* harmony export */   getTeamsList: function() { return /* binding */ getTeamsList; },
/* harmony export */   getTournamentData: function() { return /* binding */ getTournamentData; },
/* harmony export */   getTournamentsList: function() { return /* binding */ getTournamentsList; },
/* harmony export */   getUserDataById: function() { return /* binding */ getUserDataById; },
/* harmony export */   getUserDataByUsername: function() { return /* binding */ getUserDataByUsername; },
/* harmony export */   isSignedIn: function() { return /* binding */ isSignedIn; },
/* harmony export */   signIn: function() { return /* binding */ signIn; },
/* harmony export */   signOut: function() { return /* binding */ signOut; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-proxy */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js");
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ signIn,signOut,isSignedIn,getCurrentUser,getCurrentUserToken,getUserDataById,getUserDataByUsername,getTeamData,getTeamsList,getSearchTeams,getCaptains,getTournamentData,getTournamentsList,getSearchTournaments,getNewsData,getNewsList */ 

var signIn = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("8bfda4ff19f9ba74ee72e727bb9e55e8909efeaa");
var signOut = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("fd2a8cf8c61b8eb37e720f8edb81d5229219770d");
var isSignedIn = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("f53360688ffb2f58346a7429db137989c3055a8e");
var getCurrentUser = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("ce92921a3c595ee084920d9efa83da2e93b6898a");
var getCurrentUserToken = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("1786c64505f55c75234e6d1fa6488fb679c4ad2f");
var getUserDataById = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("c47722c7bbc877aff3ea4515e4d2fc545875db72");
var getUserDataByUsername = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("c7f85600c954ed138323a3511f6130befdc6690a");
var getTeamData = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("e7d847d401a4918590b40185dbab74fadf0a98c1");
var getTeamsList = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("48bbe59510684efd743ca4c1a80da5ae61857dea");
var getSearchTeams = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("c19c1695ef3d779a394220d57e61a24b9ceb229e");
var getCaptains = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("6de461011230917a746cd3b86b72553a026aa78e");
var getTournamentData = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("2062bb7b05214732a0cfa7cdb92b19158c89a09f");
var getTournamentsList = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("84678cec4bf1f666a901a689fd753ddc94e8f927");
var getSearchTournaments = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("eb92f5c192c6f3f082db20d4fccae0cf8638b45c");
var getNewsData = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("6129773e60646a290b728770905686bc22c24ac6");
var getNewsList = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"])("6f90e00c71dea2c010b3bfd41f51e66ae162f1a3");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});