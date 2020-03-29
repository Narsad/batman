$(document).ready(function(){
let tabsItem = $('.manu-item');

tabsItem.on('click', function(event) {
  event.preventDefault();
  let activeContent = $(this).attr('href');
  console.log(activeContent);
  $('.visible').toggleClass('visible');
  $(activeContent).toggleClass('visible');
  $('.manu-item-active').toggleClass('manu-item-active');
  $(this).toggleClass('manu-item-active');
  });
});
