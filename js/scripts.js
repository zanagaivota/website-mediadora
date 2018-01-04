


var navigationBar = document.querySelector('.navigationBar');
var navigationSticky = navigationBar.cloneNode(true);
var nextSibling = document.getElementById('insurance');

/*navigationBar.after(navigationSticky);*/
var parent = document.querySelector('body');
parent.insertBefore(navigationSticky, nextSibling);

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


// Make the form labels appear on input 

(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();


var formInputs = document.querySelectorAll('input,textarea');
formInputs.forEach(function(element) {
  element.addEventListener('input', function(e) {
    if (element.value.length === 0) {
      var inputID=element.getAttribute('id');
      var item=element.parentNode
      var formLabel = item.querySelector('label')
      element.classList.remove('decrease');
      /*formLabel.classList.remove('show');*/
      formLabel.classList.add('hide');
      formLabel.classList.remove('up');
    }
    else {
      var inputID=element.getAttribute('id');
      var item=element.parentNode
      var formLabel = item.querySelector('label')
      element.classList.add('decrease');
      /*formLabel.classList.add('show');*/
      formLabel.classList.remove('hide');
      /*formLabel.classList.remove('show');*/
      formLabel.classList.add('up');
    }
    e.stopPropagation();
  });
}, this);


