$(document).ready(function(){
  var count = $('video').length;
  console.log(count);
  $('.servers-name li').click(function(){
    var vid = $(this).data('class');
    $(this).addClass('active').siblings().removeClass('active');
    $('div[data-class="'+vid+'"]').fadeIn().siblings().hide();
  });

  // Default to open
  $('div[data-default="true"]').fadeIn().siblings().hide();

  // Select link
  $('.link-box input').click(function(){
    $(this).select();
  });
});