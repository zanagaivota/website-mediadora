


// Create a clone of the menu, right next to original. source: https://codepen.io/senff/pen/ayGvD



var navigationBar = document.querySelector('.navigationBar');
var navigationSticky = navigationBar.cloneNode(true);

navigationBar.after(navigationSticky);

navigationBar.classList.add('original');
navigationSticky.classList.add('cloned');
navigationSticky.setAttribute('style', 'display: none; position: fixed; top: 0px; margin-top: 0px; z-index: 500;');

scrollIntervalID = setInterval(stickIt, 10);          


function stickIt() {

    var orgElement = document.querySelector('.original');
    var cloElement = document.querySelector('.cloned');

    var orgElementTop = document.querySelector('.original').offsetTop;
    var orgElementLeft = document.querySelector('.original').offsetLeft;
    
    var windowScroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (windowScroll >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.     
        // var widthOrgElement = orgElement.css('width');
        navigationSticky.setAttribute('style', 'position: fixed; top: 0px; margin-top: 0px; z-index: 500;');
        navigationBar.setAttribute('visibility','hidden');
    } else {
        // not scrolled past the menu; only show the original menu.
        navigationSticky.setAttribute('style', 'display: none; position: fixed; top: 0px; margin-top: 0px; z-index: 500;');
        navigationBar.setAttribute('visibility','visible');
    }
}



/*$('#navigationBar').addClass('original').clone().insertAfter('#navigationBar').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}
*/

// Opens the menu when the hamburguer icon is clicked.

var navigationIcon = document.querySelector('.navigation-icon');
var drawer = document.querySelector('.navigation-responsive');
var navigationClose = document.querySelector('.navigation-close');
var close_element1 = document.querySelector('.close_element1');
var close_element2 = document.querySelector('.close_element2');
var close_element3 = document.querySelector('.close_element3');

navigationIcon.addEventListener('click', function(e) {
drawer.classList.add('open');
navigationIcon.classList.remove('open');
navigationClose.classList.add('open');
e.stopPropagation();
});
navigationClose.addEventListener('click', function(e) {
drawer.classList.remove('open');
navigationIcon.classList.add('open');
navigationClose.classList.remove('open');
e.stopPropagation();
});
close_element1.addEventListener('click', function(e) {
drawer.classList.remove('open');
navigationIcon.classList.add('open');
navigationClose.classList.remove('open');
e.stopPropagation();
});
close_element2.addEventListener('click', function(e) {
drawer.classList.remove('open');
navigationIcon.classList.add('open');
navigationClose.classList.remove('open');
e.stopPropagation();
});
close_element3.addEventListener('click', function(e) {
drawer.classList.remove('open');
navigationIcon.classList.add('open');
navigationClose.classList.remove('open');
e.stopPropagation();
});



/*var formInput = document.querySelector('input');
formInput.addEventListener('input', function(e) {
  if (formInput.value.length === 0) {
    var inputID=formInput.getAttribute('id');
    var item=formInput.parentNode
    var formLabel = item.querySelector('label')
    formInput.classList.remove('decrease');
    formLabel.classList.remove('show');
    formLabel.classList.add('hide');
    formLabel.classList.remove('up');
  }
  else {
    var inputID=formInput.getAttribute('id');
    var item=formInput.parentNode
    var formLabel = item.querySelector('label')
    formInput.classList.add('decrease');
    formLabel.classList.add('show');
    formLabel.classList.remove('hide');
    formLabel.classList.remove('show');
    formLabel.classList.add('up');
  }
  e.stopPropagation();
});*/


var formInputs = document.querySelectorAll('input,textarea');
formInputs.forEach(function(element) {
  element.addEventListener('input', function(e) {
    if (element.value.length === 0) {
      var inputID=element.getAttribute('id');
      var item=element.parentNode
      var formLabel = item.querySelector('label')
      element.classList.remove('decrease');
      formLabel.classList.remove('show');
      formLabel.classList.add('hide');
      formLabel.classList.remove('up');
    }
    else {
      var inputID=element.getAttribute('id');
      var item=element.parentNode
      var formLabel = item.querySelector('label')
      element.classList.add('decrease');
      formLabel.classList.add('show');
      formLabel.classList.remove('hide');
      formLabel.classList.remove('show');
      formLabel.classList.add('up');
    }
    e.stopPropagation();
  });
}, this);





var fixedMenu = document.querySelector('.cloned');
var navigationIconFixed = fixedMenu.querySelector('.navigation-icon');
var drawerFixed = fixedMenu.querySelector('.navigation-responsive');
var navigationCloseFixed = fixedMenu.querySelector('.navigation-close');
var close_element1Fixed = fixedMenu.querySelector('.close_element1');
var close_element2Fixed = fixedMenu.querySelector('.close_element2');
var close_element3Fixed = fixedMenu.querySelector('.close_element3');

navigationIconFixed.addEventListener('click', function(e) {
drawerFixed.classList.add('open');
navigationIconFixed.classList.remove('open');
navigationCloseFixed.classList.add('open');
e.stopPropagation();
});
navigationCloseFixed.addEventListener('click', function(e) {
drawerFixed.classList.remove('open');
navigationIconFixed.classList.add('open');
navigationCloseFixed.classList.remove('open');
e.stopPropagation();
});
close_element1Fixed.addEventListener('click', function(e) {
drawerFixed.classList.remove('open');
navigationIconFixed.classList.add('open');
navigationCloseFixed.classList.remove('open');
e.stopPropagation();
});
close_element2Fixed.addEventListener('click', function(e) {
drawerFixed.classList.remove('open');
navigationIconFixed.classList.add('open');
navigationCloseFixed.classList.remove('open');
e.stopPropagation();
});
close_element3Fixed.addEventListener('click', function(e) {
drawerFixed.classList.remove('open');
navigationIconFixed.classList.add('open');
navigationCloseFixed.classList.remove('open');
e.stopPropagation();
});
