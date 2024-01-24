$(document).ready(function() {
    var lastScrollTop = 0;
    var delta = 5;
    var topHeaderHeight = $('.top-header').outerHeight();
  
    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
  
      // Scrolling down
      if (Math.abs(lastScrollTop - currentScroll) <= delta) {
        return;
      }
  
      if (currentScroll > lastScrollTop && currentScroll > topHeaderHeight) {
        // Scrolling down & beyond the top header height
        $('.top-header').css('top', `-${topHeaderHeight}px`);
        $('.secondary-header').css('top', '0');
      } else {
        // Scrolling up or at the top
        $('.top-header').css('top', '0');
        $('.secondary-header').css('top', `-${topHeaderHeight}px`);
      }
  
      lastScrollTop = currentScroll;
    });
  });
  
  
 // JavaScript for dropdown functionality specific to the "Programmes" list item
 const programmesDropdown = document.getElementById('programmesDropdown');
 const dropdownContent = programmesDropdown.querySelector('.dropdown-content');

 programmesDropdown.addEventListener('click', function(event) {
   if (event.target.classList.contains('dropbtn')) {
     dropdownContent.classList.toggle('active');
   }
 });    
 $(document).ready(function() {
  // Show/hide dropdown on click
  $('.dropdown > a').click(function(e) {
    e.preventDefault(); // Prevent default link behavior
    $(this).next('.dropdown-content').slideToggle('fast');
  });
});

// Example using JavaScript/jQuery for mobile dropdown interaction
$('.has-submenu > a').click(function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('active');
});

// JavaScript/jQuery for toggling hamburger menu
$('.hamburger-menu').click(function() {
  $('.menu > li').toggle(); // Toggle display of nav li items on click
});

console.log('Document ready!');
$(document).ready(function () {
  var lastScrollTop = 0;
  var delta = 5;
  
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();

    // Scrolling down
    if (Math.abs(lastScrollTop - currentScroll) <= delta) {
      return;
    }

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      $('.footer').removeClass('show-footer');
    } else {
      // Scrolling up
      $('.footer').addClass('show-footer');
    }

    lastScrollTop = currentScroll;
  });
});
