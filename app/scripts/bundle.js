(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// var $sections = '#intro, #approach, #workWithUs, #bringAnIdea, #weHaveIdeas';
var $sections = '.scroll-in',
    revealOptions = {
  delay: 75,
  distance: '40px',
  scale: 0,
  easing: 'ease-in-out'
};

$("#introHeadline").typed({
  strings: ["Small Team,<br>Big Solutions."],
  contentType: 'html', // or 'text'
  showCursor: false
});

window.sr = ScrollReveal().reveal($sections, revealOptions);

$(function () {
  console.log('Hello ' + _main2.default.owner);
  console.log(_main2.default.isTouchDevice() ? 'Touch Device' : 'Desktop');

  $('#copyright').append(_main2.default.getCopyright());
});

},{"./main.js":2}],2:[function(require,module,exports){
'use strict';

var mainObj = {
  owner: 'TwentyTwo',
  githubUrl: 'https://github.com/drewbot',
  currentYear: new Date().getFullYear(),
  isTouchDevice: function isTouchDevice() {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  },
  getCopyright: function getCopyright() {
    return '&copy; ' + this.currentYear + ' ' + this.owner + '. All Rights Reserved.';
  },
  getOwnerContent: function getOwnerContent() {
    return 'Made by <a href="' + this.githubUrl + '">' + this.owner + '</a>';
  }
};

module.exports = mainObj;

},{}]},{},[1]);

//# sourceMappingURL=../../maps/bundle.js.map
