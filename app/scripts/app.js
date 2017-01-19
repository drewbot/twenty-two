import mainObj from './main.js';
//
// var $sections = '#intro, #approach, #workWithUs, #bringAnIdea, #weHaveIdeas';
var $sections = '.scroll-in',
    revealOptions = {
      delay    : 100,
      distance : '40px',
      scale: 0,
      easing   : 'ease-in-out'
    };

window.sr = ScrollReveal().reveal($sections, revealOptions);

$(function() {
  console.log(`Hello ${mainObj.owner}`);
  console.log(mainObj.isTouchDevice() ? 'Touch Device': 'Desktop');

  $('#copyright').append(mainObj.getCopyright());
});
