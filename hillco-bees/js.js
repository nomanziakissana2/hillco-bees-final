window.onload((document.getElementById('main-search').style.display = 'none'));
function showSearch() {
  document.getElementById('main-search').style.display = 'block';
  document.querySelector('.search-div').classList.add('searchanim');
  document.querySelector('.search-div').style.zIndex="2";
  // document.body.style.overflow = 'fixed';
}
function hideSearch() {
  document.getElementById('main-search').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function sidebarShow() {
  document.querySelector('.slidemain').style.display = 'block';
  document.querySelector('.sidebar').style.left = '0%';
  document.querySelector('#bottom').classList.add('bottomLoad');
  // document.body.style.overflow = 'hidden';
  // document.querySelector('.sidebar').classList.add("load");

  // document.body.style.position = 'fixed';
}
function hideSidebar() {
  document.querySelector('.slidemain').style.display = 'none';
  document.querySelector('.sidebar').style.left = '-200%';
  document.body.style.overflow = 'auto';
  document.querySelector('.bottom').classList.remove('bottomLoad');
}
var rot = false;
function rotate() {
  rot = !rot;
  if (rot == true) {
    document.querySelector('#pls').classList.add('rotate');
    document.querySelector('#pls').style.opacity = '0';
    document.querySelector('#mins').classList.add('rotate');
    document.querySelector('#mins').style.opacity = '1';
  } else {
    document.querySelector('#pls').classList.remove('rotate');
    document.querySelector('#mins').classList.remove('rotate');
    document.querySelector('#pls').style.opacity = '1';

    document.querySelector('#mins').classList.add('anti-rotate');
    document.querySelector('#pls').classList.add('anti-rotate');
    document.querySelector('#mins').style.opacity = '0';
  }
}
// document.getElementById('img-slide').classList.add('img-lazy-load');

// window.addEventListener(
//   'scroll',
//   (zoomin = () => {
//     var main = document.querySelector('#conferance');
//     var windowHeight = window.innerHeight;
//     console.log(windowHeight);
//     var revealtop = main.getBoundingClientRect().top;
//     var revealPoint = 600;

//     // var istrue = ;
//     if (windowHeight > 723) {
//       document.querySelector('.img1').classList.add('lazyloader');
//       document.querySelector('.img2').classList.add('lazyloader');
//       document.querySelector('.img3').classList.add('lazyloader');
//       document.querySelector('.img4').classList.add('lazyloader');
//       document.querySelector('.img5').classList.add('lazyloader');
//       document.querySelector('.img6').classList.add('lazyloader');
//     }
//   })
// );

function reveal() {
  var reveals = document.querySelectorAll('.container');

  for (var i = 0; i < reveals.length; i++) {
    console.log(reveals.length);
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 500;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('lazyloader');
    } else {
      reveals[i].classList.remove('lazyloader');
    }
  }
}

window.addEventListener('scroll', reveal);
