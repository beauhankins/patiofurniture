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
