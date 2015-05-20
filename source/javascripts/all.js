$(function() {
  // Masonry
  var $grid = $('#grid');
  $grid.imagesLoaded(function() {
    $grid.masonry({
      // Options
      itemSelector : '.grid-item',
      columnWidth : $(".item").width(),
      gutter: 0
    });
  });
});

function filterTag(tag) {
  if (tag == "all") {
    $('.grid-item').show();
  } else {
    $('.grid-item').hide();
    $('.grid-item.tag-'+tag+'').show();
  }
  
  $("#grid").masonry('destroy'); 
  $("#grid").masonry();
}