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

  $('a.select-tag').click(function() {
    $('a.select-tag').removeClass("active");
    $(this).addClass("active");
    filterTag($(this).data("tag"));
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