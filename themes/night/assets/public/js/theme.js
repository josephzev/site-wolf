(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/public/js/theme"],{

/***/ "./assets/resources/js/bootstrap.js":
/*!******************************************!*\
  !*** ./assets/resources/js/bootstrap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ---
// Initialize jQuery globally
window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // Required for OctoberCMS AJAX framework
// Initialize UIkit globally

window.UIkit = __webpack_require__(/*! uikit */ "./node_modules/uikit/dist/js/uikit.js");
window.UIkit.use(__webpack_require__(/*! uikit/dist/js/uikit-icons */ "./node_modules/uikit/dist/js/uikit-icons.js")); // Adds support for UIkit iconography

/***/ }),

/***/ "./assets/resources/js/theme.js":
/*!**************************************!*\
  !*** ./assets/resources/js/theme.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ---
__webpack_require__(/*! ./bootstrap */ "./assets/resources/js/bootstrap.js");
/* YOUR CODE HERE */


UIkit.util.on('#sec2', 'inview', function () {
  UIkit.scroll('#section2').scrollTo('#section2');
  document.getElementById("body").style.overflowY = "hidden";
});
UIkit.util.on('#sec1', 'inview', function () {
  UIkit.scroll('#section1').scrollTo('#section1');
});
UIkit.util.on('#sec3', 'inview', function () {
  UIkit.scroll('#section3').scrollTo('#section3');
});
UIkit.util.on('#secfinal', 'inview', function () {
  UIkit.scroll('#sectionfinal').scrollTo('#sectionfinal');
  document.getElementById("nav1").style.backgroundColor = "#110011";
  document.getElementById("nav2").style.backgroundColor = "#110011";
  document.getElementById("svg").style.display = "block";
});
/*toggle-nav*/

UIkit.util.on('#secfinal', 'outview', function () {
  document.getElementById("nav1").style.backgroundColor = "transparent";
  document.getElementById("nav2").style.backgroundColor = "transparent";
  document.getElementById("svg").style.display = "none";
});
/*first sec*/

UIkit.util.on('#section2', 'scrolled', function () {
  UIkit.scrollspy('#sec1', {
    repeat: true
  });
  document.getElementById("body").style.overflowY = "visible";
});

/***/ }),

/***/ "./assets/resources/scss/theme.scss":
/*!******************************************!*\
  !*** ./assets/resources/scss/theme.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi ./assets/resources/js/theme.js ./assets/resources/scss/theme.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /srv/october-projects/site-wolf/themes/night/assets/resources/js/theme.js */"./assets/resources/js/theme.js");
module.exports = __webpack_require__(/*! /srv/october-projects/site-wolf/themes/night/assets/resources/scss/theme.scss */"./assets/resources/scss/theme.scss");


/***/ })

},[[0,"/public/js/manifest","/public/js/vendor"]]]);