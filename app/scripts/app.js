import mainObj from './main.js';
//
// var $sections = '#intro, #approach, #workWithUs, #bringAnIdea, #weHaveIdeas';
var $sections = '.scroll-in',
    revealOptions = {
      delay    : 75,
      distance : '40px',
      scale: 0,
      easing   : 'ease-in-out'
    };

$("#introHeadline").typed({
    strings: ["Small Team,<br>Big Solutions."],
    contentType: 'html', // or 'text'
    showCursor: false
});

window.sr = ScrollReveal().reveal($sections, revealOptions);

$(function() {
  console.log(`Hello ${mainObj.owner}`);
  console.log(mainObj.isTouchDevice() ? 'Touch Device': 'Desktop');

  $('#copyright').append(mainObj.getCopyright());
});
