/************/
/*** Nav ****/
/************/

const offset = 15;

$('nav ul li a').on('click', function(event) {
  $(this)
    .find('a')
    .removeClass('active-nav');
  $(this).addClass('active-nav');
});

$(window).on('scroll', function() {
  $('.section').each(function() {
    if ($(window).scrollTop() + offset >= $(this).offset().top) {
      var id = $(this).attr('id');
      $('nav ul li a').removeClass('active-nav');
      $('nav ul li a[href=\\#' + id + ']').addClass('active-nav');
    }
  });
});

let navBar = document.getElementById('navBar');
let hamburger = document.getElementById('hamburger-icon');
function openCloseNav() {
  if (navBar.style.height === '100vh') {
    navBar.style.height = '8vh';
    hamburger.classList.remove("hamburger-x");
  } else {
    navBar.style.height = '100vh';
    hamburger.classList.add("hamburger-x");
  }

  function newFunction() {
    hamburger.style.color = blue;
  }
}

/************/
/* Carousel */
/************/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
}

/*************/
/* Countdown */
/*************/

// Set the date we're counting down to
var countDownDate = new Date('May 9, 2020 11:00:00').getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById('countdown-days').innerHTML = days;
  document.getElementById('countdown-hrs').innerHTML = hours;
  document.getElementById('countdown-mins').innerHTML = minutes;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown-num').innerHTML = 'EXPIRED';
  }
}, 1000);
