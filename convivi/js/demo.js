/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles-hero'), {
    dotColor: '#65FFF2',
    lineColor: '#ffffff'
  });
  particleground(document.getElementById('particles-newsletter'), {
        dotColor: '#65FFF2',
        lineColor: '#ffffff'
  });
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/