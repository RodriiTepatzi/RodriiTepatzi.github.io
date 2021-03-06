$(window).on('load', (function() {
   var welcome_sec_height = document.getElementById('welcome-section').clientHeight;
   var about_sec_height = document.getElementById('about-section').clientHeight;
   var projects_sec_height = document.getElementById('projects-section').clientHeight;

   $(window).resize (function(){
      welcome_sec_height = document.getElementById('welcome-section').clientHeight;
      about_sec_height = document.getElementById('about-section').clientHeight;
      projects_sec_height = document.getElementById('projects-section').clientHeight;
   });

   $(window).scroll(function () {
      if (($(this).scrollTop() >= 0) && ($(this).scrollTop() < (welcome_sec_height)))
      {
         $('nav').removeClass('navbar-color-changer')
      }
      else if (($(this).scrollTop() > (welcome_sec_height - 80)) &&  ($(this).scrollTop() < (welcome_sec_height + about_sec_height)))
      {
         $('nav').addClass('navbar-color-changer')
      }
      else if (($(this).scrollTop() > (welcome_sec_height + about_sec_height - 80)) && ($(this).scrollTop() < (welcome_sec_height + about_sec_height + projects_sec_height)))
      {
         $('nav').removeClass('navbar-color-changer')
      } 
   });
}));

