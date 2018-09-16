$(document).ready(function(){
  $('.carousel').carousel({
    interval: false
  });
  $('.events-block').readmore({
    speed: 700,
    maxHeight: 280,
    moreLink: '<a href="#" class="yellow-button">Більше подій</a>',
    lessLink: '<a href="#" class="yellow-button">Приховати</a>'
  });
  $('.news-block').readmore({
    speed: 700,
    maxHeight: 420,
    moreLink: '<a href="#" class="yellow-button">Більше новин</a>',
    lessLink: '<a href="#" class="yellow-button">Приховати</a>'
  });
$('#slider-desc-first').readmore({
        speed: 700,
        maxHeight: 111,
        moreLink: '<a href="#" class="yellow-button">Читати далі</a>',
        lessLink: '<a href="#" class="yellow-button">Приховати</a>'
      });
  $(".carousel-control").click(function(e) {
      setTimeout(
      function() 
      {
       $('.slider-desc').readmore({
        speed: 700,
        maxHeight: 111,
        moreLink: '<a href="#" class="yellow-button">Читати далі</a>',
        lessLink: '<a href="#" class="yellow-button">Приховати</a>'
      });
      }, 1);
  });
});