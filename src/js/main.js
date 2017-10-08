
$(document).ready(function() {
  
  // Slide up/down for sidebar menu items 
  
  var $menulink = $('.sidebar__nav-section li a'),
      $submenu = $('.nav-section__subsection'),
      $mobileNav = $('.mobile-nav');
  
  $($menulink).click(function(){

    if($(this).hasClass('nav-section__title') && $(this).siblings().length == 1) {
      
      $(this).parent().addClass('active').siblings().removeClass('active');
      $(this).siblings($submenu).slideToggle('fast');
      $($submenu).not($(this).siblings($submenu)).slideUp('fast');
      
    } else {
      console.log(this);
      $('.nav-section__subsection li, .nav-section__title li').removeClass('active');
      $(this).parent().addClass('active').siblings().removeClass('active');
      
      // Show/hide mobile menu + hamburger animation when clicking menu item
      $mobileNav.toggleClass('hide show');
      $('.bar').toggleClass('animate');
    }
  });
  
  //Mobile menu animation
  
  $(function () {
    $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
        $mobileNav.toggleClass('hide show');
    })
  });
    
  //Show code while clicking on code tab
  
  var $codetab = $('.code-nav li a');
  
  $($codetab).click(function(e){
    e.preventDefault();
  
    var currentAttrValue = $(this).attr('href');
  
    $('.code-section__content ' + currentAttrValue).fadeIn(400).siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
  })
  
  // Makinh code tab header as wide as parent's width
  
  var parentwidth = $("#wrap").width();
    $(".code-nav").addClass('fixed').width(parentwidth);  
  
});