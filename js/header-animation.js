//Check it later to make it better

/*$.fn.getContainerHeightbyId = function(id, document){
   var h = document.querySelector(id).getBoundingClientRect.height;
   return h;
};*/

$(function() {
   var winheight = $(window).innerHeight()
   var welcome_sec_height = document.querySelector('#welcome-section').getBoundingClientRect.height;
   var about_sec_height = document.querySelector('#about').getBoundingClientRect.height;
   var projects_sec_height = document.querySelector('#about').getBoundingClientRect.height;

   $(window).scroll(function () {
      if ($(this).scrollTop() >= 0 && $(this).scrollTop() < (80 + welcome_sec_height))
      {
         $('nav').removeClass('navbar-color-changer');
      }
      if (($(this).scrollTop() > welcome_sec_height - 80) &&  (80 + welcome_sec_height + about_sec_height))
      {
         $('nav').addClass('navbar-color-changer');
      }
      if ((80 + welcome_sec_height + about_sec_height - 80) && (80 + welcome_sec_height + about_sec_height + projects_sec_height))
      {
         $('nav').removeClass('navbar-color-changer')
      } 
      if ($(this).scrollTop() > (winheight*3)) 
      {
         $('nav').add('navbar-color-changer')
      } 
   });
});


  